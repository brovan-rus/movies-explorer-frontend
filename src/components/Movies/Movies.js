import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import React from 'react';
import UseMovies from '../UseMovies/UseMovies';
import ErrorPopup from '../ErrorPopup/ErrorPopup';

function Movies() {
  const useMovies = UseMovies();
  const { cardList, handleSearch, handleLike, preloaderActive, errorMessage, onFilmsFilter } =
    useMovies;

  return (
    <main className="movies">
      <Preloader isActive={preloaderActive} />
      <ErrorPopup errorText={errorMessage} isActive={useMovies.errorMessage.length > 0} />
      <SearchForm onSearch={handleSearch} filterShortFilms={onFilmsFilter} />
      <MoviesCardList cardList={cardList} place="movies" handleLike={handleLike} />
    </main>
  );
}

export default Movies;
