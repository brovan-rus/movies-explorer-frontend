import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import moviesHandler from '../../utils/MoviesHandler';
import mainApi from '../../utils/MainApi';
import { searchFields } from '../../utils/constants';

function UseSavedMovies() {
  const [savedMoviesList, setSavedMoviesList] = React.useState([]);
  const [shortSavedMoviesList, setShortSavedMoviesList] = React.useState([]);
  const [request, setRequest] = React.useState('');
  const user = React.useContext(CurrentUserContext);

  console.log(savedMoviesList);

  const search = (request) => setRequest(request);

  const init = () => {
    const storedSavedMoviesList = moviesHandler.getFromLocalStorage('savedMovies');
    if (storedSavedMoviesList) {
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
    setShortSavedMoviesList(moviesHandler.filterShortMovies(shortSavedMoviesList));
  }, [request]);

  return {
    savedMoviesList,
    shortSavedMoviesList,
    search,
    init,
  };

  // React.useEffect(() => {
  //   const storedSavedMoviesList = moviesHandler.getFromLocalStorage('savedMovies');
  //   if (storedSavedMoviesList) {
  //     setSavedMoviesList(storedSavedMoviesList);
  //     setShortSavedMoviesList(moviesHandler.filterShortMovies(setShortSavedMoviesList));
  //   } else {
  //     mainApi
  //       .getSavedMovies(moviesHandler.getToken())
  //       .then((res) => {
  //         const savedMoviesByMe = res.data.filter((m) => m.owner === user._id);
  //         moviesHandler.saveToLocalStorage('savedMovies', savedMoviesByMe);
  //         setSavedMoviesList(savedMoviesByMe);
  //         setShortSavedMoviesList(moviesHandler.filterShortMovies(savedMoviesByMe));
  //       })
  //       .catch((e) => console.log(e));
  //   }
  // }, []);
}

export default UseSavedMovies;
