// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL2wRax4EUfj_SAuHSAlKLiyV5I72rsDk",
  authDomain: "netflixgpt-14a6e.firebaseapp.com",
  projectId: "netflixgpt-14a6e",
  storageBucket: "netflixgpt-14a6e.appspot.com",
  messagingSenderId: "240968605535",
  appId: "1:240968605535:web:bb07c7279315c0c2a4a0ea",
  measurementId: "G-D35P9ND2GF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
