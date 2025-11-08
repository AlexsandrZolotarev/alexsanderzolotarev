import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLang } from '../../hooks/useLang';
import { useAppReady } from '../../hooks/useAppReady';

type LoaderProps = {
  delay: number;
};

const Loader: React.FC<LoaderProps> = ({ delay }) => {
  const refSvg = useRef<SVGSVGElement | null>(null);
  const { setAppReady } = useAppReady();
  const { translate } = useLang();
  const [done, setDone] = useState(false);
  useLayoutEffect(() => {
    if (refSvg.current) {
      Array.from(refSvg.current.children).forEach((item, index) => {
        const path = item.querySelector('path');
        const circle = item?.querySelector('circle');

        if (circle) {
          const len = circle.getTotalLength();
          circle.style.strokeDasharray = String(len + 1);
          circle.style.strokeDashoffset = String(len);
          circle.style.animation = 'draw 2s ease forwards';
        }

        if (path) {
          const len = path.getTotalLength();
          if ((item as SVGGElement).id === 'mouth-left') {
            path.style.strokeDasharray = String(len);
            path.style.strokeDashoffset = String(len);
            path.style.animation = `draw 4s linear forwards`;
          } else {
            path.style.strokeDasharray = String(len);
            path.style.strokeDashoffset = String(len);
            path.style.animation = 'draw 2s ease forwards';
          }
        }
      });
    }
  }, []);
  useEffect(() => {
    const id = window.setTimeout(() => setDone(true), delay - 700);
    return () => {
      setAppReady(true);
      window.clearTimeout(id);
    };
  }, [delay]);

  return (
    <div
      className={`preloader ${done ? 'done' : ''}`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
      aria-hidden={done ? 'true' : 'false'}
    >
      <div className="preloader__body">
        <div className="preloader__logo">
          <svg
            ref={refSvg}
            data-name="deconstructedLogo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 90 80"
            width="90"
            height="80"
            className="preloader__logo-icons"
            aria-hidden="true"
            focusable="false"
          >
            <g id="brow-left">
              <path d="M29.5 14.0537C25.5753 14.1766 21.8346 15.7412 19.0449 18.4463C16.0801 21.3213 15.5 25.2001 15.5 29.0908V71.7578C15.5 72.7765 15.3048 73.7852 14.9268 74.7256C14.5487 75.6659 13.9949 76.5191 13.2979 77.2373C12.6007 77.9556 11.7741 78.5252 10.8652 78.9131C9.95642 79.3009 8.98277 79.5 8 79.5C7.01723 79.5 6.04358 79.3009 5.13477 78.9131C4.22588 78.5252 3.39929 77.9556 2.70215 77.2373C2.00508 76.5191 1.45132 75.6659 1.07324 74.7256C0.695176 73.7852 0.50003 72.7765 0.5 71.7578V29.0908C0.500023 21.5132 3.60425 14.2429 9.13477 8.87988C14.5481 3.63057 21.8523 0.631358 29.5 0.505859V14.0537Z" />
            </g>
            <g id="brow-right">
              <path d="M0.5 0.505859C8.14771 0.631358 15.4519 3.63057 20.8652 8.87988C26.3958 14.2429 29.5 21.5132 29.5 29.0908V71.7578C29.5 72.7765 29.3048 73.7852 28.9268 74.7256C28.5487 75.6659 27.9949 76.5191 27.2979 77.2373C26.6007 77.9556 25.7741 78.5252 24.8652 78.9131C23.9564 79.3009 22.9828 79.5 22 79.5C21.0172 79.5 20.0436 79.3009 19.1348 78.9131C18.2259 78.5252 17.3993 77.9556 16.7021 77.2373C16.0051 76.5191 15.4513 75.6659 15.0732 74.7256C14.6952 73.7852 14.5 72.7765 14.5 71.7578V29.0908C14.5 25.2001 13.9199 21.3213 10.9551 18.4463C8.16542 15.7412 4.42474 14.1766 0.5 14.0537V0.505859Z" />
            </g>
            <g id="eye-right">
              <path d="M5.50391 0.5H22.0176C22.3488 0.500035 22.8065 0.536522 23.2617 0.609375C23.7239 0.683351 24.1441 0.78849 24.418 0.912109C25.0222 1.18492 25.5741 1.58676 26.041 2.0957C26.5079 2.60471 26.881 3.21138 27.1357 3.88184C27.3904 4.55226 27.5215 5.27218 27.5215 6C27.5215 6.72782 27.3904 7.44774 27.1357 8.11816C26.881 8.78862 26.5079 9.39529 26.041 9.9043C25.5741 10.4132 25.0222 10.8151 24.418 11.0879C23.814 11.3605 23.1683 11.5 22.5176 11.5H5.50391C4.19141 11.4999 2.92286 10.9316 1.98047 9.9043C1.03682 8.87552 0.5 7.47182 0.5 6C0.5 4.52818 1.03682 3.12448 1.98047 2.0957C2.92286 1.06844 4.19141 0.500104 5.50391 0.5Z" />
            </g>

            <g id="mouth-left">
              <path d="M26.3528 39.7454H46.9083M46.9083 39.7454H26.3502L48.8362 15.2055M46.9083 39.7454L73.9547 10.1121C74.214 9.31049 74.3215 8.41892 74.3296 7.35274C74.3296 7.32314 74.3297 7.29357 74.33 7.26404M48.8362 15.2055L48.6656 15.3938M48.8362 15.2055H28.3645H7.89281M74.286 5.82075L74.2861 5.82336M74.33 7.26404C74.3311 6.81646 74.3152 6.33826 74.2861 5.82336M74.33 7.26404C74.3347 6.77161 74.374 6.29005 74.2861 5.82336M74.2861 5.82336C73.6078 2.21849 70.5774 0.5 66.9417 0.5H7.98638C3.85177 0.5 0.5 3.01578 0.5 7.35274C0.5 11.6897 3.85177 15.2055 7.98638 15.2055" />
            </g>
            <g id="mouth-right">
              <path d="M0.962051 27.0031C0.588728 27.9604 0.500008 28.9216 0.5 29.9479C0.5 30.0402 0.501517 30.1322 0.504532 30.2238C0.514194 30.5173 0.539221 30.8067 0.578781 31.0912C0.610086 31.3163 0.6505 31.5384 0.699615 31.7569C0.710741 31.8064 0.722317 31.8557 0.734329 31.9048C1.3935 34.6004 3.38264 36.7369 5.92474 37.4991C6.57968 37.6955 7.27133 37.8006 7.98639 37.8006H10.237H66.9417C71.0763 37.8006 74.428 34.2848 74.428 29.9479C74.428 25.6109 71.0763 22.0951 66.9417 22.0951H25.3737L45.0856 0.5H44.9862H24.5266L12.9032 13.4773L1.27988 26.4546M0.962051 27.0031L1.1972 26.5972M0.962051 27.0031C1.00973 26.8808 1.11361 26.7304 1.1972 26.5972M1.1972 26.5972C1.22915 26.5463 1.25813 26.4979 1.27988 26.4546M1.1972 26.5972L1.27988 26.4546" />
            </g>
          </svg>
        </div>
        <div className="preloader__title">
          {translate('preloader.title')}
          <span className="preloader__title-dot">.</span>
          <span className="preloader__title-dot">.</span>
          <span className="preloader__title-dot">.</span>
        </div>
      </div>
      <div className="preloader__footer">
        <div className="preloader__footer-title">{translate('preloader.footer')}</div>
      </div>
    </div>
  );
};
export default Loader;
