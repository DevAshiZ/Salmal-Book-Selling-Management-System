// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "salmal-bookstore.firebaseapp.com",
  projectId: "salmal-bookstore",
  storageBucket: "salmal-bookstore.appspot.com",
  messagingSenderId: "724785262850",
  appId: "1:724785262850:web:486ed86907477105ea921b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
