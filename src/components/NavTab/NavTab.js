function NavTab() {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__list">
        <li className="nav-tab__list-element">
          <a href="#" target="_self" className="nav-tab__link app__text app__link">
            О проекте
          </a>
        </li>
        <li className="nav-tab__list-element">
          <a href="#" target="_self" className="nav-tab__link app__text app__link">
            Технологии
          </a>
        </li>
        <li className="nav-tab__list-element">
          <a href="#" target="_self" className="nav-tab__link app__text app__link">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
