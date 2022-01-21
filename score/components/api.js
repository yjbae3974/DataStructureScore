// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDAk2XFKrq6j0HPLsVGeliC3RPXtI_qG-g",
  authDomain: "datastructure-94050.firebaseapp.com",
  projectId: "datastructure-94050",
  storageBucket: "datastructure-94050.appspot.com",
  messagingSenderId: "401703477369",
  appId: "1:401703477369:web:4857ef38ef21b2306b34a8",
  measurementId: "G-FMJ9E8BH61"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore();