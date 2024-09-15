import React from 'react';
import { Container, Row, Column, Link, Title, Text, Break } from './styles/footer';

// Footer component that renders the footer container.
export default function Footer({ children, ... restProps }) {
	return <Container { ... restProps}>{children}</Container>;
};

// The Row component.
Footer.Row = function FooterRow({ children, ... restProps }) {
	return <Row {... restProps}>{children}</Row>;
};

// The Column component.
Footer.Column = function FooterColumn({ children, ... restProps }) {
        return <Column {... restProps}>{children}</Column>;                                                                               };

// Links to different Pages in the footer.
Footer.Link = function FooterLink({ children, ... restProps }) {
        return <Link {... restProps}>{children}</Link>;                                                                                   };

// The Title component.
Footer.Title = function FooterTitle({ children, ... restProps }) {
        return <Title {... restProps}>{children}</Title>;                                                                                
};

// The Text component.
Footer.Text = function FooterText({ children, ... restProps }) {
        return <Text {... restProps}>{children}</Text>;                                                                                   };

// The Break component.
Footer.Break = function FooterBreak({ children, ... restProps }) {
        return <Break {... restProps}>{children}</Break>;
};
