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

//take user auth object and export to database
export const createUserProfileDocument = async (userAuth, additionalData) => { //async?
	//only save to database if we get valid user object	
	if (!userAuth) return;//aka if userAuth = null, cancel
	
	//so this only applies if userAuth has an auth object
	const userRef = firestore.doc(`users/${userAuth.uid}`); //from firebase authentication

	//getting the snapShot
	const snapShot = await userRef.get(); //using this snapshot, we'll figure out whether there's data here. Whether or not we've already stored the user we've authenticated. 

	// console.log(snapShot)

	if(!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date(); // ?? new JS object that tells us when this was invoked

		try {
			await userRef.set({ //set = create
				displayName,
				email,
				createdAt,
				...additionalData //??
			})
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}

	return userRef; //might need it for something later
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); //gives us access to this new GoogleAuthProvider class from authentication library
provider.setCustomParameters({prompt: "select_account"}); //we want to always trigger google popup whenever we use this google auth provider 
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; // in case we want the whole library.






