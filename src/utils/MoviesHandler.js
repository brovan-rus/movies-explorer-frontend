import mainApi from './MainApi';
import localStorageHandler from './LocalStorageHandler';

class MoviesHandler {
  searchMovie = (movies, fields, { request }) =>
    movies.filter((movie) =>
      fields.some((field) => movie[field] && movie[field].includes(request)),
    );
  filterShortMovies = (movies) => movies.filter((m) => m.duration * 1 < 41);
  setIsSaved = (movies, savedMovies) =>
    movies.map((movie) =>
      savedMovies.some((savedMovie) => movie.id === savedMovie.movieId)
        ? { ...movie, isSaved: true }
        : { ...movie, isSaved: false },
    );
  save = (movie) => {
    console.log(movie);
    const token = localStorageHandler.getToken();
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

    return mainApi.addMovieToSaved(token, savedMovie).catch(() => Promise.reject());
  };

  remove = (movie, savedMoviesList) => {
    const token = localStorageHandler.getToken();
    const savedMovie = movie._id ? movie : savedMoviesList.find((m) => m.movieId === movie.id);
    return mainApi.removeMovieFromSaved(token, savedMovie._id).catch(() => Promise.reject());
  };
}

const moviesHandler = new MoviesHandler();

export default moviesHandler;
