import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

function Navigation({ place }) {
  return (
    <nav className="navigation">
      <Link>
        <Logo />
      </Link>

      <ul className={`navigation__films ${place === 'landing' ? 'navigation__films_hidden' : ''}`}>
        <li className="navigation__films-element">
          <Link className="app__text navigation__link app__link">Фильмы</Link>
        </li>
        <li className="navigation__films-element">
          <Link className="app__text navigation__link app__link">Сохранённые фильмы</Link>
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
        className={`navigation__account-edit app__link ${
          place === 'landing' ? 'navigation__account-edit_hidden' : ''
        }`}
      >
        <span className="app__text">Аккаунт</span>
        <div className="navigation__account-icon" />
      </Link>
    </nav>
  );
}

export default Navigation;
