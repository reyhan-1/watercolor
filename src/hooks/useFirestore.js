import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
   const [docs, setDocs] = useState([]);

   useEffect(() => { //active listener with db
      const unsub = projectFirestore.collection(collection)
         .orderBy('createdAt', 'desc')
         .onSnapshot((snap) => {
            let documents = [];
            snap.forEach(doc => { //cycle throyg in db 
               documents.push({...doc.data(), id: doc.id})
            });
            setDocs(documents);
         });
         
      return () => unsub(); //unsubcscirbe from the collection when we dont use it 

   }, [collection])

   return { docs };
}

export default useFirestore;