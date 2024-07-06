import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { getFirestore, collection, addDoc, getDoc, doc, setDoc, query, where, getDocs, deleteDoc, updateDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD13Di0Wam5h0SdyY_EiFrHSHRXqAvNmfc",
  authDomain: "kickmetrics.firebaseapp.com",
  projectId: "kickmetrics",
  storageBucket: "kickmetrics.appspot.com",
  messagingSenderId: "194033134361",
  appId: "1:194033134361:web:cbb64df79cd6c540b0b388",
  measurementId: "G-3GDRQB1D20"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, signOut, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, collection, addDoc, getDoc, doc, setDoc, query, where, getDocs, deleteDoc, updateDoc };