import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDjXEeIaelyrtvg7RixQGwOeDqyCI3M4t0",
  authDomain: "clone-f1573.firebaseapp.com",
  databaseURL: "https://clone-f1573.firebaseio.com",
  projectId: "clone-f1573",
  storageBucket: "clone-f1573.appspot.com",
  messagingSenderId: "513621704353",
  appId: "1:513621704353:web:f2e025cb2b413919cffae0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
