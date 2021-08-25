import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import React from 'react';
import useMovies from '../../utils/userHooks/useMovies';
import ErrorPopup from '../ErrorPopup/ErrorPopup';

function Movies() {
  const movies = useMovies();
  const { cardList, handleSearch, handleLike, preloaderActive, errorMessage, onFilmsFilter } =
    movies;

  return (
    <main className="movies">
      <Preloader isActive={preloaderActive} />
      <ErrorPopup errorText={errorMessage} isActive={movies.errorMessage.length > 0} />
      <SearchForm onSearch={handleSearch} filterShortFilms={onFilmsFilter} />
      <MoviesCardList cardList={cardList} place="movies" handleLike={handleLike} />
    </main>
  );
}

export default Movies;
