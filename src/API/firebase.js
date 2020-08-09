import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMd0sZn0R66H27MKyHjUorytdchSU2LFQ",
  authDomain: "twitter-clone-4b2ae.firebaseapp.com",
  databaseURL: "https://twitter-clone-4b2ae.firebaseio.com",
  projectId: "twitter-clone-4b2ae",
  storageBucket: "twitter-clone-4b2ae.appspot.com",
  messagingSenderId: "970828186872",
  appId: "1:970828186872:web:7f27ca96e2ab4ba479270d",
  measurementId: "G-9TVBSD3F5D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const storage = firebaseApp.storage();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp();
