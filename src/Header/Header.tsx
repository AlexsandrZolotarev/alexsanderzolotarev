import React, { useState } from "react";
import { SiBilibili } from "react-icons/si";


const Header: React.FC= () => {

  let [isActive, setIsActive] = useState<"" | " is-active">("");
  let onBurgerButtonClick = () => {
    document.documentElement.classList.toggle("is-lock");
  };
  let isActiveOnChange = () => {
    isActive ? setIsActive("") : setIsActive(" is-active");
    onBurgerButtonClick();
  };
  return (
    <header className="header">
      <div className="header__body" >
        <div className="header__body-inner container">
          <a href="/" className="header__logo" title="Home" aria-label="Home">
            <SiBilibili className="logo__image" width="179" height="50" />
            Zolotarev
          </a>
          <div className={"header__overlay" + isActive}>
            <nav className="header__menu" aria-label="Меню">
              <ul className="header__menu-list">
                <li className="header__menu-item">
                  <a
                    href="#About"
                    className="header__menu-link"
                    onClick={() => {
                      !isActive || isActiveOnChange();
                    }}
                  >
                    About
                  </a>
                </li>
                <li className="header__menu-item">
                  <a
                    href="#Skills"
                    className="header__menu-link"
                    onClick={() => {
                      !isActive || isActiveOnChange();
                    }}
                  >
                    Skills
                  </a>
                </li>
                <li className="header__menu-item">
                  <a
                    href="#Portfolio"
                    className="header__menu-link"
                    onClick={() => {
                      !isActive || isActiveOnChange();
                    }}
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </nav>
            <a href="#Contacts" className="header__contact-us-link link">
              Contacts
            </a>
          </div>
          <button
            className={
              "header__burger-button burger-button visible-tablet" + isActive
            }
            aria-label="Open menu"
            title="Open menu"
            type="button"
            onClick={isActiveOnChange}
          >
            <span className="burger-button__line"></span>
            <span className="burger-button__line"></span>
            <span className="burger-button__line"></span>
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
