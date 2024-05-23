// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIYWjeO21gUYkbr7GNic_wO-adnKPUBn8",
  authDomain: "netflixgpt-c91a4.firebaseapp.com",
  projectId: "netflixgpt-c91a4",
  storageBucket: "netflixgpt-c91a4.appspot.com",
  messagingSenderId: "646496917628",
  appId: "1:646496917628:web:1fef12223f36e9cd16d1f9",
  measurementId: "G-RVFNEE5DXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();