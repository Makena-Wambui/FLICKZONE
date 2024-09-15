import React from 'react';
import { Container, Base, Error, Title, Text, TextSmall, Link, Input, Submit } from './styles/form';

// Form component that renders the form container.
export default function Form({ children, ... restProps }) {
	return <Container { ... restProps}>{children}</Container>;
}

// The Base component.
Form.Base = function FormBase({ children, ... restProps }) {                                                                                    return <Base { ... restProps}>{children}</Base>;
};

// The Error component.
Form.Error = function FormError({ children, ... restProps }) {
	return <Error { ... restProps}>{children}</Error>;
};

// The Title component.
Form.Title = function FormTitle({ children, ... restProps }) {                                                                                    return <Title { ... restProps}>{children}</Title>;
};

// The Text component.
Form.Text = function FormText({ children, ... restProps }) {                                                                                    return <Text { ... restProps}>{children}</Text>;     };

// The TextSmall component.
Form.TextSmall = function FormTextSmall({ children, ... restProps }) {                                                                                    return <TextSmall { ... restProps}>{children}</TextSmall>;
};

// The Link component.
Form.Link = function FormLink({ children, ... restProps }) {                                                                                    return <Link { ... restProps}>{children}</Link>;
};

// The Input component.
Form.Input = function FormInput({ children, ... restProps }) {                                                                                    return <Input { ... restProps}>{children}</Input>;
};

// The Submit component.
Form.Submit = function FormSubmit({ children, ... restProps }) {                                                                                    return <Submit { ... restProps}>{children}</Submit>;
};
