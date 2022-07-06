import React from 'react';
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

function Form() {
	const handlerSubmit = (e) => {
		e.preventDefault();
	};

	return (
		// form tag

		<FormStyles onSubmit={handlerSubmit}>
			<h2>Sign Up</h2>
			<p>Please fill your information below</p>
			<form>
				<Inputs type="text" placeholder="e-mail" icon={emailIcon} />
				<Inputs type="text" placeholder="username" icon={profileIcon} />
				<Inputs
					type="password"
					placeholder="password"
					icon={phoneIcon}
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
