import React from 'react';
// styled components
import { SingUpStyles } from '../../styles/signup';
// components
import Wallpaper from '../LogIn/Wallpaper';
import Form from './Form';

function SignUp() {
	return (
		<SingUpStyles>
			<Wallpaper />
			<Form />
		</SingUpStyles>
	);
}

export default SignUp;
