import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import React from 'react';
import UseMovies from '../UseMovies/UseMovies';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import useAddButton from '../../utils/useAddButton';

function Movies() {
  const useMovies = UseMovies();
  const { cardList, handleSearch, handleLike, preloaderActive, errorMessage, onFilmsFilter } =
    useMovies;
  const addButton = useAddButton();

  // React.useEffect(() => {
  //   addButton.init(useMovies.moviesList);
  // }, [useMovies.moviesList]);

  return (
    <main className="movies">
      <Preloader isActive={preloaderActive} />
      <ErrorPopup errorText={errorMessage} isActive={useMovies.errorMessage.length > 0} />
      <SearchForm onSearch={handleSearch} filterShortFilms={onFilmsFilter} />
      <MoviesCardList
        handleButtonClick={addButton.handleClick}
        cardList={cardList}
        place="movies"
        isButtonActive={addButton.isButtonActive}
        handleLike={handleLike}
      />
    </main>
  );
}

export default Movies;
