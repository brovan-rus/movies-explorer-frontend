import moviesApi from './MoviesApi';
import mainApi from './MainApi';

class MoviesHandler {
  constructor() {}

  getToken() {
    return localStorage.getItem('jwt');
  }

  saveToLocalStorage(name, value) {
    return localStorage.setItem(`${name}`, JSON.stringify(value));
  }

  getFromLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name));
  }

  _addToSavedMoviesList(movie) {
    const savedMoviesOldList = this.getFromLocalStorage('savedMovies');
    const savedMoviesNewList = [...savedMoviesOldList, movie];
    this.saveToLocalStorage('savedMovies', savedMoviesNewList);
    return this.getFromLocalStorage('savedMovies');
  }

  _removeFromSavedMoviesList(movie) {
    const savedMoviesOldList = this.getFromLocalStorage('savedMovies');
    const savedMoviesNewList = savedMoviesOldList.filter((m) => !(m.movieId === movie.id));
    console.log(savedMoviesNewList, savedMoviesOldList, movie);
    this.saveToLocalStorage('savedMovies', savedMoviesNewList);
    return this.getFromLocalStorage('savedMovies');
  }

  searchMovie = (movies, fields, { request }) => {
    return movies.filter((movie) =>
      fields.some((field) => movie[field] && movie[field].includes(request)),
    );
  };

  filterShortMovies = (movies) => {
    return movies.filter((m) => m.duration * 1 < 41);
  };

  setIsSaved = (movies, savedMovies, user) => {
    return movies.map((movie) =>
      savedMovies.some((savedMovie) => movie.id === savedMovie.movieId)
        ? { ...movie, isSaved: true }
        : { ...movie, isSaved: false },
    );
  };

  save = (movie) => {
    const token = this.getToken();
    const savedMovie = {
      nameEN: movie.nameEN,
      nameRU: movie.nameRU,
      movieId: movie.id,
      thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailer: movie.trailerLink,
      description: movie.description,
      duration: movie.duration,
      year: movie.year,
      director: movie.director,
      country: movie.country,
    };

    return mainApi
      .addMovieToSaved(token, savedMovie)
      .then(() => {
        return this._addToSavedMoviesList(savedMovie);
      })
      .catch((e) => console.log(e));
  };

  remove = (movie, savedMoviesList) => {
    const token = this.getToken();
    const savedMovie = savedMoviesList.find((m) => m.movieId === movie.id);
    console.log(movie, savedMovie, savedMoviesList);
    return mainApi
      .removeMovieFromSaved(token, savedMovie._id)
      .then(() => {
        return this._removeFromSavedMoviesList(movie);
      })
      .catch((e) => console.log(e));
  };
}

const moviesHandler = new MoviesHandler();

export default moviesHandler;
