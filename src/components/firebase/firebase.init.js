// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo09iXviNgb9BkzopCLlBUkH_TRb3cfDw",
  authDomain: "simple-firebase-auth-3af7a.firebaseapp.com",
  projectId: "simple-firebase-auth-3af7a",
  storageBucket: "simple-firebase-auth-3af7a.firebasestorage.app",
  messagingSenderId: "387367378945",
  appId: "1:387367378945:web:9cec96d30c658cfb8a6000"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app); 