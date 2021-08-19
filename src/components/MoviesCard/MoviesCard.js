function MoviesCard({
  imageSrc,
  imageAlt,
  imageWidth,
  title,
  isSaved,
  length,
  place,
  trailerLink,
}) {
  return (
    <li className="movies-card">
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
      <a href={trailerLink} target="_blank">
        <img className="movies-card__image" src={imageSrc} alt={imageAlt} width={imageWidth} />
      </a>
    </li>
  );
}

export default MoviesCard;
