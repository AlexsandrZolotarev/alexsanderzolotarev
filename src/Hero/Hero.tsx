import React, { useEffect, useRef } from "react";
import avatar from "../images/Hero/Avatar.webp";
import { IoBody } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { MdRateReview } from "react-icons/md";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import checkLoaderComplete from "../Loader/checkLoaderComplete";
import CheckMoveTrain from "./CheckMoveTrain";


function delay(fn: (part: HTMLElement | null) => void, part: HTMLElement | null, delay = 0):void {
  setTimeout(() => {
    fn(part);
  }, delay);
}
function addVisibleClass(part: HTMLElement | null) {
  const delay = 130;
  if(!part) return;
  for (let i = 0; i < part.children.length; i++) {
    setTimeout(() => {
      if (part.children[i].classList.contains("accent-color")) {
        for (let j = 0; j < part.children[i].children.length; j++) {
          setTimeout(() => {
            part.children[i].children[j].classList.add("is-visible");
          }, delay * j);
        }
      }
      part.children[i].classList.add("is-visible");
    }, delay * i);
  }
}
const Hero:React.FC = () => {
  const liveTypingFirstPart = useRef<HTMLDivElement  | null>(null);
  const liveTypingSecondPart = useRef<HTMLDivElement  | null>(null);
  useEffect(() => {
    CheckMoveTrain();
    if (checkLoaderComplete()) {
      if(liveTypingFirstPart.current)
      {
        delay(addVisibleClass, liveTypingFirstPart.current, 2500);
      }
      if(liveTypingSecondPart.current)
        {
          delay(addVisibleClass, liveTypingSecondPart.current, 9000);
        }
    
    }
  }, []);
  return (
    <section className="hero section" aria-labelledby="hero-title" id="About">
      <div className="hero__inner container">
        <div
          className="hero__clipPathGroup clipPathGroup"
          aria-hidden="true"
        ></div>
        <div className="hero__body">
          <div className="hero__title">
            <h1 id="hero-title" className="live-typing">
              <div className="visually-hidden">
                <div>Hello! My name is Aleksander Zolotarev.</div>
                <div>I am a frontend developer</div>
              </div>
              <div
                ref={liveTypingFirstPart}
                className="live-typing__stage"
                aria-hidden="true"
              >
                <span className="live-typing__char">H</span>
                <span className="live-typing__char">e</span>
                <span className="live-typing__char">l</span>
                <span className="live-typing__char">l</span>
                <span className="live-typing__char">o</span>
                <span className="live-typing__char">!</span>
                <span className="live-typing__char"> </span>
                <span className="live-typing__char">M</span>
                <span className="live-typing__char">y</span>
                <span className="live-typing__char"> </span>
                <span className="live-typing__char">n</span>
                <span className="live-typing__char">a</span>
                <span className="live-typing__char">m</span>
                <span className="live-typing__char">e</span>
                <span className="live-typing__char"> </span>
                <span className="live-typing__char">i</span>
                <span className="live-typing__char">s</span>
                <span className="live-typing__char"> </span>
                <span className="live-typing__char">A</span>
                <span className="live-typing__char">l</span>
                <span className="live-typing__char">e</span>
                <span className="live-typing__char">k</span>
                <span className="live-typing__char">s</span>
                <span className="live-typing__char">a</span>
                <span className="live-typing__char">n</span>
                <span className="live-typing__char">d</span>
                <span className="live-typing__char">e</span>
                <span className="live-typing__char">r</span>
                <span className="live-typing__char"> </span>
                <span className="accent-color">
                  <span className="live-typing__char">Z</span>
                  <span className="live-typing__char">o</span>
                  <span className="live-typing__char">l</span>
                  <span className="live-typing__char">o</span>
                  <span className="live-typing__char">t</span>
                  <span className="live-typing__char">a</span>
                  <span className="live-typing__char">r</span>
                  <span className="live-typing__char">e</span>
                  <span className="live-typing__char">v</span>
                </span>
                <span className="live-typing__char">.</span>
              </div>
              <div
                ref={liveTypingSecondPart}
                className="live-typing__stage"
                aria-hidden="true"
              >
                <span className="live-typing__char">I</span>
                <span className="live-typing__char"> </span>
                <span className="live-typing__char">a</span>
                <span className="live-typing__char">m</span>
                <span className="live-typing__char"> </span>
                <span className="live-typing__char">a</span>
                <span className="live-typing__char"> </span>
                <span className="live-typing__char">f</span>
                <span className="live-typing__char">r</span>
                <span className="live-typing__char">o</span>
                <span className="live-typing__char">n</span>
                <span className="live-typing__char">t</span>
                <span className="live-typing__char">e</span>
                <span className="live-typing__char">n</span>
                <span className="live-typing__char">d</span>
                <span className="live-typing__char"> </span>
                <span className="live-typing__char">d</span>
                <span className="live-typing__char">e</span>
                <span className="live-typing__char">v</span>
                <span className="live-typing__char">e</span>
                <span className="live-typing__char">l</span>
                <span className="live-typing__char">o</span>
                <span className="live-typing__char">p</span>
                <span className="live-typing__char">e</span>
                <span className="live-typing__char">r</span>
                <span className="live-typing__char">.</span>
              </div>
            </h1>
          </div>

          <div className="hero__train train" aria-hidden="true">
            <div className="train-wrapper">
              <div className="train__engine-body">
                <div className="train__engine-logo">Zolotarev</div>
              </div>
              <div className="train__compartment">
                <div className="train__compartment-windows">
                  <div className="window">
                    <AiOutlineHtml5 />
                  </div>
                  <div className="window">
                    <DiCss3 />
                  </div>
                  <div className="window">
                    <FaNodeJs />
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
        </div>
      </div>
    </section>
  );
};
export default Hero;
