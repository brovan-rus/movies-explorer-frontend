import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import MobileMenu from '../MobileMenu/MobileMenu';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Navigation({ place }) {
  const { isLogged } = React.useContext(CurrentUserContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(true);
  };
  const onMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <Logo />
      </div>
      <ul
        className={`navigation__films ${
          place === 'landing' && !isLogged && 'navigation__films_hidden'
        }`}
      >
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

      <div
        className={`navigation__login ${
          (place !== 'landing' || isLogged) && 'navigation__login_hidden'
        }`}
      >
        <Link
          to="/signup"
          className="app__text navigation__login-element navigation__link app__link"
        >
          Регистрация
        </Link>
        <Link to="/signin">
          <button className="navigation__button navigation__login-element app__link">Войти</button>
        </Link>
      </div>

      <Link
        to="/profile"
        className={`navigation__profile-edit navigation__profile-edit_place_header app__link ${
          !isLogged && 'navigation__profile-edit_hidden'
        } navigation__profile_edit_place_header`}
      >
        <span className="app__text">Аккаунт</span>
        <div
          className={`${
            place === 'landing' && 'navigation__profile-icon_place_landing'
          } navigation__profile-icon`}
        />
      </Link>

      <button
        className={`navigation__burger-button ${
          isMobileMenuOpen || (place === 'landing' && !isLogged)
            ? 'navigation__burger-button_hidden'
            : ''
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
