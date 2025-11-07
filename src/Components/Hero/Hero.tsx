import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero section" aria-labelledby="hero-title" id="About">
      <div className="hero__inner container">
        <div className="hero__body">
          <div className="hero__title">
            <h1>
              <div>
                HI! I’m <span className="accent-color">Aleksander Zolotarev.</span>
              </div>
              <div>
                But you can call me <span className="accent-color">Gold</span>
              </div>
            </h1>
          </div>
          <div className="hero__subtitle">
            <h4>I’m a front-end web developer</h4>
          </div>

          <ul className="hero__actions">
            <li className="hero__item">
              <h5>
                <NavLink to="/projects" className="hero__link">
                  see my projects
                </NavLink>
              </h5>
            </li>
            <li className="hero__item">
              <h5>
                <NavLink to="/about-me" className="hero__link">
                  more about me
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
