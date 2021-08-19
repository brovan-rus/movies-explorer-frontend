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
import UserHandler from '../UserHandler/UserHandler';

function App() {
  const user = new UserHandler();
  const currentUser = user.currentUser;

  const formError = user.formError;
  const handleRegister = (user) => user.register(user);
  const handleLogin = ({ email, password }) => user.login({ email, password });

  React.useEffect(() => {
    user.auth();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header place="landing" />
            <Main />
            <Footer />
          </Route>
          <Route path="/movies">
            <Header place="movies" />
            <Movies />
            <Footer />
          </Route>
          <Route path="/saved-movies">
            <Header place="saved-movies" />
            <SavedMovies />
            <Footer />
          </Route>
          <Route path="/profile">
            <Header place="profile" />
            <Profile onLogout={user.logout} onEdit={user.edit} isError={formError.profileForm} />
          </Route>
          <Route path="/signin">
            <Login onLoginSubmit={user.login} isError={formError.loginForm} />
          </Route>
          <Route path="/signup">
            <Register onRegisterSubmit={user.register} isError={formError.registerForm} />
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
