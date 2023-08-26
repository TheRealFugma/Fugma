// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPTGiegm6Il0JorY1TR9akyE4uwptUhY8",
  authDomain: "the-real-fugma.firebaseapp.com",
  projectId: "the-real-fugma",
  storageBucket: "the-real-fugma.appspot.com",
  messagingSenderId: "307765757393",
  appId: "1:307765757393:web:15318cfc96d346e00b8cf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);