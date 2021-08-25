import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../MainApi';
import moviesHandler from '../MoviesHandler';
import moviesApi from '../MoviesApi';
import { formErrorMessage, searchFields } from '../constants';

function useMovies() {
  const [showShortMoviesOnly, setShowShortMoviesOnly] = React.useState(false);
  const [moviesList, setMoviesList] = React.useState([]);
  const [savedMoviesList, setSavedMoviesList] = React.useState([]);
  const [shortMoviesList, setShortMoviesList] = React.useState([]);
  const [request, setRequest] = React.useState('');
  const [preloaderActive, setPreloaderActive] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const onFilmsFilter = (isFiltered) => setShowShortMoviesOnly(isFiltered);
  const user = React.useContext(CurrentUserContext);
  const handleSearch = (request) => setRequest(request);
  const cardList = showShortMoviesOnly ? shortMoviesList : moviesList;

  React.useEffect(() => {
    const getSavedMoviesList = new Promise((resolve, reject) => {
      mainApi
        .getSavedMovies(moviesHandler.getToken())
        .then((res) => {
          const savedMoviesByMe = res.data.filter((m) => m.owner === user._id);
          moviesHandler.saveToLocalStorage('savedMovies', savedMoviesByMe);
          resolve(savedMoviesByMe);
        })
        .catch((e) => reject(e));
    });

    const getAllMoviesList = new Promise((resolve, reject) => {
      moviesApi
        .getAllMovies()
        .then((res) => resolve(res))
        .catch((e) => reject(e));
    });

    if (request) {
      setPreloaderActive(true);
      Promise.all([getAllMoviesList, getSavedMoviesList])
        .then(([moviesList, savedMoviesList]) => {
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
          if (filteredMoviesList.length === 0) {
            setErrorMessage('Ничего не найдено');
            setTimeout(() => {
              setErrorMessage('');
            }, 2500);
          }
        })
        .catch(() => {
          setPreloaderActive(false);
          setErrorMessage(formErrorMessage);
          setTimeout(() => {
            setErrorMessage('');
          }, 2500);
        })
        .finally(() => setPreloaderActive(false));
    }
  }, [request]);

  const handleLike = (movie) => {
    if (!movie.isSaved) {
      moviesHandler
        .save(movie)
        .then((res) => {
          setMoviesList((state) =>
            state.map((c) => (c.id === movie.id ? { ...movie, isSaved: true } : c)),
          );
          setSavedMoviesList(res);
        })
        .catch((e) => console.log(e));
    } else {
      moviesHandler
        .remove(movie, savedMoviesList)
        .then((res) => {
          setMoviesList((state) =>
            state.map((c) => (c.id === movie.id ? { ...movie, isSaved: false } : c)),
          );
          setSavedMoviesList(res);
        })
        .catch((e) => console.log(e));
    }
  };

  return {
    cardList,
    handleSearch,
    handleLike,
    preloaderActive,
    errorMessage,
    onFilmsFilter,
    showShortMoviesOnly,
  };
}

export default useMovies;
