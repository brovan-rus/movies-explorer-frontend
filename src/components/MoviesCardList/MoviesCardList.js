function MoviesCardList({ children, isButtonActive, handleButtonClick }) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">{children}</ul>
      <div
        onClick={handleButtonClick}
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
