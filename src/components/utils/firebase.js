// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABBcMr6QHG1B7tMDLXwtbz4244qNrRfpc",
  authDomain: "netflix-gpt-53293.firebaseapp.com",
  projectId: "netflix-gpt-53293",
  storageBucket: "netflix-gpt-53293.firebasestorage.app",
  messagingSenderId: "514394247470",
  appId: "1:514394247470:web:542202995c6bb805dbeabf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);