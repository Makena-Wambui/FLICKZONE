## Card Component Documentation

### Table of Contents

| Section  | Description | 
|---|---|
| [Introduction](#introduction) | Overview of the `Card` component and its purpose. | 
| [Usage](#usage) | How to use the `Card` component and its various sub-components. |
| [Components](#components) | Detailed description of each sub-component of the `Card` component. |
| [Context API](#context-api) | Explanation of the `FeatureContext` and its role in the `Card` component. |

### Introduction 

The `Card` component is a React component designed to create reusable card elements for displaying content. It provides a flexible structure for presenting information, images, and interactive elements within a visually appealing and consistent format.

### Usage

The `Card` component can be used as a container for various types of content, including:

* **Title:** Displays a main heading for the card.
* **SubTitle:** Provides a secondary title or subtitle for the card.
* **Text:** Displays text content within the card.
* **Entities:** Presents a list of items or entities related to the card's content.
* **Meta:**  Displays additional metadata or information associated with the card.
* **Item:** Creates interactive items within the card.
* **Image:** Displays an image within the card.
* **Feature:**  Provides a modal-like feature that expands when an `Item` is clicked.

**Example:**

```jsx
import React from 'react';
import Card from './Card';

const MyCard = () => {
  return (
    <Card>
      <Card.Title>My Card Title</Card.Title>
      <Card.Text>
        This is some sample text content for the card.
      </Card.Text>
      <Card.Entities>
        <Card.Item item={{ title: 'Item 1', genre: 'comedy' }}>
          Item 1
        </Card.Item>
        <Card.Item item={{ title: 'Item 2', genre: 'drama' }}>
          Item 2
        </Card.Item>
      </Card.Entities>
    </Card>
  );
};

export default MyCard;
```

### Components

#### Card

* **Props:**
    * `children`:  Content to be displayed inside the card.
    * `...restProps`:  Any other props to be passed to the `Container` component.

* **Description:**

    The `Card` component is the main container for all card elements. It acts as a base component and provides the overall structure for the card.

#### Card.Group

* **Props:**
    * `children`: Content to be displayed inside the group.
    * `...restProps`:  Any other props to be passed to the `Group` component.

* **Description:** 

    The `Card.Group` component allows grouping elements within the card. It provides styling and layout controls for arranging elements within the card.

#### Card.Title

* **Props:**
    * `children`: Content to be displayed as the title.
    * `...restProps`:  Any other props to be passed to the `Title` component.

* **Description:** 

    The `Card.Title` component displays the main title of the card. It applies specific styles to the title text.

#### Card.SubTitle

* **Props:**
    * `children`: Content to be displayed as the subtitle.
    * `...restProps`:  Any other props to be passed to the `SubTitle` component.

* **Description:** 

    The `Card.SubTitle` component displays the subtitle of the card. It applies specific styles to the subtitle text.

#### Card.Text

* **Props:**
    * `children`: Content to be displayed as text.
    * `...restProps`:  Any other props to be passed to the `Text` component.

* **Description:** 

    The `Card.Text` component displays textual content within the card. It applies specific styles to the text content.

#### Card.Entities

* **Props:**
    * `children`: Content to be displayed as a list of entities.
    * `...restProps`:  Any other props to be passed to the `Entities` component.

* **Description:** 

    The `Card.Entities` component allows displaying a list of items or entities. It provides a structured format for presenting a collection of related content.

#### Card.Meta

* **Props:**
    * `children`: Content to be displayed as metadata.
    * `...restProps`:  Any other props to be passed to the `Meta` component.

* **Description:** 

    The `Card.Meta` component displays additional metadata or information related to the card's content.

#### Card.Item

* **Props:**
    * `item`: An object containing data about the item.
    * `children`: Content to be displayed in the item.
    * `...restProps`:  Any other props to be passed to the `Item` component.

* **Description:** 

    The `Card.Item` component represents an interactive item within the card. It triggers the `Feature` component when clicked.

#### Card.Image

* **Props:**
    * `...restProps`:  Any other props to be passed to the `Image` component.

* **Description:** 

    The `Card.Image` component displays an image within the card. It utilizes the `Image` component to render the image.

#### Card.Feature

* **Props:**
    * `children`: Content to be displayed within the feature modal.
    * `category`: The category of the feature.
    * `...restProps`:  Any other props to be passed to the `Feature` component.

* **Description:** 

    The `Card.Feature` component is a modal-like component that appears when an `Item` is clicked. It displays detailed information about the selected item.

### Context API

The `Card` component utilizes a React `Context` API to manage the state of the `Feature` component:

* **FeatureContext:**  The `FeatureContext` provides access to the following variables:
    * `showFeature`:  A boolean indicating whether the `Feature` component is currently shown.
    * `setShowFeature`:  A function to set the `showFeature` state.
    * `itemFeature`:  An object containing data about the currently selected item.
    * `setItemFeature`:  A function to set the `itemFeature` state.

* **Usage:** 

    The `Card.Item` component uses the `FeatureContext` to trigger the `Feature` component by updating the `showFeature` and `itemFeature` states when an item is clicked. The `Feature` component uses the `FeatureContext` to retrieve the `itemFeature` and `showFeature` state values to render the appropriate content.

**Benefits of using Context API:**

* **State Management:** Centralizes the management of the `Feature` component's state.
* **Data Sharing:** Enables easy sharing of state data between components without prop drilling.
* **Improved Reusability:** Promotes code reusability as the `Feature` component can be easily integrated into different parts of the application.

**Note:**  The `Feature` component is only displayed if the `showFeature` state is `true`. 
