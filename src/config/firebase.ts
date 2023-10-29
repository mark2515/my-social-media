// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUNMjL9PAAkpvEC9K975vXDDq7MI9qeo0",
  authDomain: "my-social-media-9cd2c.firebaseapp.com",
  projectId: "my-social-media-9cd2c",
  storageBucket: "my-social-media-9cd2c.appspot.com",
  messagingSenderId: "724979027721",
  appId: "1:724979027721:web:1831a8d55db6a67ad9cdd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();