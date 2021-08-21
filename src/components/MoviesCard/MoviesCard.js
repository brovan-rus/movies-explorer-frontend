function MoviesCard({ movie, onLike, place }) {
  const handleButtonClick = () => {
    onLike(movie);
  };

  return (
    <li className="movies-card">
      <div className="movies-card__heading">
        <div className="movies-card__title-wrapper app__text">
          <h3 className="movies-card__title">{movie.nameRU}</h3>
          <p className="movies-card__subtitle">{movie.duration}</p>
        </div>
        <button
          onClick={handleButtonClick}
          className={`app__link movies-card__button ${
            movie.isSaved && place === 'movies' ? 'movies-card__button_active' : ''
          }
          ${place === 'saved-movies' ? 'movies-card__button_place_saved-movies' : ''}`}
        >
          <div className="movies-card__button-icon" />
        </button>
      </div>
      <a
        href={movie.trailerLink ? movie.trailerLink : movie.trailer}
        rel="noreferrer"
        target="_blank"
      >
        <img
          className="movies-card__image"
          src={movie.image.url ? `https://api.nomoreparties.co${movie.image.url}` : movie.image}
          alt={movie.image.alternativeText ? movie.image.alternativeText : movie.nameRU}
          width={movie.image.width}
        />
      </a>
    </li>
  );
}

export default MoviesCard;
