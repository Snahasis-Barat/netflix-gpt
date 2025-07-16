// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU44dZNCUXw7CjkZO9T3paMuODjaGShh8",
  authDomain: "netflixgpt-40e45.firebaseapp.com",
  projectId: "netflixgpt-40e45",
  storageBucket: "netflixgpt-40e45.firebasestorage.app",
  messagingSenderId: "726709101298",
  appId: "1:726709101298:web:c5d292946fe45c4f13266b",
  measurementId: "G-GPRFBX1HXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();