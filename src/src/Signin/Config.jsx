// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBhroum0pkKEQ8XILq4_nSEvCZumAMEQ-A",
  authDomain: "tele-medicine-72535.firebaseapp.com",
  projectId: "tele-medicine-72535",
  storageBucket: "tele-medicine-72535.appspot.com",
  messagingSenderId: "180403737928",
  appId: "1:180403737928:web:a7cba05859a52bc8b70f7d",
  measurementId: "G-W0WNBS48BG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};