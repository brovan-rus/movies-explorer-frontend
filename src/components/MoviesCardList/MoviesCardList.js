import MoviesCard from '../MoviesCard/MoviesCard';
import useAddButton from '../../utils/useAddButton';
import React from 'react';

function MoviesCardList({ cardList, place, handleLike, onDelete }) {
  const addButton = useAddButton();

  React.useEffect(() => {
    addButton.init(cardList);
  }, [cardList]);

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {addButton.cardsToRender.map((movie) => {
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
        onClick={addButton.handleClick}
        className={`movies-card-list__button-wrapper ${
          !addButton.isButtonActive ? 'movies-card-list__button-wrapper_hidden' : ''
        }`}
      >
        <button className="movies-card-list__button app__text app__link">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
