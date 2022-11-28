// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  serverTimestamp,
  doc,
  orderBy,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJCGj_7ev2PdLoHmbY4y0KnodX6Wr0v38",
  authDomain: "recoded-jobie.firebaseapp.com",
  projectId: "recoded-jobie",
  storageBucket: "recoded-jobie.appspot.com",
  messagingSenderId: "347602460457",
  appId: "1:347602460457:web:ea8867354e657f8b2be138",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const google = new GoogleAuthProvider();
const auth = getAuth();

export {
  signInWithPopup,
  google,
  db,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  serverTimestamp,
  doc,
  auth,
  orderBy,
  limit,
  onSnapshot,
  query,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  where
};
