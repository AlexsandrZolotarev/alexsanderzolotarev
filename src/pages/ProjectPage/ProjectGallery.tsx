import { useEffect, useMemo, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Zoom } from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/zoom';
type Props = {
  images: string[];
  title?: string;
  startIndex?: number;
};

export function ProjectGallery({ images, title = '', startIndex = 0 }: Props) {
  const [fullscreen, setFullscreen] = useState(false);
  const swiperRef = useRef<SwiperInstance | null>(null);
  const swiperKey = useMemo(() => (fullscreen ? 'fullscreen' : 'inline'), [fullscreen]);
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!swiperRef.current) return;

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          swiperRef.current.slideNext();
          break;

        case 'ArrowLeft':
        case 'ArrowUp':
          swiperRef.current.slidePrev();
          break;

        case 'Escape':
          setFullscreen(false);
          break;
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);
  useEffect(() => {
    if (!fullscreen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [fullscreen]);

  if (!images?.length) return null;

  return (
    <div
      style={{
        position: fullscreen ? 'fixed' : 'relative',
        inset: fullscreen ? 0 : undefined,
        zIndex: fullscreen ? 9999 : 'auto',
        background: fullscreen ? '#000' : 'transparent',
        width: '100%',
        height: fullscreen ? '100vh' : 520,
      }}
    >
      {fullscreen && (
        <div
          onClick={() => setFullscreen(false)}
          style={{
            position: 'absolute',
            inset: 0,
            background: '#000',
          }}
        />
      )}

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          height: '100%',
        }}
      >
        {fullscreen && title && (
          <div
            style={{
              position: 'absolute',
              top: 16,
              left: 16,
              right: 16,
              zIndex: 2,
              color: '#fff',
              fontSize: 16,
              opacity: 0.9,
              pointerEvents: 'none',
            }}
          >
            {title}
          </div>
        )}

        <Swiper
          key={swiperKey}
          modules={[Navigation, Zoom]}
          navigation
          zoom
          slidesPerView={1}
          spaceBetween={16}
          initialSlide={Math.max(0, Math.min(startIndex, images.length - 1))}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          style={{ width: '100%', height: '100%' }}
        >
          {images.map((src) => (
            <SwiperSlide key={src}>
              <div
                className="swiper-zoom-container"
                onDoubleClick={() => setFullscreen((v) => !v)}
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={src}
                  alt=""
                  draggable={false}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    userSelect: 'none',
                    display: 'block',
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
