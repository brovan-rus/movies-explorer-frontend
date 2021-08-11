function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="landing__section-title landing__section-title_place_portfolio app__text">
        Портфолио
      </h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-element app__text">
          <span>Статичный сайт</span>
          <a href="" className="portfolio__link app__link">
            ↗
          </a>
        </li>
        <li className="portfolio__list-element app__text">
          <span>Адаптивный сайт</span>
          <a href="" className="portfolio__link app__link">
            ↗
          </a>
        </li>
        <li className="portfolio__list-element app__text">
          <span>Одностраничное приложение</span>
          <a href="" className="portfolio__link app__link">
            ↗
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
