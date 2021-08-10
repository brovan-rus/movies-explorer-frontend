import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Header place="landin" />
          <Main />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
