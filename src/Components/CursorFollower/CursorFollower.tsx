import { useEffect, useRef } from 'react';

export default function CursorFollower() {
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const tgt = useRef({ x: pos.current.x, y: pos.current.y });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      tgt.current.x = e.clientX;
      tgt.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
        dotRef.current.style.opacity = '1';
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${e.clientX}px`;
        ringRef.current.style.top = `${e.clientY}px`;
        ringRef.current.style.opacity = '1';
      }
    };

    const onLeave = () => {
      if (ringRef.current) ringRef.current.style.opacity = '0';
      if (dotRef.current) dotRef.current.style.opacity = '0';
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerleave', onLeave);

    const tick = () => {
      const ease = 0.33;
      pos.current.x += (tgt.current.x - pos.current.x) * ease;
      pos.current.y += (tgt.current.y - pos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.left = `${pos.current.x}px`;
        ringRef.current.style.top = `${pos.current.y}px`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;

    const handleEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0';
      ring.style.width = '50px';
      ring.style.height = '50px';
    };
    const handleLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '1';
      ring.style.width = '24px';
      ring.style.height = '24px';
    };
    const interactive = document.querySelectorAll('.accent-color, a, button, .hover-target');

    interactive.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);
  useEffect(() => {
    const down = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '50px';
        ringRef.current.style.height = '50px';
      }
    };
    const up = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '24px';
        ringRef.current.style.height = '24px';
      }
    };
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);
    return () => {
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursorDot" aria-hidden />
      <div ref={ringRef} className="cursorRing" aria-hidden />
    </>
  );
}
