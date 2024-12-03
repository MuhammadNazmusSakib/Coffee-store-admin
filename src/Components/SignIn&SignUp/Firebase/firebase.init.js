// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSFiHNPAwMNTHv9aMC9ZRxoOTErNfrgK8",
  authDomain: "coffee-store-client-24b21.firebaseapp.com",
  projectId: "coffee-store-client-24b21",
  storageBucket: "coffee-store-client-24b21.firebasestorage.app",
  messagingSenderId: "339513298913",
  appId: "1:339513298913:web:d656c0b1f67c035efc0ca0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);