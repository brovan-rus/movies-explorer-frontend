import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import moviesHandler from '../../utils/MoviesHandler';
import React from 'react';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import { searchFields } from '../../utils/constants';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Movies() {
  const [showShortMoviesOnly, setShowShortMoviesOnly] = React.useState(false);
  const [moviesList, setMoviesList] = React.useState([]);
  const [savedMoviesList, setSavedMoviesList] = React.useState([]);
  const [shortMoviesList, setShortMoviesList] = React.useState([]);
  const [request, setRequest] = React.useState('');
  const user = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    const getSavedMoviesList = new Promise((resolve) => {
      mainApi
        .getSavedMovies(moviesHandler.getToken())
        .then((res) => {
          const savedMoviesByMe = res.data.filter((m) => m.owner === user._id);
          moviesHandler.saveToLocalStorage('savedMovies', savedMoviesByMe);
          resolve(savedMoviesByMe);
        })
        .catch((e) => console.log(e));
    });

    const getAllMoviesList = new Promise((resolve) => {
      moviesApi
        .getAllMovies()
        .then((res) => {
          resolve(res);
        })
        .catch((e) => console.log(e));
    });

    Promise.all([getAllMoviesList, getSavedMoviesList]).then(([moviesList, savedMoviesList]) => {
      const filteredMoviesList = moviesHandler.searchMovie(moviesList, searchFields, request);
      const filteredMoviesListWithSaved = moviesHandler.setIsSaved(
        filteredMoviesList,
        savedMoviesList,
        user,
      );
      const filteredShortMoviesWithSaved = moviesHandler.filterShortMovies(
        filteredMoviesListWithSaved,
      );
      setMoviesList(filteredMoviesListWithSaved);
      setSavedMoviesList(savedMoviesList);
      setShortMoviesList(filteredShortMoviesWithSaved);
    });
  }, [request]);

  const handleSearch = (request) => {
    setRequest(request);
  };
  const onFilmsFilter = (isFiltered) => setShowShortMoviesOnly(isFiltered);

  const handleLike = (movie) => {
    if (!movie.isSaved) {
      moviesHandler.save(movie).then((res) => {
        setSavedMoviesList(res);
      });
    } else {
      moviesHandler.remove(movie, savedMoviesList).then((res) => {
        console.log(res);
        setSavedMoviesList(res);
      });
    }
    movie.isSaved = !movie.isSaved;
  };

  console.log(moviesList);

  return (
    <main className="movies">
      <Preloader />
      <SearchForm onSearch={handleSearch} filterShortFilms={onFilmsFilter} />
      <MoviesCardList>
        {showShortMoviesOnly
          ? shortMoviesList.map((movie) => {
              return <MoviesCard movie={movie} onLike={handleLike} key={movie.id} place="movies" />;
            })
          : moviesList.map((movie) => {
              return <MoviesCard movie={movie} onLike={handleLike} key={movie.id} place="movies" />;
            })}
      </MoviesCardList>
    </main>
  );
}

export default Movies;
