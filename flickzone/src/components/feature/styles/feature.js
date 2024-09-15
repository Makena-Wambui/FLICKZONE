import styled from 'styled-components';

// The Container component is a styled div element with a display of flex, a flex-direction of column, a border-bottom of 8px solid #222, text-align of center, and padding of 165px on the top and bottom and 45px on the left and right sides.
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 45px;
`;

// The Title component is a styled h1 element with a color of white, a max-width of 640px, a font-size of 50px, a font-weight of 500, and a margin of auto.
export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 50px;
  font-weight: 500;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

// The SubTitle component is a styled h2 element with a color of white, a font-size of 26px, a font-weight of normal, and a margin of 16px on the top and bottom and auto on the left and right sides.
export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
