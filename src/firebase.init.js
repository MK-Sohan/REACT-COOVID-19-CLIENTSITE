// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6V-3M95gL5NSHCD9PWLQu_h7dNQvTtcw",
  authDomain: "react-covid-19-project.firebaseapp.com",
  projectId: "react-covid-19-project",
  storageBucket: "react-covid-19-project.appspot.com",
  messagingSenderId: "504497808586",
  appId: "1:504497808586:web:7aac00410ee95fc7df8033",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
