import React from 'react';
import { Container, Input, Break, Button, Text } from './styles/opt-form';

// OptForm is a compound component that composes the Container, Input, Button, Text, and Break components. It is used to create a form that contains an input field, a button, and a text element.
export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

// The Input component renders an input field. It is used to create a text input field.
OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

// The Button component renders a button. It is used to create a button.
OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

// The Text component renders a text element. It is used to display text.
OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

// The Break component renders a break element.It is used to create a break between the input and button elements. 
OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
