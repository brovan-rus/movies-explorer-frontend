import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import moviesHandler from '../../utils/MoviesHandler';
import mainApi from '../../utils/MainApi';
import { searchFields } from '../../utils/constants';

function UseSavedMovies() {
  const [savedMoviesList, setSavedMoviesList] = React.useState([]);
  const [shortSavedMoviesList, setShortSavedMoviesList] = React.useState([]);
  const [request, setRequest] = React.useState('');
  const [showShortMoviesOnly, setShowShortMoviesOnly] = React.useState(false);
  const user = React.useContext(CurrentUserContext);
  const search = (request) => setRequest(request);
  const onFilmsFilter = (isFiltered) => setShowShortMoviesOnly(isFiltered);

  const remove = (movie) =>
    moviesHandler.remove(movie, savedMoviesList).then((res) => setSavedMoviesList(res));

  const init = () => {
    const storedSavedMoviesList = moviesHandler.getFromLocalStorage('savedMovies');
    if (storedSavedMoviesList.length > 0) {
      setSavedMoviesList(storedSavedMoviesList);
      const shortSavedMovies = moviesHandler.filterShortMovies(shortSavedMoviesList);
      setShortSavedMoviesList(shortSavedMovies);
    } else {
      mainApi
        .getSavedMovies(moviesHandler.getToken())
        .then((res) => {
          const savedMoviesByMe = res.data.filter((m) => m.owner === user._id);
          moviesHandler.saveToLocalStorage('savedMovies', savedMoviesByMe);
          setSavedMoviesList(savedMoviesByMe);
          setShortSavedMoviesList(moviesHandler.filterShortMovies(savedMoviesByMe));
        })
        .catch((e) => console.log(e));
    }
  };

  React.useEffect(() => {
    setSavedMoviesList(moviesHandler.searchMovie(savedMoviesList, searchFields, request));
  }, [request]);

  React.useEffect(() => {
    setShortSavedMoviesList(moviesHandler.filterShortMovies(savedMoviesList));
  }, [showShortMoviesOnly]);

  return {
    savedMoviesList,
    shortSavedMoviesList,
    search,
    init,
    remove,
    onFilmsFilter,
    showShortMoviesOnly,
  };
}

export default UseSavedMovies;
