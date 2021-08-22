import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  isButtonActive,
  handleButtonClick,
  cardList,
  place,
  handleLike,
  onDelete,
}) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {cardList.map((movie) => {
          return (
            <MoviesCard
              movie={movie}
              onLike={handleLike}
              onDelete={onDelete}
              key={movie.id}
              place={place}
            />
          );
        })}
      </ul>
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
