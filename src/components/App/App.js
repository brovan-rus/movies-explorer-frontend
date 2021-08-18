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
import mainApi from '../../utils/MainApi';

function App() {
  const [currentUser, setCurrentUser] = React.useState({ isLoggedIn: false });
  const [formError, setFormError] = React.useState({});

  const handleRegister = ({ name, email, password }) => {
    setFormError({ ...formError, registerForm: false });
    mainApi
      .register(name, email, password)
      .then((res) => console.log(res))
      .catch(() => {
        setFormError({ ...formError, registerForm: true });
      });
  };

  const handleLogin = ({ email, password }) => {
    setFormError({ ...formError, loginForm: false });
    mainApi
      .login(email, password)
      .then((res) => console.log(res))
      .catch(() => {
        setFormError({ ...formError, loginForm: true });
      });
  };

  React.useEffect(() => {
    setFormError({});
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
            <Profile />
          </Route>
          <Route path="/signin">
            <Login onLoginSubmit={handleLogin} isError={formError.loginForm} />
          </Route>
          <Route path="/signup">
            <Register onRegisterSubmit={handleRegister} isError={formError.registerForm} />
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
