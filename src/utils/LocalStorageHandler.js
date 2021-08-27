class LocalStorageHandler {
  getToken = () => localStorage.getItem('jwt');
  saveToLocalStorage = (name, value) => localStorage.setItem(`${name}`, JSON.stringify(value));
  getFromLocalStorage = (name) => JSON.parse(localStorage.getItem(name));
  clearLocalStorage = (names) => names.forEach((name) => localStorage.removeItem(name));
}

const localStorageHandler = new LocalStorageHandler();
export default localStorageHandler;
