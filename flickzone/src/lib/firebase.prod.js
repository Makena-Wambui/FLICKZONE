// Firebase v9 modular imports
// The Firebase v9 modular imports are used to import the Firebase modules.
// initializeApp is used to initialize the Firebase app.
// getFirestore is used to get the Firestore instance.
// getAuth is used to get the Auth instance.
// seedDatabase is used to seed the database.
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { seedDatabase } from '../seed';
import 'firebase/firestore';

// Firebase configuration
// The Firebase configuration is used to configure the Firebase app.
// The configuration includes the API key, the auth domain, the project ID, the storage bucket, the messaging sender ID, the app ID, and the measurement ID. 
const firebaseConfig = {
  apiKey: "AIzaSyC6BuJQ_ndA8EJptosaiYuTZTmXBKCXoJg",
  authDomain: "flickzone-7597a.firebaseapp.com",
  projectId: "flickzone-7597a",
  storageBucket: "flickzone-7597a.appspot.com",
  messagingSenderId: "237568323824",
  appId: "1:237568323824:web:780b8a52e8723edacd5235",
  measurementId: "G-8DMMM0PNWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Get Firestore instance
const auth = getAuth(app);  // Get Auth instance

// Seed the database
// seedDatabase(db); //run only once

export { app, db, auth };

