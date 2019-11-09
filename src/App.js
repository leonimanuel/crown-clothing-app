import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';
import HomePage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import Header from "./components/header/header.component"; 
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

//we want to store the state of our user in our app. whichever way they log in, we want to
//store that in app state so that we can pass it to components that need it. 

class App extends React.Component { //go with class component so you can store state
	constructor() {
		super();

		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth = null //

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { //always listening. open subscription
			if (userAuth) { //check if they signed in/are signed in
				const userRef = await createUserProfileDocument (userAuth); //if they did (if there is a userAuth), we get back the userRef from our createUserProfileDocument method from userAuth object being passed in.
					//if there is is a doc at the userRef, we get it back here. If not, one is generated (through createUserProfileDocument) in that place,
					//and then we'll get back the userRef

				userRef.onSnapshot(snapShot => { //??89 then we're gonna listen to this userRef for any changes to that data, as well as get back the first state of that data. 
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data() //new object that has all the properties of our snapshot that we want
						}
					}, () => { //this way, setState only calls the console.log after state has been set. Remember, setState is asynchronous, so this way we guarantee console.log happens only after state has changed.
							console.log(this.state)
					}
					);
				});
				
			}

			else {
				this.setState({currentUser: userAuth}) //if the user ever logs out (^auth state has changed so that userAuth is false), set currentUser to null.
			}	
			// this.setState({ currentUser: user});

			//user authenticated session persistence. Firebase knows the last person to sign in.
			//we don't actually want our user to have to re-signin whenever they e.g. close the app and come back
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth(); //tells it to stop listening for changes.
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser}/> {/*by being outside the switch, header is always displayed, despite route*/}
				<Switch> {/*The moment switch sees something match the path (as long as a route gets rendered) it renders only that. Useful if we don't want to accidentally render multiple components*/}
					{/* when path is at the base url, open the homepage. "exact" means the path has to be exactly '/'*/}
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/signin' component={SignInAndSignUpPage} />
				</Switch>
			</div>
		);
	}

	
}

export default App;
