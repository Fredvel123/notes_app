import styled from 'styled-components';

export const SingUpStyles = styled.div`
	display: grid;
	min-width: 320px;
	grid-template-columns: 35% 65%;
	@media screen and (max-width: 650px) {
		grid-template-columns: 100%;
	}
`;
