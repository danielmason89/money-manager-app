import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsPdq5IKJOglZkLFq02inEhRD643nSJFk",
  authDomain: "money-manager-app-57be9.firebaseapp.com",
  projectId: "money-manager-app-57be9",
  storageBucket: "money-manager-app-57be9.appspot.com",
  messagingSenderId: "221448269814",
  appId: "1:221448269814:web:e8002287ddcf6a7268a1d7",
};

firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
