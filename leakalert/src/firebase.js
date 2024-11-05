// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBwYOnAtd7W-FRvJxe4MgL9SZKbW4QKrAs",
  authDomain: "leakalert-511c5.firebaseapp.com",
  projectId: "leakalert-511c5",
  storageBucket: "leakalert-511c5.appspot.com",
  messagingSenderId: "591665895819",
  appId: "1:591665895819:web:18abfa8ffabe3ef036b78e",
  measurementId: "G-FL8VG3P6GB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const googleLogin = document.getElementById("google")


export const auth= getAuth();
export const database= getFirestore(app);
export const resetPassword = sendPasswordResetEmail()
export default app;