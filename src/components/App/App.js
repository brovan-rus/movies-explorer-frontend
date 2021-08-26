import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useUser from '../../utils/userHooks/useUser';
import ProtectedRoute from '../ProtectedRoute';
import localStorageHandler from '../../utils/LocalStorageHandler';
import mainApi from '../../utils/MainApi';

function App() {
  const user = useUser();
  const currentUser = user.currentUser;
  const formError = user.formError;
  const formButtonIsDisabled = user.formButtonIsDisabled;
  const [savedFilteredMovies, setSavedFilteredMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isFiltered, setIsFiltered] = React.useState(false);
  console.log(formButtonIsDisabled);

  React.useEffect(() => {
    user.auth();
    const savedFilteredMovies = localStorageHandler.getFromLocalStorage('filteredMoviesList');
    const isFiltered = localStorageHandler.getFromLocalStorage('isFiltered');
    if (savedFilteredMovies) {
      setSavedFilteredMovies(savedFilteredMovies);
      setIsFiltered(isFiltered);
    }
    mainApi.getSavedMovies(localStorageHandler.getToken()).then((res) => setSavedMovies(res.data));
  }, []);
  const updateSavedMovies = (updateSavedMovies) => setSavedMovies(updateSavedMovies);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header place="landing" />
            <Main />
            <Footer />
          </Route>
          <ProtectedRoute path="/movies" loggedIn={currentUser.isLogged}>
            <Header place="movies" />
            <Movies
              savedSearch={savedFilteredMovies}
              savedMovies={savedMovies}
              isFiltered={isFiltered}
              updateSavedMovies={updateSavedMovies}
            />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute path="/saved-movies" loggedIn={currentUser.isLogged}>
            <Header place="saved-movies" />
            <SavedMovies savedMovies={savedMovies} updateSavedMovies={updateSavedMovies} />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute path="/profile" loggedIn={currentUser.isLogged}>
            <Header place="profile" />
            <Profile
              onLogout={user.logout}
              onEdit={user.edit}
              isError={formError.profileForm}
              isMessagePopupOpen={user.isProfilePopupMessageOpen}
              isButtonDisabled={formButtonIsDisabled}
            />
          </ProtectedRoute>
          <Route path="/signin">
            <Login
              onLoginSubmit={user.login}
              isError={formError.loginForm}
              isButtonDisabled={formButtonIsDisabled}
            />
          </Route>
          <Route path="/signup">
            <Register
              onRegisterSubmit={user.register}
              isError={formError.registerForm}
              isButtonDisabled={formButtonIsDisabled}
            />
          </Route>
          <Route path="*">
            <ErrorMessage title="404" text="Страница не найдена" />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
