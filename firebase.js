import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsHXN42T08ub1HbY9POfxCpXDhKROYBXE",
  authDomain: "booking-project-14dd5.firebaseapp.com",
  projectId: "booking-project-14dd5",
  storageBucket: "booking-project-14dd5.appspot.com",
  messagingSenderId: "345613007639",
  appId: "1:345613007639:web:1e0e3e864619bfc77ed552"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};