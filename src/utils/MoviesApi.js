import { handleResponse } from './utils';
import { moviesApiUrl } from './constants';

class MoviesApi {
  constructor(url) {
    this._url = url;
  }

  getAllMovies() {
    return fetch(`${moviesApiUrl}`).then(handleResponse);
  }
}

const moviesApi = new MoviesApi(moviesApiUrl);
export default moviesApi;
