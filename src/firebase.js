import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAn7JgUKokhLo_trAfpkvp83PvnbhZLjoc",
    authDomain: "pori-metabus.firebaseapp.com",
    projectId: "pori-metabus",
    storageBucket: "pori-metabus.appspot.com",
    messagingSenderId: "352071275513",
    appId: "1:352071275513:web:573e99eef3039a2a26a328",
  })
  .auth();

export const db = firebase.database();
