import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHZVVrAmekCvm1jwA27CWqOZhq0SzG_aI",
  authDomain: "project-conquer-f1663.firebaseapp.com",
  projectId: "project-conquer-f1663",
  storageBucket: "project-conquer-f1663.appspot.com",
  messagingSenderId: "639264098004",
  appId: "1:639264098004:web:844a51b75db3d5003c5d41",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const db = firebase.firestore();
export const auth = firebase.auth();
