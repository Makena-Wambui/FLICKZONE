import React from 'react';
import { render } from 'react-dom';
import { App } from './app';
import 'normalize.css';
import { GlobalStyles } from './global-styles';
import { FirebaseProvider } from './context/firebase'; // Import FirebaseProvider

// Import firebase objects (app, auth, db) from your firebase config
import { app, db, auth } from './lib/firebase.prod';

// Render the application
render(
  <FirebaseProvider value={{ app, auth, firestore: db }}> {/* Pass the correct value prop */}
    <GlobalStyles />
    <App />
  </FirebaseProvider>,
  document.getElementById('root')
);

