function MoviesCard({ image, title, isSaved, length, place }) {
  return (
    <div className="movies-card">
      <div className="movies-card__heading">
        <div className="movies-card__title-wrapper app__text">
          <h3 className="movies-card__title">{title}</h3>
          <p className="movies-card__subtitle">{length}</p>
        </div>
        <button
          className={`app__link movies-card__button ${
            isSaved && place === 'movies' ? 'movies-card__button_active' : ''
          }
          ${place === 'saved-movies' ? 'movies-card__button_place_saved-movies' : ''}`}
        >
          <div className="movies-card__button-icon" />
        </button>
      </div>
      <img src={image} alt={title} />
    </div>
  );
}

export default MoviesCard;
