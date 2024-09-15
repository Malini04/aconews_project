// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBky8I4_kJrqV7tnGU5vMO0EswmT04rYW8",
  authDomain: "aconews-f07c0.firebaseapp.com",
  projectId: "aconews-f07c0",
  storageBucket: "aconews-f07c0.appspot.com",
  messagingSenderId: "187603970357",
  appId: "1:187603970357:web:f43568dc1cdb598627047c",
  measurementId: "G-CNHT1JD108"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { app, analytics };