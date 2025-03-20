// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtftgsy6j9G8FnfxmiYMOGFFmiiWHi0Ao",
  authDomain: "authproject-8fac1.firebaseapp.com",
  projectId: "authproject-8fac1",
  storageBucket: "authproject-8fac1.firebasestorage.app",
  messagingSenderId: "556551919903",
  appId: "1:556551919903:web:daa62d7e13fd1ad70ff82a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const provider = new GoogleAuthProvider()

export { auth, db, provider }