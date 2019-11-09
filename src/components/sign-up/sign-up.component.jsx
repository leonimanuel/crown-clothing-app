import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils"

import "./sign-up.styles.scss";

class SignUp extends React.Component {//stateful component because we need to store what client is typing in.
	constructor() {
		super();

		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: ""
		}
	}

	handleSubmit = async event => {
		event.preventDefault();

		const {displayName, email, password, confirmPassword} = this.state
		if(password !== confirmPassword) {
			alert("passwords don't match")
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password) //??90 creates a new user account associate with the specified email address and password. Signs in and creates userAuth object

			await createUserProfileDocument(user, {displayName}) //gonna await for this to finish, and then run setState
			
			this.setState({ //?? this will clear our form. I guess because these states were being dynamically updated as the user typed?
				displayName: "",
				email: "",
				password: "",
				confirmPassword: ""
			})
			
		} catch (error) {
				console.log(error)
		}
	}

	handleChange = event => {
		const { name, value } = event.target;

		this.setState({[name]: value}) //dynamically updating each state object as its changed
	}

	render() {
		const {displayName, email, password, confirmPassword} = this.state
		return(
			<div className="sign-up">
				<h2 className="title">I do not have an account</h2>
				<span>Sign up with your email and password</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName" //??
						value={displayName}
						onChange={this.handleChange}
						label="Display Name"
						required
					/>
					<FormInput
						type="email"
						name="email" //??
						value={email}
						onChange={this.handleChange}
						label="email"
						required
					/>
					<FormInput
						type="password"
						name="password" //??
						value={password}
						onChange={this.handleChange}
						label="password"
						required
					/>
					<FormInput
						type="password"
						name="confirmPassword" //??
						value={confirmPassword}
						onChange={this.handleChange}
						label="Confirm password"
						required
					/>
					<CustomButton type="submit"> SIGN UP </CustomButton>
				</form>
			</div>
		)
	}
};

export default SignUp;

