import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import React from 'react';
import UseSavedMovies from '../UseSavedMovies/UseSavedMovies';
import mainApi from '../../utils/MainApi';
import moviesHandler from '../../utils/MoviesHandler';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedMovies() {
  const [showShortMoviesOnly, setShowShortMoviesOnly] = React.useState(false);
  const onFilmsFilter = (isFiltered) => setShowShortMoviesOnly(isFiltered);
  const useSavedMovies = UseSavedMovies();
  React.useEffect(() => useSavedMovies.init(), []);

  return (
    <main className="movies">
      <Preloader />
      <SearchForm onSearch={useSavedMovies.search} filterShortFilms={onFilmsFilter} />
      <MoviesCardList>
        {showShortMoviesOnly
          ? useSavedMovies.shortSavedMoviesList.map((movie) => {
              return <MoviesCard movie={movie} onLike="" key={movie.id} place="saved-movies" />;
            })
          : useSavedMovies.savedMoviesList.map((movie) => {
              return <MoviesCard movie={movie} onLike="" key={movie.id} place="saved-movies" />;
            })}
      </MoviesCardList>
    </main>
  );
}

export default SavedMovies;
