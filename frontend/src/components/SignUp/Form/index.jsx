import React, { useState } from 'react';
// styled components
import { FormStyles } from '../../../styles/signup/form';
// components
import Inputs from './Inputs';
// icons
import emailIcon from '../../../assets/email-icon.png';
import phoneIcon from '../../../assets/phone.png';
import profileIcon from '../../../assets/profile.png';
// react router
import { Link } from 'react-router-dom';
// regular expresions
import { regExp } from '../../../configs/regExp';

function Form() {
	const [email, setEmail] = useState({ value: '', isValid: null });
	const [username, setUsername] = useState({ value: '', isValid: null });
	const [password, setPassword] = useState({ value: '', isValid: null });

	const handlerSubmit = (e) => {
		e.preventDefault();
		console.log(email);
		console.log(password);
		console.log(username);
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
				<button>Next </button>
			</form>
			<div className="footer">
				<p>Already have an account?</p>
				<Link to="/login">LogIn to your account</Link>
			</div>
		</FormStyles>
	);
}

export default Form;
