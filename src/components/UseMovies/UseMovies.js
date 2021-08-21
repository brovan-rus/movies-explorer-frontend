import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import moviesHandler from '../../utils/MoviesHandler';
import moviesApi from '../../utils/MoviesApi';
import { searchFields } from '../../utils/constants';

function UseMovies() {
  const [moviesList, setMoviesList] = React.useState([]);
  const [savedMoviesList, setSavedMoviesList] = React.useState([]);
  const [shortMoviesList, setShortMoviesList] = React.useState([]);
  const [request, setRequest] = React.useState('');

  const user = React.useContext(CurrentUserContext);

  const handleSearch = (request) => {
    setRequest(request);
  };

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

  return {
    moviesList,
    shortMoviesList,
    handleSearch,
    handleLike,
  };
}

export default UseMovies;
