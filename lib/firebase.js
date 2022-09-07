import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

//setup to connect to the webapp in the firebase console
const firebaseConfig = {
    apiKey: "AIzaSyBFskMOpyfQ9lw99n1ykBumNIXBcIn_Xog",
    authDomain: "next-c3ddf.firebaseapp.com",
    projectId: "next-c3ddf",
    storageBucket: "next-c3ddf.appspot.com",
    messagingSenderId: "640711390995",
    appId: "1:640711390995:web:4ca665d01bfa57a6c3cce6",
    measurementId: "G-CS6Q7KQS21"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }

  //exporting imported firebase functions globally 
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const storage = firebase.storage();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();