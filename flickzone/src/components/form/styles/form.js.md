# Styled Components for Login Form 🔐

## Table of Contents 📑

* [Introduction](#introduction)
* [Components](#components)
  * [Container](#container)
  * [Error](#error)
  * [Base](#base)
  * [Title](#title)
  * [Text](#text)
  * [TextSmall](#textsmall)
  * [Link](#link)
  * [Input](#input)
  * [Submit](#submit)

## Introduction 

This code defines a set of styled components for a login form.  It leverages `styled-components` to create reusable and visually consistent UI elements. 

## Components 

### Container 📦

```jsx
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
```

*  **Purpose:**  Provides the overall layout and styling for the login form. 
*  **Key Properties:**
    * `display: flex`, `flex-direction: column`: Arranges elements vertically.
    * `min-height: 660px`: Sets the minimum height of the container.
    * `background-color: rgba(0, 0, 0, 0.75)`: Sets a semi-transparent black background. 
    * `border-radius: 5px`: Rounds the corners of the container.
    * `max-width: 450px`:  Limits the maximum width of the container.
    * `padding: 60px 68px 40px`: Adds padding around the form content.
    * `margin-bottom: 100px`:  Adds spacing between the container and the bottom of the screen.


### Error ⚠️

```jsx
export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;
```

*  **Purpose:**  Styles an error message.
*  **Key Properties:**
    * `background: #e87c03`:  Sets an orange background.
    * `border-radius: 4px`: Rounds the corners of the error message.
    * `font-size: 14px`: Sets the font size of the text.
    * `color: white`: Sets the text color to white.
    * `padding: 15px 20px`:  Adds padding around the error message.


### Base 📐

```jsx
export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;
```

*  **Purpose:**  Provides the basic structure and styling for the form itself.
*  **Key Properties:**
    * `display: flex`, `flex-direction: column`:  Arranges form elements vertically.
    * `max-width: 450px`:  Limits the maximum width of the form.
    * `width: 100%`:  Makes the form occupy the full width of its container.


### Title 👑

```jsx
export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;
```

*  **Purpose:** Styles the heading for the login form.
*  **Key Properties:**
    * `color: #fff`: Sets the text color to white.
    * `font-size: 32px`: Sets the font size of the title.
    * `font-weight: bold`:  Sets the font weight to bold.
    * `margin-bottom: 28px`:  Adds spacing between the title and the next element.


### Text 📝

```jsx
export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;
```

*  **Purpose:**  Styles regular text within the form.
*  **Key Properties:**
    * `color: #737373`: Sets a gray text color.
    * `font-size: 16px`:  Sets the font size of the text.
    * `font-weight: 500`:  Sets the font weight to slightly bolder.


### TextSmall 🤏

```jsx
export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;
```

*  **Purpose:** Styles smaller text within the form.
*  **Key Properties:**
    * `margin-top: 10px`:  Adds top margin for spacing.
    * `font-size: 13px`:  Sets the font size of the text.
    * `color: #8c8c8c`:  Sets a lighter gray color.


### Link 🔗

```jsx
export const Link = styled(ReactRouterLink)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
```

*  **Purpose:** Styles a link within the form.
*  **Key Properties:**
    * `color: #fff`: Sets the text color to white.
    * `text-decoration: none`: Removes default underline.
    * `&:hover`:  Applies the following styles when the link is hovered over.
      * `text-decoration: underline`:  Adds an underline on hover.

### Input ⌨️

```jsx
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
```

*  **Purpose:** Styles input fields.
*  **Key Properties:**
    * `background: #333`: Sets a dark gray background.
    * `border-radius: 4px`: Rounds the corners of the input field.
    * `color: #fff`: Sets the text color to white.
    * `height: 50px`: Sets the height of the input field.
    * `padding: 5px 20px`:  Adds padding around the input text.
    * `margin-bottom: 20px`: Adds spacing between input fields.
    * `&:last-of-type`: Applies the following styles to the last input field.
      * `margin-bottom: 30px`: Adds more spacing below the last input field.

### Submit ➡️

```jsx
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
```

*  **Purpose:** Styles the submit button.
*  **Key Properties:**
    * `background: #e50914`:  Sets a red background.
    * `font-size: 16px`: Sets the font size of the button text.
    * `font-weight: bold`:  Sets the font weight to bold.
    * `padding: 16px`:  Adds padding around the button text.
    * `cursor: pointer`:  Changes the cursor to a pointer when hovering over the button.
    * `&:disabled`:  Applies the following styles when the button is disabled.
      * `opacity: 0.5`:  Makes the button semi-transparent. 
