import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ loggedIn, path, children, ...props }) {
  return (
    <Route path={path}>
      {!loggedIn && <Redirect to="/" />}
      {children}
    </Route>
  );
}

export default ProtectedRoute;
