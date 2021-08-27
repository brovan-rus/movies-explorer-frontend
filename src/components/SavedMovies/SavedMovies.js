import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import React from 'react';
import useSavedMovies from '../../utils/userHooks/useSavedMovies';

function SavedMovies({ savedMovies, updateSavedMovies }) {
  const savedMoviesHandler = useSavedMovies(updateSavedMovies);
  React.useEffect(() => savedMoviesHandler.init(savedMovies), [savedMovies]);

  return (
    <main className="movies">
      <Preloader />
      <SearchForm
        onSearch={savedMoviesHandler.search}
        filterShortFilms={savedMoviesHandler.onFilmsFilter}
      />
      <MoviesCardList
        cardList={savedMoviesHandler.cardList}
        onDelete={savedMoviesHandler.remove}
        place="saved-movies"
      />
    </main>
  );
}

export default SavedMovies;
