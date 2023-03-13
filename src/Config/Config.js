import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBxsR23CUC-Bjf_yQM6T6siAzZeN8Wciik",
  authDomain: "poliklinikut-b4fbf.firebaseapp.com",
  databaseURL: "https://poliklinikut-b4fbf-default-rtdb.firebaseio.com",
  projectId: "poliklinikut-b4fbf",
  storageBucket: "poliklinikut-b4fbf.appspot.com",
  messagingSenderId: "532359249005",
  appId: "1:532359249005:web:fe6b77a72cd8b5ec3e9364",
  measurementId: "G-G6N0PZT3Y2"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage }