import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// checks if the user is logged in and redirects to the browse page 
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

// ProtectedRoute checks if the user is not logged in and redirects to the signin page
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
