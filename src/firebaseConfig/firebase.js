// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD0O_aEoCj_EfLF_0DiHPWMB9AcziOoCw",
  authDomain: "reactinformatica39535.firebaseapp.com",
  projectId: "reactinformatica39535",
  storageBucket: "reactinformatica39535.appspot.com",
  messagingSenderId: "964072793865",
  appId: "1:964072793865:web:8b47861d616b6776ee15d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)