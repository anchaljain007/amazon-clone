import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRZttMCSjjyVfS2-flq5rUQ6G0cPeX7TE",
  authDomain: "clone-3bd69.firebaseapp.com",
  projectId: "clone-3bd69",
  storageBucket: "clone-3bd69.appspot.com",
  messagingSenderId: "389262386171",
  appId: "1:389262386171:web:4068cf7b66ed0ef029615e",
  measurementId: "G-H9PEL1EF65",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
