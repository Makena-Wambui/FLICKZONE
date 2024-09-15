import React from 'react'; // Importing React library to use JSX syntax
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Importing necessary components from react-router-dom for routing
import { Home, Browse, SignIn, SignUp } from './pages'; // Importing page components for different routes
import * as ROUTES from './constants/routes'; // Importing route constants for cleaner code
import { useAuthListener } from './hooks'; // Importing custom hook to listen for authentication state

export function App() {
  const { user } = useAuthListener(); // Using the custom hook to get the current user state
  return (
    <Router> {/* Wrapping the application in Router to enable routing */}
      <Routes> {/* Defining the routes for the application */}
        <Route
          path={ROUTES.SIGN_IN} // Route for the Sign In page
          element={!user ? <SignIn /> : <Navigate to={ROUTES.BROWSE} />} // If no user, show SignIn; otherwise, redirect to Browse
        />
        <Route
          path={ROUTES.SIGN_UP} // Route for the Sign Up page
          element={!user ? <SignUp /> : <Navigate to={ROUTES.BROWSE} />} // If no user, show SignUp; otherwise, redirect to Browse
        />
        <Route
          path={ROUTES.BROWSE} // Route for the Browse page
          element={user ? <Browse /> : <Navigate to={ROUTES.SIGN_IN} />} // If user exists, show Browse; otherwise, redirect to SignIn
        />
        <Route
          path={ROUTES.HOME} // Route for the Home page
          element={!user ? <Home /> : <Navigate to={ROUTES.BROWSE} />} // If no user, show Home; otherwise, redirect to Browse
        />
      </Routes>
    </Router>
  );
}

