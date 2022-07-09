import React from 'react';
import { ResponseStyles } from '../../styles/signup/form';

function Response({ text }) {
	return (
		<ResponseStyles>
			{(text.isCreated !== null) & (text.isCreated !== false) ? (
				<p>user was created</p>
			) : (
				<p>{text.message}</p>
			)}
		</ResponseStyles>
	);
}

export default Response;
