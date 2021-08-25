import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import moviesHandler from '../MoviesHandler';
import mainApi from '../MainApi';
import { searchFields } from '../constants';

function useSavedMovies() {
  const [savedMoviesList, setSavedMoviesList] = React.useState([]);
  const [resultMoviesList, setResultMoviesList] = React.useState([]);
  const [request, setRequest] = React.useState('');
  const [showShortMoviesOnly, setShowShortMoviesOnly] = React.useState(false);
  const user = React.useContext(CurrentUserContext);

  const remove = (movie) =>
    moviesHandler.remove(movie, savedMoviesList).then((res) => {
      setSavedMoviesList(res);
    });

  const makeResultMovieList = () => {
    const matchingFilms = request
      ? moviesHandler.searchMovie(savedMoviesList, searchFields, request)
      : savedMoviesList;
    console.log(matchingFilms);
    if (showShortMoviesOnly) {
      setResultMoviesList(moviesHandler.filterShortMovies(matchingFilms));
    } else {
      setResultMoviesList(matchingFilms);
    }
  };

  React.useEffect(() => {
    makeResultMovieList();
  }, [request, showShortMoviesOnly, savedMoviesList]);

  const init = () => {
    const storedSavedMoviesList = moviesHandler.getFromLocalStorage('savedMovies');
    if (storedSavedMoviesList.length > 0) {
      setSavedMoviesList(storedSavedMoviesList);
      setResultMoviesList(storedSavedMoviesList);
    } else {
      mainApi
        .getSavedMovies(moviesHandler.getToken())
        .then((res) => {
          const savedMoviesByMe = res.data.filter((m) => m.owner === user._id);
          moviesHandler.saveToLocalStorage('savedMovies', savedMoviesByMe);
          setSavedMoviesList(savedMoviesByMe);
          setResultMoviesList(savedMoviesByMe);
        })
        .catch((e) => console.log(e));
    }
  };

  const search = (request) => {
    setRequest(request);
  };
  const onFilmsFilter = (isFiltered) => {
    setShowShortMoviesOnly(isFiltered);
  };

  return {
    savedMoviesList,
    resultMoviesList,
    search,
    init,
    remove,
    onFilmsFilter,
    showShortMoviesOnly,
  };
}

export default useSavedMovies;
