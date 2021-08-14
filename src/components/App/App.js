import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
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
          <Header place="movies" />
          <SavedMovies />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
