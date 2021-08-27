import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import React from 'react';
import useMovies from '../../utils/userHooks/useMovies';
import MessagePopup from '../MessagePopup/MessagePopup';

function Movies({ savedSearch, savedMovies, isFiltered, updateSavedMovies }) {
  const movies = useMovies(updateSavedMovies);
  const { cardList, handleSearch, handleLike, preloaderActive, onFilmsFilter } = movies;
  React.useEffect(() => {
    movies.init(savedSearch, savedMovies, isFiltered);
  }, [savedSearch]);

  return (
    <main className="movies">
      <Preloader isActive={preloaderActive} />
      <MessagePopup messageText={movies.errorMessage} isActive={movies.errorMessagePopupOpen} />
      <SearchForm
        onSearch={handleSearch}
        filterShortFilms={onFilmsFilter}
        isFiltered={isFiltered}
      />
      <MoviesCardList cardList={cardList} place="movies" handleLike={handleLike} />
    </main>
  );
}

export default Movies;
