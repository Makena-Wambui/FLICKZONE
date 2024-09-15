import styled from 'styled-components';

// The Container component is a styled div that serves as the container for the profiles component.
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

// The Title component is a styled h1 element that serves as the title for the profiles component. It is used to display the title of the profiles component.
export const Title = styled.h1`
  width: 100%;
  color: #fff;
  font-size: 48px;
  text-align: center;
  font-weight: 500;
`;

// The List component is a styled ul element that serves as the list for the profiles component. It is used to display a list of profiles.
export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

// The Name component is a styled p element that serves as the name for the profiles component. It is used to display the name of a profile.
export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;

  &:hover {
    font-weight: bold;
    color: #e5e5e5;
  }
`;

// The Picture component is a styled img element that serves as the picture for the profiles component.
export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
  cursor: pointer;
`;

// The Item component is a styled li element that serves as the item for the profiles component. It is used to display a profile.
export const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 30px;

  &:hover > ${Picture} {
    border: 3px solid white;
  }

  &:hover ${Name} {
    font-weight: bold;
    color: white;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
