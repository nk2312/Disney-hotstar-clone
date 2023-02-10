

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR9hHcZ0WiOEN8-k561nFNK6XN7hFFatU",
  authDomain: "disney-hotstar-clone-b52d2.firebaseapp.com",
  databaseURL: "https://disney-hotstar-clone-b52d2-default-rtdb.firebaseio.com",
  projectId: "disney-hotstar-clone-b52d2",
  storageBucket: "disney-hotstar-clone-b52d2.appspot.com",
  messagingSenderId: "846704695969",
  appId: "1:846704695969:web:9d76cd38c318b8b47feee0"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();


// async function getMovies(db){
//     const cols=collection(db,'movies');
//     const snapshot=await getDocs(cols);
//     const list=snapshot.docs.map(doc=>doc.data());
//     return list

// }


export default db;