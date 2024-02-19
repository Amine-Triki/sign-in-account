// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUaklTS7ag6ac4IlznTV3BA0jUUHzHKRs",
  authDomain: "sign-in-account-2de47.firebaseapp.com",
  projectId: "sign-in-account-2de47",
  storageBucket: "sign-in-account-2de47.appspot.com",
  messagingSenderId: "498073753911",
  appId: "1:498073753911:web:e8150fa164d26cd5d9a2b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);