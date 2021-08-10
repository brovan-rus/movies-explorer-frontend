import React from 'react';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';

function Main() {
  return (
    <main className="landing">
      <Promo />
      <NavTab />
      <AboutProject />
    </main>
  );
}

export default Main;
