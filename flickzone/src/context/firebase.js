// src/context/firebase.js
import { createContext } from 'react';
import { app, auth } from '../lib/firebase.prod';

export const FirebaseContext = createContext(null);

export function FirebaseProvider({ children }) {
  return (
    <FirebaseContext.Provider value={{ app, auth }}>
      {children}
    </FirebaseContext.Provider>
  );
}
