import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

// Background component is a styled div element with a display of flex, a flex-direction of column, a background of linear-gradient, a background of url, a background-size of cover, a background-repeat of no-repeat.
export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
    no-repeat;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  }
`;

// The container component is a styled div element with a display of flex, a margin of 0 56px, a height of 100px, a justify-content of space-between, and an align-items of center.
export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 100px;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

// The Link component is a styled p element with a color of #fff, a text-decoration of none, a margin-right of 30px, a font-weight of 700 if active is true, a font-weight of normal if active is false, and a cursor of pointer.
export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

// The Group component is a styled div element with a display of flex, align-items of center.
export const Group = styled.div`
  display: flex;
  align-items: center;
`;

// The SearchInput component is a styled input element with a background-color of rgba(64, 64, 64, 0.5), a color of white, a border of 1px solid white, a transition of width 0.5s, a height of 30px, a font-size of 14px, a border-radius of 4px, a margin-left of 10px if active is true, a padding of 0 10px if active is true, an opacity of 1 if active is true, a width of 200px if active is true, a margin-left of 0 if active is false, a padding of 0 if active is false, and an opacity of 0 if active is false.
export const SearchInput = styled.input`
  background-color: rgba(64, 64, 64, 0.5);
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  border-radius: 4px;
  margin-left: ${({ active }) => (active === true ? '10px' : '0')};
  padding: ${({ active }) => (active === true ? '0 10px' : '0')};
  opacity: ${({ active }) => (active === true ? '1' : '0')};
  width: ${({ active }) => (active === true ? '200px' : '0px')};

  &:focus {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

// The Search component is a styled div element with a display of flex, align-items of center.
export const Search = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: white;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

// The SearchIcon component is a styled button element with a cursor of pointer, a background-color of transparent, a border of 0, an outline of 0, a height of 32px, a width of 32px, a padding of 0, a display of flex, align-items of center, and justify-content of center.
export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 32px;
  width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

// The ButtonLink component is a styled ReachRouterLink component with a display of block, a background-color of #e50914, a width of 84px, a height of fit-content, a color of white, a border of 0, a font-size of 15px, a border-radius of 3px, a padding of 8px 17px, a cursor of pointer, and a text-decoration of none.
export const ButtonLink = styled(ReachRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #f40612;
  }
`;

// The Picture component is a styled button element with a background of url, a background-size of contain, a border of 0, a width of 32px, a height of 32px, and a cursor of pointer.
export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

// the Dropdown component is a styled div element with a display of none, a position of absolute, a background-color of black, a padding of 10px, a width of 100px, a top of 32px, and a right of 10px.
export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 10px;
  width: 100px;
  top: 32px;
  right: 10px;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${Link} {
      cursor: pointer;
    }

    ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

// The Profile component is a styled div element with a display of flex, align-items of center, a margin-left of 20px, and a position of relative.
export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

// The Feature component is a styled Container component with a padding of 150px 0 500px 0, a flex-direction of column, an align-items of normal, and a width of 50%.
export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;

// The FeatureCallOut component is a styled h2 element with a color of white, a font-size of 50px, a line-height of normal, a font-weight of bold, a text-shadow of 2px 2px 4px rgba(0, 0, 0, 0.45), and a margin of 0.
export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

// The Text component is a styled p element with a color of white, a font-size of 22px, a line-height of normal, and a text-shadow of 2px 2px 4px rgba(0, 0, 0, 0.45).
export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

// The Logo component is a styled img element with a height of 36px, a width of 134px, and a margin-right of 40px.
export const Logo = styled.img`
  height: 36px;
  width: 134px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

// The PlayButton component is a styled button element with a box-shadow of 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35), a background-color of #e6e6e6, a color of #000, a border-width of 0, a padding of 10px 20px, a border-radius of 5px, a max-width of 130px, a font-weight of bold, a font-size of 20px, a margin-top of 10px, and a cursor of pointer. 
export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`;
