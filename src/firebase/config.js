import { firebase } from '@firebase/app'
import '@firebase/auth'
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
   apiKey: "AIzaSyC7kgmnqEWQ0KnJZaDlch5gaTekEMZ0ko8",
   authDomain: "reyhan-sketches.firebaseapp.com",
   projectId: "reyhan-sketches",
   storageBucket: "reyhan-sketches.appspot.com",
   messagingSenderId: "858192127606",
   appId: "1:858192127606:web:d5f039880970700407e157"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 const projectStorage = firebase.storage();
 const projectFirestore = firebase.firestore();
 const timestamp = firebase.firestore.FieldValue.serverTimestamp; 


 export {projectFirestore, projectStorage, timestamp};