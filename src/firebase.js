// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrAY27jmi8atpTy-JQ9UppbiurkJiBVYM",
  authDomain: "ocio-c17f0.firebaseapp.com",
  projectId: "ocio-c17f0",
  storageBucket: "ocio-c17f0.appspot.com",
  messagingSenderId: "1068756520469",
  appId: "1:1068756520469:web:c0ff670bbb910caba5481c",
  measurementId: "G-8V30ZT4J31",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
