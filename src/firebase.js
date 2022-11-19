// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJCGj_7ev2PdLoHmbY4y0KnodX6Wr0v38",
    authDomain: "recoded-jobie.firebaseapp.com",
    projectId: "recoded-jobie",
    storageBucket: "recoded-jobie.appspot.com",
    messagingSenderId: "347602460457",
    appId: "1:347602460457:web:ea8867354e657f8b2be138"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
const db = getFirestore(app);

export { db };