import styled from 'styled-components';
import { colors, fonts } from '../tools';
import wallpaperImage from '../../assets/wallpaper.png';

export const Banner = styled.div`
	// image nbanner

	background-image: url(${wallpaperImage});
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
	height: 100vh;
	// display above image

	display: flex;
	align-items: center;
	justify-content: center;
	h2 {
		color: white;
		font-family: ${fonts.extra};
		/* letter-spacing: 3px; */
	}
	@media screen and (max-width: 650px) {
		height: 25vh;
		background-size: cover;
	}
	@media screen and (max-width: 400px) {
		h2 {
			font-size: 20px;
		}
	}
`;
