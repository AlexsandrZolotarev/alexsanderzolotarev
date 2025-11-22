import { useAppReady } from '@/hooks/useAppReady';
import { useLang } from '@/hooks/useLang';
import { useAppSelector } from '@/Redux/hooks';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const isTextVisible = useAppSelector((state) => state.visibilitySlice.isTextVisible);
  const { translate } = useLang();
  const { appReady } = useAppReady();

  return (
    <section className="hero section" aria-labelledby="hero-title" id="About">
      <div className="hero__inner container">
        <div className="hero__body">
          <div className="hero__title">
            <h1>
              <div
                className={`hero__name ${isTextVisible ? 'is-active' : 'is-lock'} ${appReady ? 'is-animate' : ''}`}
              >
                {translate('hero.title.myname')}
                <span className="accent-color"> {translate('hero.title.name')}</span>
              </div>
              <div
                className={`hero__callme ${isTextVisible ? 'is-active' : 'is-lock'} ${appReady ? 'is-animate' : ''}`}
              >
                {translate('hero.title.callme')}
                <span className="gold-color">{translate('hero.title.gold')}</span>
              </div>
            </h1>
          </div>
          <div
            className={`hero__subtitle ${isTextVisible ? 'is-active' : 'is-lock'} ${appReady ? 'is-animate' : ''}`}
          >
            <h4>{translate('hero.subtitle')}</h4>
          </div>

          <ul
            className={`hero__actions ${isTextVisible ? 'is-active' : 'is-lock'} ${appReady ? 'is-animate' : ''}`}
          >
            <li className="hero__item">
              <h5>
                <NavLink to="/projects" className="hero__link">
                  {translate('hero.links.projects')}
                </NavLink>
              </h5>
            </li>
            <li className="hero__item">
              <h5>
                <NavLink to="/about-me" className="hero__link">
                  {translate('hero.links.about')}
                </NavLink>
              </h5>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
