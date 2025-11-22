import { useState } from 'react';
import Logo from '../../images/logo.svg?react';
import Sun from '../../images/Header/Sun.svg?react';
import Moon from '../../images/Header/Moon.svg?react';
import { useTheme } from '../../hooks/useTheme';
import { useLang } from '../../hooks/useLang';
import { useAppReady } from '../../hooks/useAppReady';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { toggleVisible } from '../../Redux/visibilitySlice';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const isTextVisible = useAppSelector((state) => state.visibilitySlice.isTextVisible);
  const dispatch = useAppDispatch();
  const { appReady } = useAppReady();

  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, translate } = useLang();
  const [isActive, setIsActive] = useState<'' | ' is-active'>('');
  const onBurgerButtonClick = () => {
    document.documentElement.classList.toggle('is-lock');
  };
  const isActiveOnChange = () => {
    dispatch(toggleVisible());
    if (isActive) setIsActive('');
    else setIsActive(' is-active');
    onBurgerButtonClick();
  };
  return (
    <header className="header">
      <div className="header__body">
        <div className="header__body-inner container">
          <NavLink
            to="/"
            className={`header__logo ${appReady ? ' is-animate' : ''}`}
            title={translate('header.logo.title')}
          >
            <span className="visually-hidden">{translate('header.logo.title')}</span>
            <Logo aria-hidden="true" focusable="false" />
          </NavLink>
          <div className={`header__controls ${appReady ? ' is-animate' : ''}`}>
            <nav className="header__menu" aria-label={translate('header.menu.navigation')}>
              <ul className="header__menu-list">
                <li className="header__menu-item">
                  <button
                    onClick={toggleLang}
                    type="button"
                    className="header__menu-lang"
                    aria-label={translate('header.menu.changeLanguage')}
                  >
                    {lang.toUpperCase()}
                  </button>
                </li>
                <li className="header__menu-item">
                  <button
                    onClick={toggleTheme}
                    type="button"
                    className="header__menu-theme"
                    aria-label={translate('header.menu.toggleTheme')}
                    aria-pressed={theme === 'dark'}
                  >
                    <span key={theme} className="header__menu-icon" aria-hidden="true">
                      {theme === 'dark' ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
                    </span>
                  </button>
                </li>
              </ul>
            </nav>

            <button
              className={'header__burger-button burger-button' + isActive}
              aria-label={
                isActive ? translate('header.burger.close') : translate('header.burger.open')
              }
              title={isActive ? translate('header.burger.close') : translate('header.burger.open')}
              type="button"
              aria-expanded={isTextVisible}
              onClick={isActiveOnChange}
              aria-controls="main-nav"
            >
              <span className="burger-button__line"></span>
              <span className="burger-button__line"></span>
              <span className="burger-button__line"></span>
            </button>
          </div>
        </div>
        {isTextVisible && (
          <nav
            className={'header__overlay' + isActive}
            aria-label={translate('header.main.navigation')}
            id="main-nav"
          >
            <ul
              className="header__overlay-list"
              onClick={(event) => {
                const link = (event.target as HTMLElement).closest('a');
                if (link && isActive) {
                  isActiveOnChange();
                }
              }}
            >
              <li className={`header__overlay-item ${isTextVisible ? 'is-active' : 'is-lock'}`}>
                <h2>
                  <NavLink to="/" className="header__overlay-link">
                    {translate('header.burger.home')}
                  </NavLink>
                </h2>
              </li>
              <li className={`header__overlay-item ${isTextVisible ? 'is-active' : 'is-lock'}`}>
                <h2>
                  <NavLink to="/Projects" className="header__overlay-link">
                    {translate('header.burger.projects')}
                  </NavLink>
                </h2>
              </li>

              <li className={`header__overlay-item ${isTextVisible ? 'is-active' : 'is-lock'}`}>
                <h2>
                  <NavLink to="/about" className="header__overlay-link">
                    {translate('header.burger.about')}
                  </NavLink>
                </h2>
              </li>
              <li className={`header__overlay-item ${isTextVisible ? 'is-active' : 'is-lock'}`}>
                <h2>
                  <NavLink to="/contact" className="header__overlay-link">
                    {translate('header.burger.contacts')}
                  </NavLink>
                </h2>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
export default Header;
