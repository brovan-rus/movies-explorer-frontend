import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Movies from '../Movies/Movies';
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
        <Route exact path="/movies">
          <Header place="movies" />
          <Movies />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
