import React from 'react';
import { render } from 'react-dom';
import App from './app';
import 'normalize.css';
import { GlobalStyles } from './global-styles';
import { app, db, auth } from './lib/firebase.prod'; // Importing firebase, db, and auth if needed
import { FirebaseContext } from './context/firebase';

// Pass the firebase, db, or auth objects to your App or other components if necessary
render(
  <>
    <FirebaseContext.Provider value={{ app, auth }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);

