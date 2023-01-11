import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDvLhqn-YaHVR2EyEzvjHXp2sk9IKvsZIA",
  authDomain: "ig-reels-2a03f.firebaseapp.com",
  projectId: "ig-reels-2a03f",
  storageBucket: "ig-reels-2a03f.appspot.com",
  messagingSenderId: "894774862205",
  appId: "1:894774862205:web:9dede2dd30d0126b13ac14",
  measurementId: "G-KBN1YE1E9N",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
