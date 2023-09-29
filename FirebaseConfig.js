// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
export const firebaseConfig = {
  apiKey: "AIzaSyA410rxffNkXZj_phTLEXVGkompWOZM-_E",
  authDomain: "saveright-b6c31.firebaseapp.com",
  projectId: "saveright-b6c31",
  storageBucket: "saveright-b6c31.appspot.com",
  messagingSenderId: "439828671232",
  appId: "1:439828671232:web:ebde972f006be025e521e5",
};
initializeApp(firebaseConfig);
export const db = getFirestore();
export const bigGoalReference = collection(db, "BigGoal");
export const smallGoalReference = collection(db, "SmallGoal");
