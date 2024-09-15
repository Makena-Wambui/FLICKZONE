import React from 'react';

import { Title, SubTitle, Container } from './styles/feature';

// Feature component that renders the feature container
export default function Feature({ children, ... restProps }) {
	return <Container {... restProps}>{children}</Container>
}

// Feature Title (Movie Title)
Feature.Title = function FeatureTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

// Feature SubTitle (Genre)
Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};
