import React from 'react';
// styled components
import { Input } from '../../../styles/login/form';

function Inputs({ type, placeholder, setState }) {
	const handlerChange = (e) => {
		setState(e.target.value);
	};
	return (
		<div>
			<Input
				type={type}
				placeholder={placeholder}
				onChange={handlerChange}
				required
			/>
		</div>
	);
}

export default Inputs;
