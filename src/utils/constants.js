const moviesApiUrl = 'https://api.nomoreparties.co/beatfilm-movies';
const mainApiUrl = 'http://localhost:3001';
// const mainApiUrl = 'https://api.movies-explorer-kb.nomoredomains.rocks';
const searchFields = ['country', 'description', 'director', 'nameRU', 'nameEN', 'year'];
const formValidationErrorMessage = 'Проверьте правильность заполнения поля';
const formErrorMessage =
  'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.';
const searchErrorMessage = 'Ничего не найдено';
const profileEditSuccessMessage = 'Вы успешно отредактировали профиль';
const shortMovieDuration = 41;
const res = {
  wide: { res: 1280, initCards: 12, addCards: 3 },
  mid: { res: 768, initCards: 8, addCards: 2 },
  low: { res: 320, initCards: 5, addCards: 2 },
};
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
  shortMovieDuration,
  res,
};
