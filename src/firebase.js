// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import firestore from "firebase/firestore";
import { firebase } from "@firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvLhqn-YaHVR2EyEzvjHXp2sk9IKvsZIA",
  authDomain: "ig-reels-2a03f.firebaseapp.com",
  projectId: "ig-reels-2a03f",
  storageBucket: "ig-reels-2a03f.appspot.com",
  messagingSenderId: "894774862205",
  appId: "1:894774862205:web:9dede2dd30d0126b13ac14",
  measurementId: "G-KBN1YE1E9N",
};

const firebaseApp = initializeApp(firebaseConfig); //Initializing the app.

export const db= firebaseApp.firestore; //firebaseApp ,we initialized and then access the database (which is firestore) and put it in db.

export default db;
// we are exporting this db so that we can use it in different component of the app.

