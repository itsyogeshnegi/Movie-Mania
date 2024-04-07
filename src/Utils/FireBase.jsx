// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR9UMi7Ei-EVsltQ4Wu526EVH7QgjPvPc",
  authDomain: "watch-it-d12eb.firebaseapp.com",
  projectId: "watch-it-d12eb",
  storageBucket: "watch-it-d12eb.appspot.com",
  messagingSenderId: "547329154313",
  appId: "1:547329154313:web:a78cc525b14e22f68747d8",
  measurementId: "G-38K6P30BCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);