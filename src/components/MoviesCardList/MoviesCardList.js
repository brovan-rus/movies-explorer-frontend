function MoviesCardList({ children, isButtonActive }) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">{children}</ul>
      <div
        className={`movies-card-list__button-wrapper ${
          !isButtonActive && 'movies-card-list__button-wrapper_hidden'
        }`}
      >
        <button className="movies-card-list__button app__text app__link">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
