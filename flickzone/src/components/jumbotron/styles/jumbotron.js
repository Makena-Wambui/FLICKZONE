import styled from 'styled-components';

// Inner is a styled component
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

export const Container = styled.div``;

