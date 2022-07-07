import React from 'react';
// styled components
import { InputStyles } from '../../../styles/signup/form';

function Inputs({ type, placeholder, icon, state, setState, expression }) {
	const handlerOnChange = (e) => {
		setState({ ...state, value: e.target.value });
	};
	const validations = () => {
		if (expression) {
			if (expression.test(state.value)) {
				setState({ ...state, isValid: true });
			} else {
				setState({ ...state, isValid: false });
			}
		}
		// if (callback) {
		// 	callback();
		// }
	};

	return (
		<InputStyles>
			<input
				type={type}
				onChange={handlerOnChange}
				placeholder={placeholder}
				onKeyUp={validations}
				onBlur={validations}
			/>
			<img src={icon} alt="icon" width={12} />
		</InputStyles>
	);
}

export default Inputs;
