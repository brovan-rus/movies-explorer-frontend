import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import moviesHandler from '../MoviesHandler';
import moviesApi from '../MoviesApi';
import {
  formErrorMessage,
  messagePopupDelay,
  searchErrorMessage,
  searchFields,
} from '../constants';
import localStorageHandler from '../LocalStorageHandler';

function useMovies(updateSavedMovies) {
  const [showShortMoviesOnly, setShowShortMoviesOnly] = React.useState(false);
  const [errorMessagePopupOpen, setErrorMessagePopupOpen] = React.useState(false);
  const [moviesList, setMoviesList] = React.useState([]);
  const [savedMoviesList, setSavedMoviesList] = React.useState([]);
  const [filteredMoviesList, setFilteredMoviesList] = React.useState([]);
  const [searchRequest, setSearchRequest] = React.useState({});
  const [preloaderActive, setPreloaderActive] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const onFilmsFilter = (isFiltered) => {
    setShowShortMoviesOnly(isFiltered);
    localStorageHandler.saveToLocalStorage('isFiltered', isFiltered);
  };
  const user = React.useContext(CurrentUserContext);

  const init = (savedSearchResult, savedMoviesList, isFiltered) => {
    setFilteredMoviesList(savedSearchResult);
    setSavedMoviesList(savedMoviesList);
    setShowShortMoviesOnly(isFiltered);
  };

  const cardList = showShortMoviesOnly
    ? moviesHandler.filterShortMovies(filteredMoviesList)
    : filteredMoviesList;

  const getMoviesList = () =>
    new Promise((resolve, reject) => {
      moviesApi
        .getAllMovies()
        .then((res) => resolve(res))
        .catch(reject);
    });

  const handleSearch = async (request) => {
    setPreloaderActive(true);
    if (!searchRequest.request) {
      await getMoviesList()
        .then((moviesList) => setMoviesList(moviesList))
        .catch(showFormError);
    }
    setSearchRequest(request);
  };

  const handleFilterMovies = (moviesList, searchFields, savedMoviesList, searchRequest) => {
    const filteredMoviesList = moviesHandler.searchMovie(moviesList, searchFields, searchRequest);
    return moviesHandler.setIsSaved(filteredMoviesList, savedMoviesList, user);
  };

  const showFormError = () => {
    setPreloaderActive(false);
    setErrorMessage(formErrorMessage);
    setTimeout(() => {
      setErrorMessage('');
    }, 2500);
  };

  React.useEffect(() => {
    if (searchRequest.request) {
      const filteredMoviesList = handleFilterMovies(
        moviesList,
        searchFields,
        savedMoviesList,
        searchRequest,
      );
      setFilteredMoviesList(filteredMoviesList);
      setPreloaderActive(false);
      if (filteredMoviesList.length === 0 && searchRequest.request) {
        setErrorMessage(searchErrorMessage);
        setErrorMessagePopupOpen(true);
        setTimeout(() => {
          setErrorMessagePopupOpen(false);
        }, messagePopupDelay);
      }
      localStorageHandler.saveToLocalStorage('filteredMoviesList', filteredMoviesList);
    }
  }, [searchRequest]);

  React.useEffect(() => {
    setMoviesList(moviesHandler.setIsSaved(moviesList, savedMoviesList));
    setFilteredMoviesList(moviesHandler.setIsSaved(filteredMoviesList, savedMoviesList));
  }, [savedMoviesList]);

  const handleLike = (movie) => {
    if (!movie.isSaved) {
      moviesHandler
        .save(movie)
        .then((res) => {
          const updatedFilteredMoviesList = filteredMoviesList.map((c) =>
            c.id === movie.id ? { ...movie, isSaved: true } : c,
          );
          setFilteredMoviesList(updatedFilteredMoviesList);
          localStorageHandler.saveToLocalStorage('filteredMoviesList', updatedFilteredMoviesList);
          setMoviesList((state) =>
            state.map((c) => (c.id === movie.id ? { ...movie, isSaved: true } : c)),
          );
          setSavedMoviesList([...savedMoviesList, res.data]);
          updateSavedMovies([...savedMoviesList, res.data]);
        })
        .catch((e) => console.log(e));
    } else {
      moviesHandler
        .remove(movie, savedMoviesList)
        .then(() => {
          setMoviesList((state) =>
            state.map((c) => (c.id === movie.id ? { ...movie, isSaved: false } : c)),
          );
          const updatedSavedMoviesList = savedMoviesList.filter((m) =>
            movie._id ? !(m._id === movie._id) : !(m.movieId === movie.id),
          );
          updateSavedMovies(updatedSavedMoviesList);
          setSavedMoviesList((state) =>
            state.filter((m) => (movie._id ? !(m._id === movie._id) : !(m.movieId === movie.id))),
          );
          const updatedFilteredMoviesList = filteredMoviesList.map((c) =>
            c.id === movie.id ? { ...movie, isSaved: false } : c,
          );
          setFilteredMoviesList(updatedFilteredMoviesList);
          localStorageHandler.saveToLocalStorage('filteredMoviesList', updatedFilteredMoviesList);
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
    errorMessagePopupOpen,
    setFilteredMoviesList,
    setSavedMoviesList,
    init,
    savedMoviesList,
  };
}

export default useMovies;
