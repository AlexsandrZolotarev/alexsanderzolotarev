import { useAppReady } from '@/hooks/useAppReady';
import { useLang } from '@/hooks/useLang';
import { useAppSelector } from '@/Redux/hooks';
import Avatar from '../../images/Hero/Avatar.webp';
import { useEffect } from 'react';
function AboutPage() {
  const isTextVisible = useAppSelector((state) => state.visibilitySlice.isTextVisible);
  const { translate } = useLang();
  const { appReady } = useAppReady();
  useEffect(() => {
    document.body.classList.add('no-scroll-about');

    return () => {
      document.body.classList.remove('no-scroll-about');
    };
  }, []);
  return (
    <section className="about">
      <div
        className={`about__body ${isTextVisible ? 'is-active' : 'is-lock'} ${
          appReady ? 'is-animate' : ''
        }`}
      >
        <h1 className="about__title">{translate('about.title')}</h1>
        <p className="about__description">{translate('about.description')}</p>
        <div
          className={`about__list ${isTextVisible ? 'is-active' : 'is-lock'} ${
            appReady ? 'is-animate' : ''
          }`}
        >
          <div className="about__item">
            <a
              className="about__link"
              href="mailto:masterblacksmith@mail.ru"
              target="_blank"
              rel="noreferrer"
            >
              ↓ {translate('about.resume')}
            </a>
          </div>
        </div>
      </div>
      <div
        className={`about__inner ${isTextVisible ? 'is-active' : 'is-lock'} ${
          appReady ? 'is-animate' : ''
        }`}
      >
        <div className="about__avatar">
          <img src={Avatar} alt="" />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
