import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyClaaJ-SMlZeIN9QhYrJwNneEC3o7SKhVg",
  authDomain: "linkedin-clone-50608.firebaseapp.com",
  projectId: "linkedin-clone-50608",
  storageBucket: "linkedin-clone-50608.appspot.com",
  messagingSenderId: "855525016264",
  appId: "1:855525016264:web:ad79d31a7302aba8b95bfd",
  measurementId: "G-YQVX8JWBSQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
