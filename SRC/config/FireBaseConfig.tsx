// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATOqtVpWjoTol1gPwNdIARj7iWiK7YQg8",
  authDomain: "practicefinal-83bd5.firebaseapp.com",
  databaseURL: "https://practicefinal-83bd5-default-rtdb.firebaseio.com/",
  projectId: "practicefinal-83bd5",
  storageBucket: "practicefinal-83bd5.appspot.com",
  messagingSenderId: "1020068406118",
  appId: "1:1020068406118:web:953557a999c4a403641ea7"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const database1 = getDatabase(app);