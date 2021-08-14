import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
const user = {
  name: 'Константин',
  email: 'brovan@yandex.ru',
};
function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Header place="landin" />
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
          <Profile user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
