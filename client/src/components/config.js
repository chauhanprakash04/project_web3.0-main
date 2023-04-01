// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB10kYs2dEIK-Ov7_IjIUF2jq8TJ6An0js",
  authDomain: "web3krypt.firebaseapp.com",
  projectId: "web3krypt",
  storageBucket: "web3krypt.appspot.com",
  messagingSenderId: "915133897001",
  appId: "1:915133897001:web:c3b617ba1f1f9ee304bf38",
  measurementId: "G-DJKMFE7H51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const provider = new GoogleAuthProvider();

export {auth, provider};