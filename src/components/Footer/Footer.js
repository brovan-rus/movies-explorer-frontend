import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title app__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__content">
        <p className="footer__copyright app__text">©2020</p>
        <nav>
          <ul className="footer__list app__text">
            <li className="footer__list-element">
              <a href="https://practicum.yandex.ru/" className="footer__link app__link">
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__list-element">
              <a href="https://github.com/brovan-rus/" className="footer__link app__link">
                Github
              </a>
            </li>
            <li className="footer__list-element">
              <a
                href="https://www.facebook.com/profile.php?id=100005340542138"
                className="footer__link app__link"
              >
                Facebook
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
