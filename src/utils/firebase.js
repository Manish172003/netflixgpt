// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOAlb10y_bcp40LasNKTacSTIfO61n6vQ",
  authDomain: "netflixgpt-ebb5f.firebaseapp.com",
  projectId: "netflixgpt-ebb5f",
  storageBucket: "netflixgpt-ebb5f.appspot.com",
  messagingSenderId: "837763644670",
  appId: "1:837763644670:web:86f4bfdbda8b9da206f9af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();