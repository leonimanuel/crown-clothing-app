import firebase from "firebase/app"; //pulling in firebase util. In this case we need auth and storage, so we'l import them indepenedently instead of importing all firebase. It'spretty big
import "firebase/firestore"; 
import "firebase/auth"

const config = {
  apiKey: "AIzaSyDI_WnRDKSkL0w0qC96lPvxMAulFcVqrZ0",
  authDomain: "crown-db-2de9c.firebaseapp.com",
  databaseURL: "https://crown-db-2de9c.firebaseio.com",
  projectId: "crown-db-2de9c",
  storageBucket: "crown-db-2de9c.appspot.com",
  messagingSenderId: "172071981162",
  appId: "1:172071981162:web:f6fea4ee14961872403a13",
  measurementId: "G-317W6EZM9Q"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); //gives us access to this new GoogleAuthProvider class from authentication library
provider.setCustomParameters({prompt: "select_account"}); //we want to always trigger google popup whenever we use this google auth provider 
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; // in case we want the whole library.