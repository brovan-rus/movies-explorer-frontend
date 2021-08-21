import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import React from 'react';
import UseMovies from '../UseMovies/UseMovies';

function Movies() {
  const [showShortMoviesOnly, setShowShortMoviesOnly] = React.useState(false);
  const useMovies = UseMovies();
  const onFilmsFilter = (isFiltered) => setShowShortMoviesOnly(isFiltered);

  return (
    <main className="movies">
      <Preloader />
      <SearchForm onSearch={useMovies.handleSearch} filterShortFilms={onFilmsFilter} />
      <MoviesCardList>
        {showShortMoviesOnly
          ? useMovies.shortMoviesList.map((movie) => {
              return (
                <MoviesCard
                  movie={movie}
                  onLike={useMovies.handleLike}
                  key={movie.id}
                  place="movies"
                />
              );
            })
          : useMovies.moviesList.map((movie) => {
              return (
                <MoviesCard
                  movie={movie}
                  onLike={useMovies.handleLike}
                  key={movie.id}
                  place="movies"
                />
              );
            })}
      </MoviesCardList>
    </main>
  );
}

export default Movies;
