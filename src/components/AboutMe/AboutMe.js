import student from '../../images/student.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="landing__section-title app__text">Студент</h2>
      <article className="about-me__two-columns">
        <div>
          <h3 className="about-me__title app__text">Константин</h3>
          <p className="about-me__subtitle app__text">Фронтенд-разработчик, 37 лет</p>
          <p className="about-me__text app__text">
            Я родился и живу в Санкт-Петербурге, закончил философский факультет СПБГУ. У меня есть
            любимая жена. Я люблю английские сериалы, а ещё увлекаюсь настольными играми. Недавно
            начал кодить. С 2015 года работал в компании «Биодан». Во время курса по веб-разработке,
            начал брать заказы для различных кампаний.
          </p>
          <nav>
            <ul className="about-me__social-links-list">
              <li className="about-me__social-links-list-element">
                <a href="" className="about-me__social-link app__text app__link">
                  Facebook
                </a>
              </li>
              <li className="about-me__social-links-list-element">
                <a href="" className="about-me__social-link app__text app__link">
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="about-me__two-columns-right-column">
          <img
            className="about-me__photo"
            src={student}
            alt="Фотография автора диплома, студента Yandex Praktikum Константина"
          />
        </div>
      </article>
    </section>
  );
}

export default AboutMe;
