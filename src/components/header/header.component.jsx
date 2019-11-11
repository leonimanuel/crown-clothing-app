import React from "react";
import { Link } from "react-router-dom";
import {connect } from "react-redux"; //higher order component that lets us modify our comp to have acces to things related to redux
import "./header.styles.scss";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ({currentUser}) => (
	<div className='header'>
		<Link className="logo-container" to="/">
			<Logo className='logo' />
		</Link>
		<div className="options">
			<Link className="option" to="/shop">SHOP</Link>
			<Link className="option" to="/contact">CONTACT</Link>
			{currentUser ? 
			<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
			: <Link className="option" to="/signin">SIGN IN</Link>
			}
		</div>
		
	</div>
);

const mapStateToProps = state => ({
			//^the name can be anything but this one is standard w redux codebases
	currentUser: state.user.currentUser
}) //now we can remove the passing of currentUser to our Header comp in App.js

// export default Header;

export default connect(mapStateToProps)(Header); //second connect argument optional
//this HOC basically makes it so that the Header component can receive a state as props without having to drill props from App.js 
	