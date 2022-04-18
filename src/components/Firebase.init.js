// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}  from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAF9kq4R0CYjTXqlSZq7Rba0rfihQgNsI",
  authDomain: "gym-cloude.firebaseapp.com",
  projectId: "gym-cloude",
  storageBucket: "gym-cloude.appspot.com",
  messagingSenderId: "963474258158",
  appId: "1:963474258158:web:4524bbcc9f11559d295bff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;