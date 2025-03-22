// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBVWDjqsbq4d2XjxykGymt0I68gMq9pfI",
  authDomain: "hotelproject-57fa3.firebaseapp.com",
  projectId: "hotelproject-57fa3",
  storageBucket: "hotelproject-57fa3.firebasestorage.app",
  messagingSenderId: "651289031187",
  appId: "1:651289031187:web:c9aeef3e14ada53ade45e6",
  measurementId: "G-HKPHL39TWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }