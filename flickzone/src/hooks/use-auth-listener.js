import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
// The onAuthStateChanged function is used to listen for changes to the user's sign-in state.
import { onAuthStateChanged } from 'firebase/auth';

// The useAuthListener hook is used to listen for changes to the user's sign-in state.
export default function useAuthListener() {
  // user is a state variable that stores the user.
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
  // auth is the Firebase authentication object.
  const { auth } = useContext(FirebaseContext);

  // The useEffect hook is used to listen for changes to the user's sign-in state.
  // It uses the onAuthStateChanged function to listen for changes to the user's sign-in state.
  // checks if the user is signed in and sets the user state variable
  // if the user is signed in, it stores the user in local storage
  // if the user is not signed in, it removes the user from local storage 
  // and sets the user state variable to null.
  // The listener is returned from the useEffect hook.
  useEffect(() => {
    const listener = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return () => listener();
  }, [auth]);

  return { user };
}

