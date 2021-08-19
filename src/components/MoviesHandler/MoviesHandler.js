import React from 'react';
import moviesApi from '../../utils/MoviesApi';
import { searchFields } from '../../utils/constants';

function MoviesHandler() {
  const [moviesList, setMoviesList] = React.useState([]);
  const [shortMoviesList, setShortMoviesList] = React.useState([]);

  const filterArray = (array, fields, value) => {
    return array.filter((item) =>
      fields.some((field) => item[field] && item[field].includes(value)),
    );
  };

  const search = (movies) => {
    const { request } = movies;
    moviesApi
      .getAllMovies()
      .then((res) => {
        const result = filterArray(res, searchFields, request);
        setMoviesList(result);
        const resultShortFilms = result.filter((m) => m.duration * 1 < 41);
        setShortMoviesList(resultShortFilms);
      })
      .catch((e) => console.log(e));
  };

  return { moviesList, shortMoviesList, search };
}

export default MoviesHandler;
