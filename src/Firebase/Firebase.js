import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyBE0W5kLRCZN6vHS4L2Jn-fDc65m2q8zP8",
  authDomain: "instadev-b8f56.firebaseapp.com",
  projectId: "instadev-b8f56",
  storageBucket: "instadev-b8f56.appspot.com",
  messagingSenderId: "1034928475214",
  appId: "1:1034928475214:web:028f8cf2ee10de75a3471f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };
