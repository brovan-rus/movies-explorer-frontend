import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../MainApi';
import moviesHandler from '../MoviesHandler';
import moviesApi from '../MoviesApi';
import {
  formErrorMessage,
  messagePopupDelay,
  searchErrorMessage,
  searchFields,
} from '../constants';
import resolve from 'resolve';

function useMovies() {
  const [showShortMoviesOnly, setShowShortMoviesOnly] = React.useState(false);
  const [errorMessagePopupOpen, setErrorMessagePopupOpen] = React.useState(false);

  const [moviesList, setMoviesList] = React.useState([]);
  const [savedMoviesList, setSavedMoviesList] = React.useState([]);
  const [filteredShortMoviesList, setFilteredShortMoviesList] = React.useState([]);
  const [filteredMoviesList, setFilteredMoviesList] = React.useState([]);
  const [searchRequest, setSearchRequest] = React.useState({});
  const [preloaderActive, setPreloaderActive] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const onFilmsFilter = (isFiltered) => setShowShortMoviesOnly(isFiltered);
  const user = React.useContext(CurrentUserContext);
  const cardList = showShortMoviesOnly ? filteredShortMoviesList : filteredMoviesList;

  const getMoviesLists = () => {
    const getMoviesList = new Promise((resolve, reject) => {
      moviesApi.getAllMovies().then((res) => resolve(res));
    });
    const getSavedMoviesList = new Promise((resolve, reject) => {
      mainApi.getSavedMovies(moviesHandler.getToken()).then((res) => {
        const savedMoviesByMe = res.data.filter((m) => m.owner === user._id);
        resolve(savedMoviesByMe);
      });
    });
    return Promise.all([getMoviesList, getSavedMoviesList]);
  };

  const handleSearch = async (request) => {
    if (!searchRequest.request) {
      await getMoviesLists()
        .then(([moviesList, savedMoviesList]) => {
          setMoviesList(moviesList);
          setSavedMoviesList(savedMoviesList);
          moviesHandler.saveToLocalStorage('savedMovies', savedMoviesList);
        })
        .catch(showFormError);
    }
    setSearchRequest(request);
  };

  const showFormError = () => {
    setPreloaderActive(false);
    setErrorMessage(formErrorMessage);
    setTimeout(() => {
      setErrorMessage('');
    }, 2500);
  };

  React.useEffect(() => {
    setPreloaderActive(true);
    const filteredMoviesList = moviesHandler.searchMovie(moviesList, searchFields, searchRequest);
    const filteredMoviesListWithSaved = moviesHandler.setIsSaved(
      filteredMoviesList,
      savedMoviesList,
      user,
    );
    const filteredShortMoviesWithSaved = moviesHandler.filterShortMovies(
      filteredMoviesListWithSaved,
    );
    setFilteredMoviesList(filteredMoviesListWithSaved);
    setFilteredShortMoviesList(filteredShortMoviesWithSaved);
    setPreloaderActive(false);
    if (filteredMoviesList.length === 0) {
      setErrorMessage(searchErrorMessage);
      setErrorMessagePopupOpen(true);
      setTimeout(() => {
        setErrorMessagePopupOpen(false);
      }, messagePopupDelay);
    }
  }, [searchRequest]);

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
    errorMessagePopupOpen,
  };
}

export default useMovies;
