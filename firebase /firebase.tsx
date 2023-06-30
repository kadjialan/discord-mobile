// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgcRC71byzRWaTdOB5YqhrKWjGhfx2Ar0",
  authDomain: "discord-42bac.firebaseapp.com",
  projectId: "discord-42bac",
  storageBucket: "discord-42bac.appspot.com",
  messagingSenderId: "534712355141",
  appId: "1:534712355141:web:8f6d39c646c1786da9562c",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
