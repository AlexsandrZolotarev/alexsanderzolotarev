// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// export type HoverKey = 'projects' | 'about' | 'contact' | null;

// const NUM_BLOBS = 7;

// export function HeroCanvas({ hoverKey }: { hoverKey: HoverKey }) {
//   const mountRef = useRef<HTMLDivElement | null>(null);

//   const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
//   const materialRef = useRef<THREE.ShaderMaterial | null>(null);
//   const rafRef = useRef<number | null>(null);

//   useEffect(() => {
//     const mount = mountRef.current;
//     if (!mount) return;

//     // renderer
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     renderer.setSize(mount.clientWidth, mount.clientHeight);
//     renderer.setClearColor(0x000000, 0);
//     renderer.outputColorSpace = THREE.SRGBColorSpace;
//     mount.appendChild(renderer.domElement);
//     rendererRef.current = renderer;

//     // scene/camera (fullscreen quad)
//     const scene = new THREE.Scene();
//     const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

//     const geo = new THREE.PlaneGeometry(2, 2);

//     // palettes close to your ref
//     const colorsA = [
//       new THREE.Color('#8BFFB8'),
//       new THREE.Color('#6BCBFF'),
//       new THREE.Color('#FFD66C'),
//       new THREE.Color('#FF9DE2'),
//       new THREE.Color('#66F2C2'),
//       new THREE.Color('#B97AFF'),
//       new THREE.Color('#A7FF6B'),
//     ];
//     const colorsB = [
//       new THREE.Color('#6BCBFF'),
//       new THREE.Color('#B97AFF'),
//       new THREE.Color('#FF9DE2'),
//       new THREE.Color('#FFD66C'),
//       new THREE.Color('#6BCBFF'),
//       new THREE.Color('#66F2C2'),
//       new THREE.Color('#FFB86B'),
//     ];

//     // uniforms
//     const uBlobs = Array.from({ length: NUM_BLOBS }, () => new THREE.Vector2(0, 0));
//     const uR = Array.from({ length: NUM_BLOBS }, () => 0.25);
//     const uCA = Array.from({ length: NUM_BLOBS }, (_, i) => colorsA[i % colorsA.length].clone());
//     const uCB = Array.from({ length: NUM_BLOBS }, (_, i) => colorsB[i % colorsB.length].clone());

//     const material = new THREE.ShaderMaterial({
//       transparent: true,
//       depthWrite: false,
//       uniforms: {
//         uTime: { value: 0 },
//         uRes: { value: new THREE.Vector2(mount.clientWidth, mount.clientHeight) },
//         uHover: { value: 0 }, // 0..1
//         uBlobs: { value: uBlobs },
//         uR: { value: uR },
//         uCA: { value: uCA },
//         uCB: { value: uCB },
//       },
//       vertexShader: `
//         varying vec2 vUv;
//         void main() {
//           vUv = uv;
//           gl_Position = vec4(position.xy, 0.0, 1.0);
//         }
//       `,
//       fragmentShader: `
//         precision highp float;

//         #define N ${NUM_BLOBS}

//         uniform float uTime;
//         uniform vec2 uRes;
//         uniform float uHover;
//         uniform vec2 uBlobs[N];
//         uniform float uR[N];
//         uniform vec3 uCA[N];
//         uniform vec3 uCB[N];

//         varying vec2 vUv;

//         float hash(vec2 p){
//           p = fract(p * vec2(123.34, 456.21));
//           p += dot(p, p + 34.345);
//           return fract(p.x * p.y);
//         }

//         void main(){
//           // aspect-correct uv in [-1..1]
//           vec2 uv = vUv * 2.0 - 1.0;
//           float aspect = uRes.x / uRes.y;
//           uv.x *= aspect;

//           // base background like light paper
//           vec3 bg = vec3(0.96, 0.965, 0.975);

//           float field = 0.0;

//           // for coloring (top-2 dominance)
//           float w1 = -1.0; int i1 = 0;
//           float w2 = -1.0; int i2 = 0;

//           // metaballs field
//           for(int i=0;i<N;i++){
//             vec2 p = uBlobs[i];
//             float r = uR[i];

//             float d = length(uv - p);
//             float w = (r*r) / max(d*d, 0.0008); // stronger center

//             field += w;

//             if(w > w1){ w2 = w1; i2 = i1; w1 = w; i1 = i; }
//             else if(w > w2){ w2 = w; i2 = i; }
//           }

//           // edge softness
//           float aa = fwidth(field) * 0.8;
//           float threshold = mix(1.05, 0.95, uHover); // hover -> чуть больше заливки
//           float mask = smoothstep(threshold - aa, threshold + aa, field);

//           // inside gradient direction (moves slightly)
//           vec2 gUv = vUv + vec2(sin(uTime*0.08), cos(uTime*0.06))*0.03;
//           float gy = smoothstep(0.0, 1.0, gUv.y);
//           float gx = smoothstep(0.0, 1.0, gUv.x);

//           // blend colors from dominant blobs
//           float k = clamp(w2 / max(w1, 0.0001), 0.0, 1.0);
//           vec3 cA = mix(uCA[i1], uCA[i2], k);
//           vec3 cB = mix(uCB[i1], uCB[i2], k);

//           vec3 col = mix(cA, cB, gy);
//           col = mix(col, col.bgr, gx*0.25);

//           // fake soft highlight (plastic)
//           // using field slope approximation
//           float spec = smoothstep(0.0, 1.0, (field - threshold) * 0.35);
//           col += spec * 0.12;

//           // subtle glow at edges
//           float edge = smoothstep(0.0, 1.0, (field - threshold) * 0.9);
//           col += edge * 0.06;

//           // grain
//           float n = hash(gl_FragCoord.xy + uTime*12.0);
//           bg += (n - 0.5) * 0.015;

//           // final
//           vec3 outCol = mix(bg, col, mask);

//           // tiny bloom-ish lift
//           outCol += mask * 0.03;

//           gl_FragColor = vec4(outCol, 1.0);
//         }
//       `,
//     });

//     materialRef.current = material;

//     const mesh = new THREE.Mesh(geo, material);
//     scene.add(mesh);

//     // motion params
//     const base = Array.from({ length: NUM_BLOBS }, (_, i) => ({
//       cx: (Math.random() * 1.6 - 0.8) * 1.2,
//       cy: Math.random() * 1.2 - 0.6,
//       ax: 0.25 + Math.random() * 0.35,
//       ay: 0.18 + Math.random() * 0.28,
//       sx: 0.08 + Math.random() * 0.08,
//       sy: 0.07 + Math.random() * 0.07,
//       ph: Math.random() * Math.PI * 2,
//       r: 0.22 + Math.random() * 0.28,
//     }));

//     // animate
//     const clock = new THREE.Clock();

//     const animate = () => {
//       rafRef.current = requestAnimationFrame(animate);
//       const t = clock.getElapsedTime();

//       material.uniforms.uTime.value = t;

//       // animate blobs positions (slow float)
//       const hover = material.uniforms.uHover.value as number;

//       for (let i = 0; i < NUM_BLOBS; i++) {
//         const b = base[i];

//         // hover -> чуть больше "живости"
//         const boost = 1.0 + hover * 0.25;

//         const x = b.cx + Math.sin(t * b.sx * boost + b.ph) * b.ax;
//         const y = b.cy + Math.cos(t * b.sy * boost + b.ph) * b.ay;

//         // keep within nice area
//         uBlobs[i].set(x, y);

//         // radii
//         uR[i] = b.r * (0.95 + 0.05 * Math.sin(t * 0.6 + i));
//       }

//       renderer.render(scene, camera);
//     };

//     animate();

//     // resize
//     const onResize = () => {
//       if (!rendererRef.current || !materialRef.current || !mountRef.current) return;
//       const m = mountRef.current;
//       rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//       rendererRef.current.setSize(m.clientWidth, m.clientHeight);
//       materialRef.current.uniforms.uRes.value.set(m.clientWidth, m.clientHeight);
//     };
//     window.addEventListener('resize', onResize);

//     return () => {
//       window.removeEventListener('resize', onResize);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);

//       geo.dispose();
//       material.dispose();
//       renderer.dispose();

//       if (renderer.domElement.parentElement === mount) mount.removeChild(renderer.domElement);

//       rendererRef.current = null;
//       materialRef.current = null;
//       rafRef.current = null;
//     };
//   }, []);

//   // update hover without пересоздания WebGL
//   useEffect(() => {
//     const mat = materialRef.current;
//     if (!mat) return;

//     const target =
//       hoverKey === 'projects' ? 1 : hoverKey === 'about' ? 1 : hoverKey === 'contact' ? 1 : 0;

//     // плавно
//     const start = mat.uniforms.uHover.value as number;
//     const end = target;
//     const t0 = performance.now();

//     const tick = () => {
//       const k = Math.min(1, (performance.now() - t0) / 220);
//       mat.uniforms.uHover.value = start + (end - start) * k;
//       if (k < 1) requestAnimationFrame(tick);
//     };
//     tick();
//   }, [hoverKey]);

//   return <div className="heroCanvas" ref={mountRef} aria-hidden />;
// }
