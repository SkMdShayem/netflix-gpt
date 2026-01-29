// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHb218FnbZisLbn9YotGhMAEvaVrwc26s",
  authDomain: "netflixgpt-63f89.firebaseapp.com",
  projectId: "netflixgpt-63f89",
  storageBucket: "netflixgpt-63f89.firebasestorage.app",
  messagingSenderId: "265853848651",
  appId: "1:265853848651:web:b0a6dd79c71bcba736d1ce",
  measurementId: "G-PMESLKS6LK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();