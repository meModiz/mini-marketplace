// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLFftRtlv2A_xCFZbX3FVLMZK-o8yxCdk",
  authDomain: "mini-marketplace-a9780.firebaseapp.com",
  projectId: "mini-marketplace-a9780",
  storageBucket: "mini-marketplace-a9780.firebasestorage.app",
  messagingSenderId: "958765830003",
  appId: "1:958765830003:web:fdb8180fddb5e944417f06",
  measurementId: "G-N6DS5QBT8Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

const auth = getAuth(app);

export { app, db, storage, auth };
