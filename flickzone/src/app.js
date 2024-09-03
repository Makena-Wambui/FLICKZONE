import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from './pages';
import * as ROUTES from './constants/routes';
import { useAuthListener } from './hooks';

export function App() {
   const { user } = useAuthListener();  // Simulate being logged out
  //const user = {}; // Replace with your user authentication logic

  return (
    <Router>
      <Routes>
        <Route
          path={ROUTES.SIGN_IN}
          element={!user ? <SignIn /> : <Navigate to={ROUTES.BROWSE} />}
        />
        <Route
          path={ROUTES.SIGN_UP}
          element={!user ? <SignUp /> : <Navigate to={ROUTES.BROWSE} />}
        />
        <Route
          path={ROUTES.BROWSE}
          element={user ? <Browse /> : <Navigate to={ROUTES.SIGN_IN} />}
        />
        <Route
          path={ROUTES.HOME}
          element={!user ? <Home /> : <Navigate to={ROUTES.BROWSE} />}
        />
      </Routes>
    </Router>
  );
}

