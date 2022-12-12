// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzrE41ohHzt74Pj18Y-855xDl-_QO2Kkw",
  authDomain: "isblog-5f5ac.firebaseapp.com",
  projectId: "isblog-5f5ac",
  storageBucket: "isblog-5f5ac.appspot.com",
  messagingSenderId: "383070410348",
  appId: "1:383070410348:web:74c8b6e0d7ef12eb05aa49",
  measurementId: "G-QC9L9VB74F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
const db=getFirestore(app);
export {auth, provider, db} ;