import { handleResponse } from './utils';
import { mainApiUrl } from './constants';

class MainApi {
  constructor(url) {
    this._url = url;
  }

  auth(token) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(handleResponse);
  }

  editProfile(token, newProfileInfo) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProfileInfo),
    }).then(handleResponse);
  }

  login(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then(handleResponse);
  }

  register(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    }).then(handleResponse);
  }

  getSavedMovies(token) {
    return fetch(`${this._url}/movies`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(handleResponse);
  }

  addMovieToSaved(token, movie) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    }).then(handleResponse);
  }

  removeMovieFromSaved(token, movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(handleResponse);
  }
}

const mainApi = new MainApi(mainApiUrl);
export default mainApi;
