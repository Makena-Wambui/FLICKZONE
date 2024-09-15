import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

// This Container component is a styled div element with a display of flex, a flex-direction of column, a min-height of 660px, a background-color of rgba(0, 0, 0, 0.75), a border-radius of 5px, a width of 100%, a margin of auto, a max-width of 450px, and a padding of 60px on the top, 68px on the right, 40px on the bottom, and a margin-bottom of 100px.
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
`;

// The Error component is a styled div element with a background of #e87c03, a border-radius of 4px, a font-size of 14px, a margin of 0 on the top, 0 on the right, and 16px on the bottom, a color of white, a padding of 15px on the top and bottom, 20px on the right and left.
export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

// The Base component is a styled form element with a display of flex, a flex-direction of column, a max-width of 450px, and a width of 100%.
export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

// The Title component is a styled h1 element with a color of #fff, a font-size of 32px, a font-weight of bold, and a margin-bottom of 28px.
export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

// The Text component is a styled p element with a color of #737373, a font-size of 16px, a font-weight of 500.
export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;

// The TextSmall component is a styled p element with a margin-top of 10px, a font-size of 13px, a line-height of normal, and a color of #8c8c8c.
export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;

// The Link component is a styled ReactRouterLink component with a color of #fff, a text-decoration of none.
export const Link = styled(ReactRouterLink)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// The Input component is a styled input element with a background of #333, a border-radius of 4px, a border of 0, a color of #fff, a height of 50px, a line-height of 50px, a padding of 5px on the top and bottom, 20px on the right and left, and a margin-bottom of 20px.
export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

// The Submit component is a styled button element with a background of #e50914, a border-radius of 4px, a font-size of 16px, a font-weight of bold, a margin of 24px on the top, 0 on the right, and 12px on the bottom, a padding of 16px, a border of 0, a color of white, and a cursor of pointer.
export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;
