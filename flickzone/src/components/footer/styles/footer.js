import styled from 'styled-components';

// The Container component is a styled div element with a display of flex, a padding of 70px on the top and bottom, 56px on the left and right, a margin of auto, a max-width of 1000px, and a flex-direction of column.
export const Container = styled.div`
	display: flex;
	padding: 70px 56px;
	margin: auto;
	max-width: 1000px;
	flex-direction: column;

	@media (max-width: 1000px) {
		padding: 70px 30px;
	}
`;

// The Column component is a styled div element with a display of flex and a flex-direction of column.
export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-allign: center;
	
`;

// The Row component is a styled div element with a display of grid, a grid-template-columns of repeat(auto-fill, minmax(230px, 1fr)), and a grid-gap of 15px.
export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
	grid-gap: 15px;

	@media (max-width: 1000px) {
		 grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        }
`;

// The Link component is a styled a element with a color of #757575, a margin-bottom of 20px, a font-size of 15px, and a text-decoration of none.
export const Link = styled.a`
	color: #757575;
	margin-bottom: 20px;
	font-size: 15px;
	text-decoration: none;

`;

// The Title component is a styled p element with a font-size of 16px, a color of #757575, and a margin-bottom of 40px.
export const Title = styled.p`
	font-size: 16px;
	color: #757575;
	margin-bottom: 40px;
`;

// The Text component is a styled p element with a font-size of 13px, a color of #757575, and a margin-bottom of 40px.
export const Text = styled.p`
        font-size: 13px;
        color: #757575;
        margin-bottom: 40px;
`;

// The Break component is a styled p element with a flex-basis of 100%, a height of 0, and a margin of 0.
export const Break = styled.p`
        flex-basis: 100%;
	height: 0;
`;
