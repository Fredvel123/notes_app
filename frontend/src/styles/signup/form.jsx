import styled from 'styled-components';
import { colors, fonts } from '../tools';

export const FormStyles = styled.div`
	background: white;
	width: 60%;
	height: 70vh;
	margin-left: 20%;
	margin-top: 15vh;
	h2 {
		font-family: ${fonts.title};
		color: ${colors.purple};
		font-size: 26px;
		margin-bottom: 18px;
	}
	p {
		color: ${colors.purple};
		font-family: ${fonts.title};
		font-size: 14px;
		font-weight: 200;
	}
	form {
		margin-top: 8vh;
	}
	.enable {
		font-size: 15px;
		background: ${colors.sky};
		border: none;
		padding: 3vh 6%;
		color: white;
		border-radius: 10px;
		margin-left: 82%;
		margin-top: 4vh;
		cursor: pointer;
	}
	.disable {
		font-size: 15px;
		background: red;
		color: white;
		border: none;
		padding: 3vh 6%;
		border-radius: 10px;
		margin-left: 82%;
		margin-top: 4vh;
		cursor: pointer;
	}
	.response {
		margin-top: 4vh;
		font-family: ${fonts.extra};
	}
	.footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 3vh;
		p {
			color: ${colors.purple};
		}
		a {
			font-family: ${fonts.text};
			list-style: none;
			text-decoration: none;
			color: ${colors.sky};
		}
	}
	@media screen and (max-width: 800px) {
		width: 70%;
		margin-left: 15%;
		.enable {
			margin-left: 79%;
		}
		.disable {
			margin-left: 79%;
		}
	}
	@media screen and (max-width: 650px) {
		width: 80%;
		margin-top: 7vh;
		margin-left: 10%;
		form {
			margin-top: 4vh;
		}
		.enable {
			margin-left: 77%;
		}
		.disable {
			margin-left: 77%;
		}
		.response {
			margin-top: 0vh;
			margin-bottom: 3vh;
			font-family: ${fonts.extra};
		}
	}
	@media screen and (max-width: 450px) {
		width: 90%;
		margin-top: 7vh;
		margin-left: 5%;
		.footer {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			margin-top: 3vh;
			p {
				color: ${colors.purple};
				margin-bottom: 2vh;
			}
			a {
				list-style: none;
				text-decoration: none;
				color: ${colors.sky};
				margin-bottom: 5vh;
			}
		}
	}
`;

export const InputStyles = styled.div`
	margin: 5px 0;
	position: relative;
	input {
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
	}
	img {
		top: 22px;
		left: 10px;
		position: absolute;
	}
	@media screen and (max-width: 650px) {
		input {
			font-size: 13px;
		}
		img {
			top: 20px;
			left: 5px;
		}
	}
`;

export const ResponseStyles = styled.div`
	font-family: ${fonts.extra};
	margin-top: 3vh;
	@media screen and (max-width: 450px) {
		margin-top: 0;
		margin-bottom: 5vh;
	}
	@media screen and (max-width: 650px) {
		padding-bottom: 4vh;
	}
`;
