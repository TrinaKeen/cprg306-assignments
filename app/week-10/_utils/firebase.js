// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Auth
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7QwFSd7vzZmP2eTgrxhD0uxHW_9xaGFA",
  authDomain: "cprg306-assignments-3068b.firebaseapp.com",
  projectId: "cprg306-assignments-3068b",
  storageBucket: "cprg306-assignments-3068b.appspot.com",
  messagingSenderId: "1081491472010",
  appId: "1:1081491472010:web:5cb61140b361d6f93bf773",
  measurementId: "G-2NZDE5B9Y8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Auth and export it
export const auth = getAuth(app);

export default app;
