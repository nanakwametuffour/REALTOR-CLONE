// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realtor-clone-6b090.firebaseapp.com",
  projectId: "realtor-clone-6b090",
  storageBucket: "realtor-clone-6b090.appspot.com",
  messagingSenderId: "45700056775",
  appId: "1:45700056775:web:0e475244ff59f92fd660e2",
};

// Initialize Firebase
  initializeApp(firebaseConfig);
  export const db = getFirestore()
