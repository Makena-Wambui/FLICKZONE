import styled from 'styled-components';

// Item is the main container for the Jumbotron component 
export const Item = styled.div`
	display: flex;
	border-bottom: 8px solid #222;
	padding: 50px 5%;
	color: white;
	overflow: hidden;
`;

// Inner is a container that holds the content of the Jumbotron
export const Inner = styled.div`
	// Your normal css here
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: ${({ direction }) => direction};
  	max-width: 1100px;
  	margin: auto;
  	width: 100%;

  	@media (max-width: 1000px) {
    	flex-direction: column;
  }
`;

// Container is a container that holds the content of the Jumbotron
export const Container = styled.div`
	  @media (max-width: 1000px) {
	  	${Item}:last-of-type h2 {
      		margin-bottom: 50px;
    	}
  }
`;

// Pane is a container that holds the text content in the Jumbotron
export const Pane = styled.div`
	width: 50%;
	
	@media (max-width: 1000px) {
		width: 100%;
		padding: 0 45px;
		text-allign: center;

	}`;

// Title, SubTitle and Image are used to render the title, subtitle and image in the Jumbotron
export const Title = styled.h1`
	font-size: 50px;
	line-height: 1.1;
	margin-bottom: 8px;
	
	@media (max-width: 600px) {
		font-size: 35px;
	}
`;


export const SubTitle = styled.h2`
	font-size: 26px;
	font-weight: normal;
	line-height: normal;
	
	@media (max-width: 600px) {
		font-size: 18px;
	}
`;

export const Image = styled.img`
	max-width: 100%;
	height: auto;
`;
