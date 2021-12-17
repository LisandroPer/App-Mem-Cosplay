// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCaPzVRnnxcTW8NwDpfzMloqPh4V8HEEs", //Es la key para acceder a la apy.
  authDomain: "mem-cosplay-app.firebaseapp.com",
  projectId: "mem-cosplay-app",
  storageBucket: "mem-cosplay-app.appspot.com",
  messagingSenderId: "914721153354",
  appId: "1:914721153354:web:bc8c944840d99b7a7121b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); //aca va la base de datos

export default db; //exporto la base.