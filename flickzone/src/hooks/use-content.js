// src/hooks/useContent.js
import { useEffect, useState, useContext } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { FirebaseContext } from '../context/firebase';

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firestore } = useContext(FirebaseContext);
  const [loading, setLoading] = useState(true);

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

