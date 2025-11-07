import avatar from '../../images/Hero/Avatar.webp';
import { IoBody } from 'react-icons/io5';
import { RiTeamFill } from 'react-icons/ri';
import { MdRateReview } from 'react-icons/md';

const Hero = () => {
  return (
    <section className="hero section" aria-labelledby="hero-title" id="About">
      <div className="hero__inner container">
        <div className="hero__clipPathGroup clipPathGroup" aria-hidden="true"></div>
        <div className="hero__body">
          <div className="hero__title">
            <h1 id="hero-title" className="live-typing">
              <div className="visually-hidden">
                <div>Hello! My name is Aleksander Zolotarev.</div>
                <div>I am a frontend developer</div>
              </div>
            </h1>
          </div>

          {/* <div className="hero__avatar">
            <img
              alt="Красивый молодой парень"
              className="hero__avatar-image"
              src={avatar}
              width={525}
              height={626}
            ></img>
            <div className="hero__avatar-background lights" aria-hidden="true"></div>
          </div> */}
          <div className="hero__chooseUS chooseUS">
            <ul className="chooseUS-list baseline">
              <li className="chooseUS-item">
                <div className="chooseUS-card">
                  <IoBody className="chooseUS-card__icon" />
                  <div className="chooseUS-card__title h6">About</div>
                  <div className="chooseUS-card__description">
                    <p>
                      I passion <span>Front-end</span> development and a commitment to delivering
                      quality work and give the best service.
                    </p>
                  </div>
                </div>
              </li>
              <li className="chooseUS-item">
                <div className="chooseUS-card">
                  <MdRateReview className="chooseUS-card__icon" />
                  <div className="chooseUS-card__title h6">Expertise</div>
                  <div className="chooseUS-card__description">
                    <p>
                      I think every project is unique and interesting. Therefore, I will work on
                      creating a customized solution that meets specific needs and goals.
                    </p>
                  </div>
                </div>
              </li>
              <li className="chooseUS-item">
                <div className="chooseUS-card">
                  <RiTeamFill className="chooseUS-card__icon" />
                  <div className="chooseUS-card__title h6">Team</div>
                  <div className="chooseUS-card__description">
                    <p>My goal is to become a good employee in the team.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
