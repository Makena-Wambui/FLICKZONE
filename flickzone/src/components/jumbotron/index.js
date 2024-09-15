import React from 'react';
import { Item, Inner, Container, Title, SubTitle, Pane, Image } from './styles/jumbotron';

// This is the Jumbotron component that will be used in the Home page 
export default function Jumbotron({ children, direction = 'row', ...restProps }) {
	return (
		<Item { ...restProps}>
			<Inner direction={direction}>{children}</Inner>
		</Item>
	)
}

// This is the Container component that will be used in the Jumbotron component to render the content
Jumbotron.Container = function JumbotronContainer({ children, ...restProps}) {
	return <Container {...restProps}>{children}</Container>;
}

// The Pane component is used to hold the text content in the Jumbotron
Jumbotron.Pane = function JumbotronPane({ children, ...restProps}) {
        return <Pane {...restProps}>{children}</Pane>;
}

// The Title, SubTitle and Image components are used to render the title, subtitle and image in the Jumbotron
Jumbotron.Title = function JumbotronTitle({ children, ...restProps}) {
        return <Title {...restProps}>{children}</Title>;
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps}) {
        return <SubTitle {...restProps}>{children}</SubTitle>;
}

Jumbotron.Image = function JumbotronImage({ ...restProps}) {
        return <Image {...restProps} />;
}
