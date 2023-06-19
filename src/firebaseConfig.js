// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQPpsA-8omJ_liNFEZWIwmIigWFM6IyJ8",
  authDomain: "linked-clone-new.firebaseapp.com",
  projectId: "linked-clone-new",
  storageBucket: "linked-clone-new.appspot.com",
  messagingSenderId: "987764930741",
  appId: "1:987764930741:web:903067cd2a35e1b060e6fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, auth, firestore, storage };