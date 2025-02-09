// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUR CONFIG",
  authDomain: "YOUR CONFIG",
  projectId: "YOUR CONFIG",
  storageBucket: "YOUR CONFIG",
  messagingSenderId: "YOUR CONFIG",
  appId: "YOUR CONFIG",
  measurementId: "YOUR CONFIG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { app, db };
