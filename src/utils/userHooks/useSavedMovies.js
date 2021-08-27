import React from 'react';
import moviesHandler from '../MoviesHandler';
import { searchFields } from '../constants';

function useSavedMovies(updateSavedMovies) {
  const [savedMoviesList, setSavedMoviesList] = React.useState([]);
  const [filteredMoviesList, setFilteredMoviesList] = React.useState([]);
  const [request, setRequest] = React.useState('');
  const [showShortMoviesOnly, setShowShortMoviesOnly] = React.useState(false);
  const search = (request) => {
    setRequest(request);
  };
  const onFilmsFilter = (isFiltered) => {
    setShowShortMoviesOnly(isFiltered);
  };
  const cardList = showShortMoviesOnly
    ? moviesHandler.filterShortMovies(filteredMoviesList)
    : filteredMoviesList;

  const init = (savedMovies) => {
    setSavedMoviesList(savedMovies);
    setFilteredMoviesList(savedMovies);
  };

  const remove = (movie) =>
    moviesHandler.remove(movie, savedMoviesList).then(() => {
      console.log(movie);
      const updatedMoviesList = savedMoviesList.filter((m) => !(m._id === movie._id));
      updateSavedMovies(updatedMoviesList);
      setSavedMoviesList((state) => state.filter((m) => !(m._id === movie._id)));
      setFilteredMoviesList((state) => state.filter((m) => !(m._id === movie._id)));
    });

  React.useEffect(() => {
    setFilteredMoviesList(moviesHandler.searchMovie(savedMoviesList, searchFields, request));
  }, [request]);

  return {
    savedMoviesList,
    search,
    setSavedMoviesList,
    remove,
    onFilmsFilter,
    showShortMoviesOnly,
    cardList,
    init,
  };
}

export default useSavedMovies;
