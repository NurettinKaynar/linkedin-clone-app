import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDDgIWulQTogzZzlLPwnYvGqI80LzHHM94",
  authDomain: "linkedin-clone-6ea79.firebaseapp.com",
  projectId: "linkedin-clone-6ea79",
  storageBucket: "linkedin-clone-6ea79.appspot.com",
  messagingSenderId: "1098579913710",
  appId: "1:1098579913710:web:e226bf59e0e5c06e653cff",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
