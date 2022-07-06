import React from 'react';
// styled components
import { InputStyles } from '../../../styles/signup/form';

function Inputs({ type, placeholder, icon }) {
	return (
		<InputStyles>
			<input type={type} placeholder={placeholder} />
			<img src={icon} alt="icon" width={12} />
		</InputStyles>
	);
}

export default Inputs;
