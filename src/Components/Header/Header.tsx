import { useState } from 'react';
import Logo from '../../images/logo.svg?react';

import Sun from '../../images/Header/Sun.svg?react';
import Moon from '../../images/Header/Moon.svg?react';
import { useTheme } from '../../hooks/useTheme';

const TRANSLATE = {
  RU: 'RU',
  EN: 'EN',
};
const Header = () => {
  const { theme, toggleTheme } = useTheme();
  let [isActive, setIsActive] = useState<'' | ' is-active'>('');
  let onBurgerButtonClick = () => {
    document.documentElement.classList.toggle('is-lock');
  };
  let isActiveOnChange = () => {
    isActive ? setIsActive('') : setIsActive(' is-active');
    onBurgerButtonClick();
  };
  return (
    <header className="header">
      <div className="header__body">
        <div className="header__body-inner container">
          <a href="/" className="header__logo" title="Home" aria-label="Home">
            <Logo aria-hidden="true" />
          </a>
          <div className="header__controls">
            <nav className="header__menu">
              <ul className="header__menu-list">
                <li className="header__menu-item">
                  <button
                    onClick={() => {}}
                    type="button"
                    className="header__menu-lang"
                    aria-label="Change language"
                  >
                    {theme ? `${TRANSLATE.EN}` : `${TRANSLATE.RU}`}
                  </button>
                </li>
                <li className="header__menu-item">
                  <button
                    onClick={() => toggleTheme()}
                    type="button"
                    className="header__menu-theme"
                    aria-label="Toggle theme"
                  >
                    {theme === 'dark' ? <Moon /> : <Sun />}
                  </button>
                </li>
              </ul>
            </nav>
            <div className={'header__overlay' + isActive}>
              <a
                href="#Contacts"
                className="header__contact-us-link link"
                onClick={() => {
                  !isActive || isActiveOnChange();
                }}
              >
                Contacts
              </a>
            </div>
            <button
              className={'header__burger-button burger-button visible-tablet' + isActive}
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
      </div>
    </header>
  );
};
export default Header;
