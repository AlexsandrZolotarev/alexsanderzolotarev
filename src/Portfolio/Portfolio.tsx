import React from "react";
import kuznec_small from "../images/Portfolio/Kuznec12.webp";
import RivoAgency_small from "../images/Portfolio/RivoAgancy.webp";
import futuretech_small from "../images/Portfolio/futuretech.webp";
import Html_icon from "../icons/stack/html.svg";
import Js_icon from "../icons/stack/javascript.svg";
import Php_icon from "../icons/stack/php.svg";
import Css_icon from "../icons/stack/css.svg";
import Scss_icon from "../icons/stack/scss.svg";
import React_icon from "../icons/stack/react.svg";
import Redux_icon from "../icons/stack/redux.svg";
import Redux_toolkit_icon from "../icons/stack/redux-toolkit.svg";
import Formik_icon from "../icons/stack/formik.svg";
import Figma_icon from "../icons/stack/figma.svg";
import FancyBox from "./FancyBox";

const Portfolio: React.FC = () => {
  let expandPicture = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const parent = target.parentNode?.parentNode as HTMLElement | null;
    const content =
      parent?.lastElementChild?.firstElementChild?.nextElementSibling
        ?.firstElementChild?.nextSibling?.textContent;
    FancyBox(content as string | null | undefined);  
  };
  return (
    <section
      className="portfolio section"
      aria-labelledby="portfolio-title"
      id="Portfolio"
    >
      <header className="title">
        <div className="title-inner container">
          <div className="title-body">
            <h2 className="title-title" id="Portfolio-title">
              My Portfolio
              <svg
                width="669"
                height="367"
                viewBox="0 0 669 367"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="title-lights"
                aria-hidden="true"
              >
                <g filter="url(#filter0_f_30401_1502)">
                  <path
                    d="M367.984 125.931C478.418 125.931 559 85.6672 559 133.161C559 180.655 269.516 257 159.082 257C48.6476 257 159.082 180.655 159.082 133.161C159.082 85.6672 257.549 125.931 367.984 125.931Z"
                    fill="url(#paint0_linear_30401_1502)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_30401_1502"
                    x="0"
                    y="0"
                    width="669"
                    height="367"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="55"
                      result="effect1_foregroundBlur_30401_1502"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_30401_1502"
                    x1="134.662"
                    y1="257"
                    x2="142.122"
                    y2="105.241"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1CC4F9" />
                    <stop offset="1" stopColor="#FE69FE" />
                  </linearGradient>
                </defs>
              </svg>
            </h2>
          </div>
        </div>
      </header>
      <div className="portfolio__body container">
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <article className="portfolio__item-card card baseline">
            <button
                className="card__image-wrapper"
                type="button"
                title="Open the image in full size"
                onClick={expandPicture}
              >
                <img
                  className="card__image"
                  alt=""
                  src={kuznec_small}
                  width={400}
                  height={320}
                  loading="lazy"
                ></img>
              </button>
              <div className="card__body">
                <time className="card__date" dateTime="2022-08">
                  August 2022
                </time>
                <h3 className="card__title">
                  <a
                    className="card__link"
                    href="https://alexsandrzolotarev.github.io/Kuznec12/"
                    target="_blank"
                    title="Open the website in a new tab"
                      rel="noreferrer"
                  >
                    Master Blacksmith
                  </a>
                </h3>
                <div className="card__description">
                  The first website for the sale of forged products
                </div>
                <div className="card__stack stack">
                  <ul className="stack__list">
                    <li className="stack__item">
                      <img
                        className="stack__image"
                        src={Html_icon}
                        alt="Html"
                        title="Html"
                        width={36}
                        height={36}
                        loading="lazy"
                      ></img>
                    </li>
                    <li className="stack__item">
                      <img
                        className="stack__image"
                        src={Css_icon}
                        alt="Css"
                        title="Css"
                        width={36}
                        height={36}
                        loading="lazy"
                      ></img>
                    </li>
                    <li className="stack__item">
                      <img
                        className="stack__image"
                        src={Php_icon}
                        alt="Php"
                        title="Php"
                        width={36}
                        height={36}
                        loading="lazy"
                      ></img>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </li>
          <li className="portfolio__item">
            <article className="portfolio__item-card card baseline">
              <button
                className="card__image-wrapper"
                type="button"
                title="Open the image in full size"
                onClick={expandPicture}
              >
                <img
                  className="card__image"
                  alt=""
                  src={RivoAgency_small}
                  width={400}
                  height={320}
                  loading="lazy"
                ></img>
              </button>
              <div className="card__body">
                <time className="card__date" dateTime="2024-10">
                  October 2024
                </time>
                <h3 className="card__title">
                  <a
                    className="card__link"
                    href="https://alexsandrzolotarev.github.io/RivoAgency"
                    target="_blank"
                    title="Open the website in a new tab"
                      rel="noreferrer"
                  >
                    Rivo Agency
                  </a>
                </h3>
                <div className="card__description">
                  Development of a multi-page website. Getting started with the
                  React library. Creating functional and class components.
                  Router, browser router, routing. Development in the OOP style.
                </div>
                <div className="card__stack stack">
                  <ul className="stack__list">
                    <li className="stack__item">
                      <img
                        className="stack__image"
                        src={React_icon}
                        alt="React"
                        title="React"
                        width={36}
                        height={36}
                        loading="lazy"
                      ></img>
                    </li>
                    <li className="stack__item">
                      <img
                        className="stack__image"
                        src={Redux_icon}
                        alt="Redux"
                        title="Redux"
                        width={36}
                        height={36}
                        loading="lazy"
                      ></img>
                    </li>
                    <li className="stack__item">
                      <img
                        className="stack__image"
                        src={Redux_toolkit_icon}
                        alt="Redux Toolkit"
                        title="Redux Toolkit"
                        width={36}
                        height={36}
                        loading="lazy"
                      ></img>
                    </li>
                    <li className="stack__item">
                      <img
                        className="stack__image"
                        src={Formik_icon}
                        alt="Formik"
                        title="Formik"
                        width={36}
                        height={36}
                        loading="lazy"
                      ></img>
                    </li>
                    <li className="stack__item">
                      <img
                        className="stack__image"
                        src={Figma_icon}
                        alt="Figma"
                        title="Figma"
                        width={36}
                        height={36}
                        loading="lazy"
                      ></img>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </li>
          <li className="portfolio__item">
            <article className="portfolio__item-card card baseline">
              <button
                className="card__image-wrapper"
                type="button"
                title="Open the image in full size"
                onClick={expandPicture}
              >
                <img
                  className="card__image"
                  alt=""
                  src={futuretech_small}
                  width={400}
                  height={320}
                  loading="lazy"
                ></img>
              </button>
              <div className="card__body">
                <time className="card__date" dateTime="2025-01">
                  January 2025
                </time>
                <h3 className="card__title">
                  <a
                    className="card__link"
                    href="https://alexsandrzolotarev.github.io/futuretech"
                    target="_blank"
                    title="Open the website in a new tab"
                    rel="noreferrer"
                  >
                    Future Tech
                  </a>
                </h3>
                <div className="card__description">
                  A multi-page website based on the Figma layout. Markup
                  according to the BEM methodology. In development, I use the
                  Sass style preprocessor (SCSS) and actively use adaptive rem
                  units of measurement. Lots of JavaScript
                </div>
                <div className="card__stack stack">
                  <ul className="stack__list">
                    <li className="stack__item">
                      <img
                        className="stack__image"
                        src={Js_icon}
                        alt="JS"
                        title="JS"
                        width={36}
                        height={36}
                        loading="lazy"
                      ></img>
                    </li>
                    <li className="stack__item">
                      <img
                        className="stack__image"
                        src={Scss_icon}
                        alt="Redux"
                        title="Redux"
                        width={36}
                        height={36}
                        loading="lazy"
                      ></img>
                    </li>
                    <li className="stack__item">
                      <img
                        className="stack__image"
                        src={Figma_icon}
                        alt="Figma"
                        title="Figma"
                        width={36}
                        height={36}
                        loading="lazy"
                      ></img>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Portfolio;
