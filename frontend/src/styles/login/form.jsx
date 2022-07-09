import styled from 'styled-components';
import { colors, fonts } from '../tools';

export const Input = styled.input`
	width: 100%;
	padding: 3vh 7%;
	outline: none;
	font-size: 17px;
	border: 1.5px solid ${colors.gray};
	background: ${colors.gray};
	border-radius: 10px;
	&:focus {
		border: 1.5px solid ${colors.sky};
	}
`;
