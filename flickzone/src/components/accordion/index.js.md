## Accordion Component Documentation 

### Table of Contents

* [Introduction](#introduction)
* [Usage](#usage)
* [Components](#components)
    * [Accordion](#accordion)
    * [Accordion.Title](#accordiontitle)
    * [Accordion.Frame](#accordionframe)
    * [Accordion.Item](#accordionitem)
    * [Accordion.Header](#accordionheader)
    * [Accordion.Body](#accordionbody)
* [Context](#context)

### Introduction 

The Accordion component provides a user interface for displaying collapsible sections of content. Each section can be expanded and collapsed by clicking on its header.

### Usage

To use the Accordion component, simply import it into your React component and use the following syntax:

```jsx
import Accordion from './Accordion';

const MyComponent = () => {
  return (
    <Accordion>
      <Accordion.Title>Title 1</Accordion.Title>
      <Accordion.Frame>
        <Accordion.Item>
          <Accordion.Header>Header 1</Accordion.Header>
          <Accordion.Body>Content 1</Accordion.Body>
        </Accordion.Item>
      </Accordion.Frame>
      <Accordion.Title>Title 2</Accordion.Title>
      <Accordion.Frame>
        <Accordion.Item>
          <Accordion.Header>Header 2</Accordion.Header>
          <Accordion.Body>Content 2</Accordion.Body>
        </Accordion.Item>
      </Accordion.Frame>
    </Accordion>
  );
};
```

### Components

#### Accordion

The `Accordion` component is the main container for all the accordion items. It accepts the following props:

| Prop | Type | Description |
|---|---|---|
| children | ReactNode | The children of the accordion. |
| ...restProps | any | Any other props to be passed to the container element. |

#### Accordion.Title

The `Accordion.Title` component is used to display the title of a section. It accepts the following props:

| Prop | Type | Description |
|---|---|---|
| children | ReactNode | The title of the section. |
| ...restProps | any | Any other props to be passed to the title element. |

#### Accordion.Frame

The `Accordion.Frame` component is used to wrap all the accordion items within a section. It accepts the following props:

| Prop | Type | Description |
|---|---|---|
| children | ReactNode | The children of the frame. |
| ...restProps | any | Any other props to be passed to the frame element. |

#### Accordion.Item

The `Accordion.Item` component is used to represent a single accordion item. It accepts the following props:

| Prop | Type | Description |
|---|---|---|
| children | ReactNode | The children of the item. |
| ...restProps | any | Any other props to be passed to the item element. |

#### Accordion.Header

The `Accordion.Header` component is used to display the header of an accordion item. It accepts the following props:

| Prop | Type | Description |
|---|---|---|
| children | ReactNode | The header content. |
| ...restProps | any | Any other props to be passed to the header element. |

#### Accordion.Body

The `Accordion.Body` component is used to display the body of an accordion item. It accepts the following props:

| Prop | Type | Description |
|---|---|---|
| children | ReactNode | The body content. |
| ...restProps | any | Any other props to be passed to the body element. |

### Context

The Accordion component uses a React Context to manage the state of each accordion item. This allows the header to control the visibility of the body. The context provides the following values:

* **toggleShow:** A boolean value indicating whether the accordion item is currently expanded.
* **setToggleShow:** A function that can be used to toggle the expanded state of the accordion item.

The context is accessed within the `Accordion.Header` and `Accordion.Body` components using the `useContext` hook. This allows these components to update the state of the accordion item without needing to pass props down from the parent component.

***

This documentation provides a comprehensive overview of the Accordion component. It explains the usage, components, and context involved. This information allows developers to effectively use the component in their React applications. 
