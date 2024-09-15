// src/hooks/useContent.js
import { useEffect, useState, useContext } from 'react';

// Import the collection and getDocs functions. They are used to query the Firestore database.
import { collection, getDocs } from 'firebase/firestore';
import { FirebaseContext } from '../context/firebase';

// The useContent hook is used to query the Firestore database for content.
export default function useContent(target) {
  // content is a state variable that stores the content.
  const [content, setContent] = useState([]);
  // firestore is the Firestore instance.
  const { firestore } = useContext(FirebaseContext);
  // loading is a state variable that stores the loading state.
  const [loading, setLoading] = useState(true);

  // The useEffect hook is used to query the Firestore database for content.
  // It uses the collection and getDocs functions to query the Firestore database.
  // The content is stored in the content state variable.
  // The loading state is set to false when the content is loaded.
  // If there is an error, the error is logged to the console and the loading state is set to false.
  // If the Firestore instance is not correctly initialized or not available, an error is logged to the console.
  // The listener is returned from the useEffect hook.
  useEffect(() => {
    if (firestore) {
      // Use the modular Firestore functions
      const collectionRef = collection(firestore, target);
      getDocs(collectionRef)
        .then((snapshot) => {
          const allContent = snapshot.docs.map((doc) => ({
            ...doc.data(),
            docId: doc.id,
          }));
          setContent(allContent);
	  setLoading(false);
        })
        .catch((error) => {
          console.log(error.message);
	  setLoading(false);
        });
    } else {
      console.error('Firestore instance is not correctly initialized or not available.');
      setLoading(false);
    }
  }, [firestore, target]);

  return { [target]: content };
}

