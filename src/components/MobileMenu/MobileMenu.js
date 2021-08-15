import { Link } from 'react-router-dom';

function MobileMenu({ isOpened, onMobileMenuClose, place }) {
  const handleMobileMenuClose = () => {
    onMobileMenuClose();
  };
  return (
    <div className={`mobile-menu__container ${isOpened ? 'mobile-menu__container_opened' : ''}`}>
      <div className={`mobile-menu ${isOpened ? 'mobile-menu_opened' : ''}`}>
        <button className="mobile-menu__close-button" onClick={handleMobileMenuClose} />
        <nav className="mobile-menu__navigation">
          <ul className="mobile-menu__list">
            <li className="mobile-menu__list-element">
              <Link
                onClick={handleMobileMenuClose}
                to="/"
                className="mobile-menu__link app__text app__link"
              >
                Главная
              </Link>
            </li>
            <li className="mobile-menu__list-element">
              <Link
                onClick={handleMobileMenuClose}
                to="/movies"
                href=""
                className={`mobile-menu__link ${
                  place === 'movies' ? 'mobile-menu__link_active' : ''
                } app__text app__link`}
              >
                Фильмы
              </Link>
            </li>
            <li className="mobile-menu__list-element">
              <Link
                onClick={handleMobileMenuClose}
                to="/saved-movies"
                href=""
                className={`mobile-menu__link ${
                  place === 'saved-movies' ? 'mobile-menu__link_active' : ''
                } app__text app__link`}
              >
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
          <Link
            onClick={handleMobileMenuClose}
            to="/profile"
            className="navigation__profile-edit navigation__profile-edit_place_mobile-menu app__link"
          >
            <p className="app__text ">Аккаунт</p>
            <div className="navigation__profile-icon" />
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
