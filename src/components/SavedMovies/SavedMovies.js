import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import React from 'react';
import useSavedMovies from '../../utils/userHooks/useSavedMovies';

function SavedMovies() {
  const savedMovies = useSavedMovies();
  React.useEffect(() => savedMovies.init(), []);

  return (
    <main className="movies">
      <Preloader />
      <SearchForm onSearch={useSavedMovies.search} filterShortFilms={savedMovies.onFilmsFilter} />
      <MoviesCardList
        cardList={savedMovies.resultMoviesList}
        onDelete={savedMovies.remove}
        place="saved-movies"
      />
    </main>
  );
}

export default SavedMovies;
