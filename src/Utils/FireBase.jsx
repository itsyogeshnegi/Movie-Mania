import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBR9UMi7Ei-EVsltQ4Wu526EVH7QgjPvPc",
  authDomain: "watch-it-d12eb.firebaseapp.com",
  projectId: "watch-it-d12eb",
  storageBucket: "watch-it-d12eb.appspot.com",
  messagingSenderId: "547329154313",
  appId: "1:547329154313:web:a78cc525b14e22f68747d8",
  measurementId: "G-38K6P30BCJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
