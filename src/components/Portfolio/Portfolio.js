function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="landing__section-title landing__section-title_place_portfolio">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-element">
          <span className="porfolio__project-name app__text">Статичный сайт</span>
          <a href="" className="portfolio__link app__link"></a>
        </li>
        <li className="portfolio__list-element">
          <span className="porfolio__project-name app__text">Адаптивный сайт</span>
          <a href="" className="portfolio link app__link"></a>
        </li>
        <li className="portfolio__list-element">
          <span className="porfolio__project-name app__text">Одностраничное приложение</span>
          <a href="" className="portfolio__link app__link"></a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
