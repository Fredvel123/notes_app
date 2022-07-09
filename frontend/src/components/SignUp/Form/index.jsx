import React, { useState } from 'react';
// styled components
import { FormStyles } from '../../../styles/signup/form';
// components
import Inputs from './Inputs';
import Response from '../Response';
// icons
import emailIcon from '../../../assets/email-icon.png';
import phoneIcon from '../../../assets/phone.png';
import profileIcon from '../../../assets/profile.png';
// react router
import { Link } from 'react-router-dom';
// regular expresions
import { regExp } from '../../../configs/regExp';
// endpoints
import { signUpUrl } from '../../../configs/endpoints';

function Form() {
	const [email, setEmail] = useState({ value: '', isValid: null });
	const [username, setUsername] = useState({ value: '', isValid: null });
	const [password, setPassword] = useState({ value: '', isValid: null });

	// creating new user and connection with server
	const [response, setResponse] = useState({ isCreated: null, message: '' });
	const createNewUser = async () => {
		const request = await fetch(signUpUrl, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				username: username.value, // greater than 5 and less than 30 characters
				email: email.value, // no empty email
				password: password.value, // greater than 5 and less than 25 characters
			}),
		});
		const res = await request.json();
		setResponse(res);
	};

	const handlerSubmit = (e) => {
		e.preventDefault();
		if ((email.isValid, password.isValid, username.isValid)) {
			console.log(createNewUser());
		} else {
			console.log('post incorrect');
		}
	};

	return (
		// this is a DIV tag
		<FormStyles>
			<h2>Sign Up</h2>
			<p>Please fill your information below</p>
			<form onSubmit={handlerSubmit}>
				<Inputs
					type="email"
					state={email}
					setState={setEmail}
					placeholder="e-mail"
					icon={emailIcon}
					expression={regExp.email}
				/>
				<Inputs
					type="text"
					state={username}
					setState={setUsername}
					placeholder="username"
					icon={profileIcon}
					expression={regExp.user}
				/>
				<Inputs
					type="password"
					state={password}
					setState={setPassword}
					placeholder="password"
					icon={phoneIcon}
					expression={regExp.password}
				/>
				<button
					className={
						email.isValid & password.isValid & username.isValid
							? 'enable'
							: 'disable'
					}
				>
					Next{' '}
				</button>
			</form>
			<div className="footer">
				<p>Already have an account?</p>
				<Link to="/login">LogIn to your account</Link>
			</div>
			<Response text={response} />
		</FormStyles>
	);
}

export default Form;
