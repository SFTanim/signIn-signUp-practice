// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfVZgli8Dga_R67fqELWLsCoBLfJ-vU_c",
  authDomain: "signin-signup-practice.firebaseapp.com",
  projectId: "signin-signup-practice",
  storageBucket: "signin-signup-practice.appspot.com",
  messagingSenderId: "451696074872",
  appId: "1:451696074872:web:0888e661d897c264ea0d8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;