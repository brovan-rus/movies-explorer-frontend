import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import React from 'react';
import UseSavedMovies from '../UseSavedMovies/UseSavedMovies';

function SavedMovies() {
  const useSavedMovies = UseSavedMovies();
  React.useEffect(() => useSavedMovies.init(), []);

  return (
    <main className="movies">
      <Preloader />
      <SearchForm
        onSearch={useSavedMovies.search}
        filterShortFilms={useSavedMovies.onFilmsFilter}
      />
      <MoviesCardList>
        {useSavedMovies.resultMoviesList.map((movie) => {
          return (
            <MoviesCard
              movie={movie}
              onDelete={useSavedMovies.remove}
              key={movie._id}
              place="saved-movies"
            />
          );
        })}
        ;
      </MoviesCardList>
    </main>
  );
}

export default SavedMovies;
