// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBr6D17jCYS1tmsFA793Pc9zpc_kqdCJKY",

  authDomain: "ktj-webathon.firebaseapp.com",

  projectId: "ktj-webathon",

  storageBucket: "ktj-webathon.appspot.com",

  messagingSenderId: "352957939424",

  appId: "1:352957939424:web:8ca6358e30908c8c559a85",

  measurementId: "G-4HG6Q27E14"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;


