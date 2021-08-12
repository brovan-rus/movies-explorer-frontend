function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="landing__section-title app__text">О проекте</h2>
      <div className="about-project__two-columns">
        <div>
          <h3 className="about-project__two-columns-title app__text">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__two-columns-text app__text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </p>
        </div>
        <div>
          <h3 className="about-project__two-columns-title app__text">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__two-columns-text app__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </p>
        </div>
      </div>

      <progresss className="progress-bar">
        <div className="progress-bar__element">
          <p className="progress-bar__caption progress-bar__caption_active app__text">1 неделя</p>
          <p className="progress-bar__text app__text">Back-end</p>
        </div>
        <div className="progress-bar__element">
          <p className="progress-bar__caption app__text">4 недели</p>
          <p className="progress-bar__text progress-bar__text_active app__text">Front-end</p>
        </div>
      </progresss>
    </section>
  );
}

export default AboutProject;
