import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import './App.css';
import HomePage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import Header from "./components/header/header.component"; 
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

//we want to store the state of our user in our app. whichever way they log in, we want to
//store that in app state so that we can pass it to components that need it. 

class App extends React.Component { //go with class component so you can store state
	// constructor() {
	// 	super();

	// 	this.state = {
	// 		currentUser: null
	// 	}
	// }

	unsubscribeFromAuth = null //

	componentDidMount() {
		const {setCurrentUser} = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { //always listening. open subscription
			if (userAuth) { //check if they signed in/are signed in
				const userRef = await createUserProfileDocument (userAuth); //if they did (if there is a userAuth), we get back the userRef from our createUserProfileDocument method from userAuth object being passed in.
					//if there is is a doc at the userRef, we get it back here. If not, one is generated (through createUserProfileDocument) in that place,
					//and then we'll get back the userRef

				userRef.onSnapshot(snapShot => { //??89 then we're gonna listen to this userRef for any changes to that data, as well as get back the first state of that data. 
					setCurrentUser ({
						id: snapShot.id,
						...snapShot.data() //new object that has all the properties of our snapshot that we want
					});
				});
			}

			else {
				// this.setState({currentUser: userAuth}) //if the user ever logs out (^auth state has changed so that userAuth is false), set currentUser to null.
				setCurrentUser(userAuth)
			}	
			// this.setState({ currentUser: user}); 

			//user authenticated session persistence. Firebase knows the last person to sign in.
			//we don't actually want our user to have to re-signin whenever they e.g. close the app and come back
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth(); //tells it to stop listening for changes.
	}

	render() { //JS invocation that determines what comp to return
		return (
			<div>
				<Header /> {/*by being outside the switch, header is always displayed, despite route*/}
				<Switch> {/*The moment switch sees something match the path (as long as a route gets rendered) it renders only that. Useful if we don't want to accidentally render multiple components*/}
					{/* when path is at the base url, open the homepage. "exact" means the path has to be exactly '/'*/}
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)} />
				</Switch>
			</div>
		);
	}
}

// export default App;
const mapStateToProps = ({ user }) => ({ //in this context, user will be the user reducer
	currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({ //will return an object where prop name will be wtvr prop we wanna pass in that dispatches wtvr action we're trying to pass, which in this case is setCurrentUser
	setCurrentUser: user => dispatch(setCurrentUser(user)) //dispatch says: wtvr object you're passing me is going to be an action object that I pass to every reducer. 
}) //now we can get rid of the app consrtuctor and the state objects it contains.

export default connect(mapStateToProps, mapDispatchToProps)(App);
//our app comp doesn't actually NEED currentUser (OUTDATED). for this reason, first argument
// in connect func can be null, since we don't need mapStateToProps liek we do for the header
