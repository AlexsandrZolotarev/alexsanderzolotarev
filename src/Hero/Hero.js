import React from "react";
import avatar from "../images/Hero/Avatar.png";
import { IoBody } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { MdRateReview } from "react-icons/md";
import FadeInAnimation from "../GSAP-animation/FadeInAnimation";
import lights from "../images/LightBackground.svg";
// let CreateDiv = (...props) => {
//   let width = props[0].width ? props[0].width : "80rem";
//   return (
//     <div
//       className="grid-label"
//       style={{ left: `${-props[0].procent}%`, width: `${width}` }}
//     ></div>
//   );
// };
const Hero = () => {
  let procentesMain = [];
  for(let i = 6; i <= 76; i += 14 )
  {
    procentesMain.push(i)
  }
  // let procentesOther = [];
  return (
    <section className="hero section" aria-labelledby="hero-title" id="About">
      <div className="hero__inner container">
        <div
          className="hero__clipPathGroup clipPathGroup"
          aria-hidden="true"
        ></div>
        <div className="hero__body">
          <FadeInAnimation className="hero__title" direction="down">
            <h1 id="hero-title">Hello! My name is Aleksander Zolotarev.</h1>
          </FadeInAnimation>
          <FadeInAnimation direction="left" className="hero__avatar">
            <img
              alt="Красивый молодой парень"
              className="hero__avatar-image"
              src={avatar}
            ></img>
            <div className="hero__avatar-background lights" aria-hidden="true">
              <svg src={lights}></svg>
            </div>
          </FadeInAnimation>
          <FadeInAnimation direction="up" className="hero__chooseUS chooseUS">
            <ul className="chooseUS-list">
              <li className="chooseUS-item">
                <div className="chooseUS-card">
                  <IoBody className="chooseUS-card__icon"/>
                  <div className="chooseUS-card__title h6">Expertise</div>
                  <div className="chooseUS-card__description">
                    <p>
                      I passion <span>Front-end</span> development and a
                      commitment to delivering quality work and give the best
                      service.
                    </p>
                  </div>
                </div>
              </li>
              <li className="chooseUS-item">
                <div className="chooseUS-card">
                  <MdRateReview className="chooseUS-card__icon"/>
                  <div className="chooseUS-card__title h6">Expertise</div>
                  <div className="chooseUS-card__description">
                    <p>
                      I think every project is unique and interesting.
                      Therefore, I will work on creating a customized solution
                      that meets specific needs and goals.
                    </p>
                  </div>
                </div>
              </li>
              <li className="chooseUS-item">
                <div className="chooseUS-card">
                  <RiTeamFill className="chooseUS-card__icon"/>
                  <div className="chooseUS-card__title h6">Team</div>
                  <div className="chooseUS-card__description">
                    <p>My goal is to become a good employee in the team.</p>
                  </div>
                </div>
              </li>
            </ul>
          </FadeInAnimation>
        </div>

        <div className="hero__grid grid" aria-hidden="true">
          <ul className="grid-list">
            {/* <li className="grid-item--main">
              {gridLabel.map((item, index) => (
                <CreateDiv key={index} procent={procentesMain[index]} />
              ))}
            </li>
            <li className="grid-item--other">
            {gridLabel.map((item, index) => (
                <CreateDiv key={index} procent={procentesMain[index]} />
              ))}
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Hero;
