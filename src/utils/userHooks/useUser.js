import React from 'react';
import mainApi from '../MainApi';
import { useHistory } from 'react-router-dom';
import { messagePopupDelay } from '../constants';
import moviesHandler from '../MoviesHandler';

function useUser() {
  const [formError, setFormError] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState(
    moviesHandler.getToken() ? { isLogged: true } : { isLogged: false },
  );
  const [isProfilePopupMessageOpen, setIsProfilePopupMessageOpen] = React.useState(false);

  const history = useHistory();

  const register = ({ name, email, password }) => {
    setFormError({ ...formError, registerForm: false });
    mainApi
      .register(name, email, password)
      .then(() => login({ email, password }))
      .then(() => setCurrentUser({ name, email, isLogged: true }))
      .catch((e) => {
        setFormError({ ...formError, registerForm: true });
      });
  };

  const login = ({ email, password }) => {
    setFormError({ ...formError, loginForm: false });
    mainApi
      .login(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
      })
      .then(() => auth())
      .then(() => history.push('/movies'))
      .catch((e) => {
        setFormError({ ...formError, loginForm: true });
      });
  };

  const auth = async () => {
    const token = localStorage.getItem('jwt');
    if (token) {
      await mainApi
        .auth(token)
        .then((res) => {
          setCurrentUser({ ...res.data, isLogged: true });
        })
        .catch((e) => console.log(e));
    }
  };

  const logout = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('savedMovies');
    setCurrentUser({});
    history.push('/');
  };

  const edit = ({ name, email }) => {
    setFormError({ ...formError, profileForm: false });
    const token = localStorage.getItem('jwt');
    mainApi
      .editProfile(token, { name, email })
      .then((res) => {
        setIsProfilePopupMessageOpen(true);
        setCurrentUser({ ...res.data, isLogged: true });
        setTimeout(() => setIsProfilePopupMessageOpen(false), messagePopupDelay);
      })
      .catch((e) => {
        console.log(e);
        setFormError({ ...formError, profileForm: true });
      });
  };

  return {
    register,
    login,
    auth,
    currentUser,
    formError,
    logout,
    edit,
    isProfilePopupMessageOpen,
  };
}

export default useUser;
