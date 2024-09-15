import { createContext } from 'react';

// app is the Firebase app object.
// auth is the Firebase authentication object.
// db is the Firebase Firestore object.
import { app, auth, db } from '../lib/firebase.prod';

// The FirebaseContext is a React context that provides the Firebase instance to the entire application.
export const FirebaseContext = createContext(null);

// The FirebaseProvider component is a provider that provides the Firebase instance to the entire application.
// It uses the FirebaseContext.Provider component to provide the Firebase instance.
export function FirebaseProvider({ children }) {
  return (
    <FirebaseContext.Provider value={{ app, auth, firestore: db }}>
      {children}
    </FirebaseContext.Provider>
  );
}
