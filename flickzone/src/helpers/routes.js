import React from 'react';
import { Route, Navigate } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      element={
        !user ? children : <Navigate to={loggedInPath} />
      }
    />
  );
}

// protects the browse page
export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      element={
        user ? children : <Navigate to="/signin" />
      }
    />
  );
}

