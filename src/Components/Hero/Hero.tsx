import { NavLink } from 'react-router-dom';
import { useLang } from '../../hooks/useLang';

const Hero = () => {
  const { translate } = useLang();
  return (
    <section className="hero section" aria-labelledby="hero-title" id="About">
      <div className="hero__inner container">
        <div className="hero__body">
          <div className="hero__title">
            <h1>
              <div>
                {translate('hero.title.myname')}
                <span className="accent-color"> {translate('hero.title.name')}</span>
              </div>
              <div>
                {translate('hero.title.callme')}
                <span className="accent-color">{translate('hero.title.gold')}</span>
              </div>
            </h1>
          </div>
          <div className="hero__subtitle">
            <h4>{translate('hero.subtitle')}</h4>
          </div>

          <ul className="hero__actions">
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
export default Hero;
