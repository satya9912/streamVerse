// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvIZARh0dJa3l1pHQZ-J_XVn382uB40Io",
  authDomain: "streamverse-3e592.firebaseapp.com",
  projectId: "streamverse-3e592",
  storageBucket: "streamverse-3e592.firebasestorage.app",
  messagingSenderId: "895222802193",
  appId: "1:895222802193:web:6500843b9633b3e648ceb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();