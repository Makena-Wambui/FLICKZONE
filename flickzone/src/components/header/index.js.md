## Header Component Documentation 

**Table of Contents**

* [Overview](#overview)
* [Component Usage](#component-usage)
* [Component Props](#component-props)
* [Component Examples](#component-examples)

<br>

### Overview 

This document provides an overview of the `Header` component, its structure, and its functionalities. The `Header` component is a versatile and reusable component designed to create various header elements for applications.

<br>

### Component Usage

The `Header` component offers a flexible structure for creating different types of headers. It provides a base component, `Header`, along with a suite of sub-components designed to enhance header functionality.

```javascript
import Header from './Header';

// Example usage:
<Header bg={true}>
  <Header.Frame>
    <Header.Group>
      <Header.Logo to="/" />
      <Header.Search 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />
    </Header.Group>
    <Header.Group>
      <Header.Profile>
        <Header.Picture src="user-profile" />
      </Header.Profile>
    </Header.Group>
  </Header.Frame>
</Header>
```

This example demonstrates the basic structure of the `Header` component, utilizing sub-components like `Header.Frame`, `Header.Group`, `Header.Logo`, `Header.Search`, and `Header.Profile` to create a header with a logo, search functionality, and user profile.

<br>

### Component Props

The `Header` component and its sub-components accept various props to customize their appearance and functionality. Here's a breakdown of the props:

| Component | Prop | Description | Type | Default |
|---|---|---|---|---|
| `Header` | `bg` |  Determines if the header should have a background. | boolean | `true` |
| `Header.Frame` | `children` |  Content to be rendered inside the header frame. | ReactNode |  - |
| `Header.Group` | `children` |  Content to be rendered inside the header group. | ReactNode |  - |
| `Header.Logo` | `to` |  URL to navigate to when the logo is clicked. | string |  - |
| `Header.Search` | `searchTerm` |  Current search term. | string |  - |
| `Header.Search` | `setSearchTerm` |  Function to update the search term. | function |  - |
| `Header.Profile` | `children` |  Content to be rendered inside the profile. | ReactNode |  - |
| `Header.Feature` | `children` |  Content to be rendered inside the feature. | ReactNode |  - |
| `Header.Picture` | `src` |  Image source for the user profile picture. | string |  - |
| `Header.Dropdown` | `children` |  Content to be rendered inside the dropdown. | ReactNode |  - |
| `Header.TextLink` | `children` |  Content to be rendered inside the text link. | ReactNode |  - |
| `Header.PlayButton` | `children` |  Content to be rendered inside the play button. | ReactNode |  - |
| `Header.FeatureCallOut` | `children` |  Content to be rendered inside the feature callout. | ReactNode |  - |
| `Header.Text` | `children` |  Content to be rendered inside the text. | ReactNode |  - |
| `Header.ButtonLink` | `children` |  Content to be rendered inside the button link. | ReactNode |  - |

<br>

### Component Examples

Here are some examples of how to use the `Header` component and its sub-components to create different header variations:

**Example 1: Basic Header**

```javascript
<Header>
  <Header.Frame>
    <Header.Group>
      <Header.Logo to="/" />
    </Header.Group>
    <Header.Group>
      <Header.Profile>
        <Header.Picture src="user-profile" />
      </Header.Profile>
    </Header.Group>
  </Header.Frame>
</Header>
```

**Example 2: Header with Search Functionality**

```javascript
<Header>
  <Header.Frame>
    <Header.Group>
      <Header.Logo to="/" />
      <Header.Search 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />
    </Header.Group>
    <Header.Group>
      <Header.Profile>
        <Header.Picture src="user-profile" />
      </Header.Profile>
    </Header.Group>
  </Header.Frame>
</Header>
```

**Example 3: Header with Feature Callout**

```javascript
<Header>
  <Header.Frame>
    <Header.Feature>
      <Header.FeatureCallOut>
        <Header.Text>
          Welcome to our platform!
        </Header.Text>
        <Header.ButtonLink to="/signup">
          Sign Up Now
        </Header.ButtonLink>
      </Header.FeatureCallOut>
    </Header.Feature>
  </Header.Frame>
</Header>
```

These examples showcase the versatility of the `Header` component, enabling developers to create various header configurations tailored to their specific application needs.
