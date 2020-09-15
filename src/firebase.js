// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Adding the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrBvcZItGgHr3JKuHI4mqJvtQGYEqYldo",
  authDomain: "clone-2f0ee.firebaseapp.com",
  databaseURL: "https://clone-2f0ee.firebaseio.com",
  projectId: "clone-2f0ee",
  storageBucket: "clone-2f0ee.appspot.com",
  messagingSenderId: "675792898360",
  appId: "1:675792898360:web:4c460f85ec0a47c73599cd",
  measurementId: "G-EFRR2V4KF6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
