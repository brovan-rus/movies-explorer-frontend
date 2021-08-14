import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import MobileMenu from '../MobileMenu/MobileMenu';

function Navigation({ place }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(true);
  };
  const onMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <Link>
        <Logo />
      </Link>

      <ul className={`navigation__films ${place === 'landing' ? 'navigation__films_hidden' : ''}`}>
        <li className="navigation__films-element">
          <Link to="/movies" className="app__text navigation__link app__link">
            Фильмы
          </Link>
        </li>
        <li className="navigation__films-element">
          <Link to="/saved-movies" className="app__text navigation__link app__link">
            Сохранённые фильмы
          </Link>
        </li>
      </ul>

      <div className={`navigation__login ${place !== 'landing' ? 'navigation__login_hidden' : ''}`}>
        <Link className="app__text navigation__login-element navigation__link app__link">
          Регистрация
        </Link>
        <Link>
          <button className="navigation__button navigation__login-element app__link">Войти</button>
        </Link>
      </div>

      <Link
        className={`navigation__account-edit navigation__account-edit_place_header app__link ${
          place === 'landing' ? 'navigation__account-edit_hidden' : ''
        }`}
      >
        <span className="app__text">Аккаунт</span>
        <div className="navigation__account-icon" />
      </Link>

      <button
        className={`navigation__burger-button ${
          isMobileMenuOpen || place === 'landing' ? 'navigation__burger-button_hidden' : ''
        } app__link`}
        onClick={handleMobileMenuOpen}
      >
        <span className="navigation__burger-button-line" />
        <span className="navigation__burger-button-line" />
        <span className="navigation__burger-button-line" />
      </button>

      <MobileMenu isOpened={isMobileMenuOpen} onMobileMenuClose={onMobileMenuClose} place={place} />
    </nav>
  );
}

export default Navigation;
