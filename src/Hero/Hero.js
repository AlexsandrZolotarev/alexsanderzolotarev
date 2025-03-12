import React from "react";
import avatar from "../images/Hero/Avatar.webp";
import { IoBody } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { MdRateReview } from "react-icons/md";
import FadeInAnimation from "../GSAP-animation/FadeInAnimation";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiBilibili, SiRedux } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { FaNode, FaNodeJs, FaReact } from "react-icons/fa";
import { addTrain } from "./train";
addTrain();
const Hero = () => {
  const laptopKeyboardButtons = new Array(42);
  laptopKeyboardButtons.fill(0);
  return (
    <section className="hero section" aria-labelledby="hero-title" id="About">
      <div className="hero__inner container">
        <div
          className="hero__clipPathGroup clipPathGroup"
          aria-hidden="true"
        ></div>
        <div className="hero__body">
          <div className="hero__title">
            <h1 id="hero-title">Hello! My name is Aleksander Zolotarev.</h1>
          </div>
          {/* <FadeInAnimation className="hero__title" direction="down">
            <h1 id="hero-title">Hello! My name is Aleksander Zolotarev.</h1>
          </FadeInAnimation> */}

          {/* <FadeInAnimation direction="right" className="hero__laptop laptop">
            <div className="laptop__container">
              <div className="laptop__body">
                <div className="laptop__touchpad"></div>
                <div className="laptop__keyboard"></div>
                <div className="laptop__screen">
                  <div className="laptop__screen-code"></div>
                </div>
              </div>
            </div>
          </FadeInAnimation> */}
          <div className="hero__train train" aria-hidden="true">
            <div className="train-wrapper">
              <div className="train__engine-front">

              </div>
              <div className="train__engine-body">
                <div className="train__engine-logo">Zolotarev</div>
              </div>

              <div className="train__compartment">
                <div className="train__compartment-windows">
                  <div className="window">
                  <AiOutlineHtml5/>
                  </div>
                  <div className="window">
                  <DiCss3 />
                  </div>
                  <div className="window">
                  <FaNodeJs />
                  </div>
                </div>
              </div>

              <div className="train__compartment train__compartment-two">
                <div className="train__compartment-windows">
                  <div className="window">
                  <FaReact />
                  </div>
                  <div className="window">
                  <SiRedux />
                  </div>
                  <div className="window">
                  <FaNode />
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="hero__avatar">
            <img
              alt="Красивый молодой парень"
              className="hero__avatar-image"
              src={avatar}
              width={525}
              height={626}
            ></img>
            <div
              className="hero__avatar-background lights"
              aria-hidden="true"
            ></div>
          </div>
          {/* <FadeInAnimation direction="left" className="hero__avatar">
            <img
              alt="Красивый молодой парень"
              className="hero__avatar-image"
              src={avatar}
              width={525}
              height={626}
            ></img>
            <div
              className="hero__avatar-background lights"
              aria-hidden="true"
            ></div>
          </FadeInAnimation> */}
          <div className="hero__chooseUS chooseUS">
            <ul className="chooseUS-list baseline">
              <li className="chooseUS-item">
                <div className="chooseUS-card">
                  <IoBody className="chooseUS-card__icon" />
                  <div className="chooseUS-card__title h6">About</div>
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
                  <MdRateReview className="chooseUS-card__icon" />
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
                  <RiTeamFill className="chooseUS-card__icon" />
                  <div className="chooseUS-card__title h6">Team</div>
                  <div className="chooseUS-card__description">
                    <p>My goal is to become a good employee in the team.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* <FadeInAnimation direction="up" className="hero__chooseUS chooseUS">
            <ul className="chooseUS-list baseline">
              <li className="chooseUS-item">
                <div className="chooseUS-card">
                  <IoBody className="chooseUS-card__icon" />
                  <div className="chooseUS-card__title h6">About</div>
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
                  <MdRateReview className="chooseUS-card__icon" />
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
                  <RiTeamFill className="chooseUS-card__icon" />
                  <div className="chooseUS-card__title h6">Team</div>
                  <div className="chooseUS-card__description">
                    <p>My goal is to become a good employee in the team.</p>
                  </div>
                </div>
              </li>
            </ul>
          </FadeInAnimation> */}
        </div>
      </div>
    </section>
  );
};
export default Hero;
