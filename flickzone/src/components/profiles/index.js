import React from 'react';
import { Container, Title, List, Item, Picture, Name } from './styles/profiles';

// The Profiles component is a compound component that displays a list of profiles.
export default function Profiles({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

// The ProfilesTitle component is a styled h1 element that serves as the title for the profiles component. It is used to display the title of the profiles component. 
Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

// The ProfilesList component is a styled ul element that serves as the list for the profiles component. It is used to display a list of profiles.
Profiles.List = function ProfilesList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

// User component is a styled li element that serves as the item for the profiles component. It is used to display a profile. 
Profiles.User = function ProfilesUser({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

// The ProfilesPicture component is a styled img element that serves as the picture for the profiles component.
Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'} />;
};

// The ProfilesName component is a styled p element that serves as the name for the profiles component. It is used to display the name of a profile.
Profiles.Name = function ProfilesName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};
