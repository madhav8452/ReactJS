// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAppeluHv9khTyiQWM9dKSdta-ME9FlvfY",
  authDomain: "project-tasklist-df5c9.firebaseapp.com",
  projectId: "project-tasklist-df5c9",
  storageBucket: "project-tasklist-df5c9.firebasestorage.app",
  messagingSenderId: "326332872455",
  appId: "1:326332872455:web:aeaddc8cebbf5fe31577a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)