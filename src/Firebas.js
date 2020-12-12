import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBnMkI1Z46NxGJWGwL8zYKuTnrP0STlOpI",
  authDomain: "twitter-4c4a1.firebaseapp.com",
  databaseURL: "https://twitter-4c4a1.firebaseio.com",
  projectId: "twitter-4c4a1",
  storageBucket: "twitter-4c4a1.appspot.com",
  messagingSenderId: "621928262991",
  appId: "1:621928262991:web:b37f86e1fdaae68d0aa93a",
  measurementId: "G-RSYFED1YPZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
