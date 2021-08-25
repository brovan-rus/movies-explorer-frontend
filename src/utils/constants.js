const moviesApiUrl = 'https://api.nomoreparties.co/beatfilm-movies';
const mainApiUrl = 'http://localhost:3001';
// const mainApiUrl = 'https://api.movies-explorer-kb.nomoredomains.rocks';
const searchFields = ['country', 'description', 'director', 'nameRU', 'nameEN', 'year'];
const formValidationErrorMessage = 'Проверьте правильность заполнения поля';
const formErrorMessage =
  'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.';
const searchErrorMessage = 'Ничего не найдено';
const profileEditSuccessMessage = 'Вы успешно отредактировали профиль';
const messagePopupDelay = 1000;
export {
  moviesApiUrl,
  mainApiUrl,
  formValidationErrorMessage,
  formErrorMessage,
  searchFields,
  searchErrorMessage,
  messagePopupDelay,
  profileEditSuccessMessage,
};
