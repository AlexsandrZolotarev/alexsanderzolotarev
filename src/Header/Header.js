import React, { useState } from "react";
import { SiBilibili } from "react-icons/si";

let onBurgerButtonClick = () => {
  document.documentElement.classList.toggle("is-lock");
}

const Header = () => {
  let stateClasses = {
    isActive: " is-active",
  };
  let [isActive, setIsActive] = useState('');
 
  return (
    <header className="header">
      <div className="header__body">
        <div className="header__body-inner container">
          <a href="/" className="header__logo logo" title="Home" aria-label="Home">
          <SiBilibili alt=""
              className="logo__image"
              width="179"
              height="50"/>
              Zolotarev
          </a>
          <div className={"header__overlay" + isActive}>
            <nav className="header__menu" aria-label="Меню">
              <ul className="header__menu-list">
              <li className="header__menu-item">
                  <a href="/" className="header__menu-link">About</a>
                </li>
                <li className="header__menu-item">
                  <a href="/" className="header__menu-link">Skills</a>
                </li>
                <li className="header__menu-item">
                  <a href="/" className="header__menu-link">Portfolio</a>
                </li>
                <li className="header__menu-item">
                  <a href="/" className="header__menu-link">Work Experience</a>
                </li>
              </ul>
            </nav>
            <a href="/" className="header__contact-us-link link">Contacts</a>
          </div>
          <button
            className={"header__burger-button burger-button visible-tablet" + isActive}
            aria-label="Open menu"
            title="Open menu"
            type="button"
            onClick={() => {
              (isActive) ? setIsActive("") : setIsActive(stateClasses.isActive);
              onBurgerButtonClick(); 
            }}
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
