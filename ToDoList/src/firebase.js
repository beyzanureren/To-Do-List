// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoAfYu_7153z2nxgpNSgo6IR-7JmUDeVk",
  authDomain: "todolist-7d549.firebaseapp.com",
  projectId: "todolist-7d549",
  storageBucket: "todolist-7d549.appspot.com",
  messagingSenderId: "564517605509",
  appId: "1:564517605509:web:3a07c8a4b20ec5813cd9ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)