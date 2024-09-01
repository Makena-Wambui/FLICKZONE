// src/lib/firebase.prod.js

// Firebase v9 modular imports
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { seedDatabase } from '../seed';

// Firebase configuration
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
// seedDatabase(db); run only once

export { app, db, auth };

