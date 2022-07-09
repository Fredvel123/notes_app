import { useState } from 'react';
import { Link } from 'react-router-dom';
// styled components
import { FormStyles } from '../../../styles/signup/form';
// components
import Inputs from './Inputs';
// endpoints
import { logInUrl } from '../../../configs/endpoints';
// redux
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../redux/slices/auth';

function Form() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// register user
	const dispatch = useDispatch();

	const logInUser = async () => {
		const post = await fetch(logInUrl, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});
		const res = await post.json();
		dispatch(setAuth(res));
	};

	const handlerSubmit = (e) => {
		e.preventDefault();
		logInUser();
	};
	return (
		<FormStyles>
			<h2>Log In</h2>
			<p>Please fill your information below</p>
			<form onSubmit={handlerSubmit}>
				<Inputs
					type="email"
					placeholder="e-mail"
					state={email}
					setState={setEmail}
				/>
				<Inputs
					type="password"
					placeholder="password"
					state={password}
					setState={setPassword}
				/>
				<button className="enable">LogIn</button>
			</form>
			<div className="footer">
				<p>Don't haven an account?</p>
				<Link to="/signup">Create your new account</Link>
			</div>
		</FormStyles>
	);
}

export default Form;
