## Feature Component Documentation

### Table of Contents

| Section | Description |
|---|---|
| [Overview](#overview) | A brief description of the component. |
| [Usage](#usage) | Instructions on how to use the component. |
| [Props](#props) | A list of all available props for the component. |
| [Example](#example) | A basic example of how to use the component. |

### Overview 

The `Feature` component is a reusable React component designed to encapsulate and style a feature section on a web page. 

### Usage

The `Feature` component accepts a single child element, typically a `div` or other container element, which represents the content of the feature.

The component also provides two nested components, `Feature.Title` and `Feature.SubTitle`, for styling the title and subtitle of the feature.

### Props

| Prop | Type | Description |
|---|---|---|
| `children` | any | The content of the feature. |
| `...restProps` | any |  Additional props passed to the `Container` component. |

### Example

```javascript
import Feature from './Feature';

const MyFeature = () => (
  <Feature>
    <Feature.Title>My Feature Title</Feature.Title>
    <Feature.SubTitle>My Feature SubTitle</Feature.SubTitle>
    <div>
      {/* Feature content */}
    </div>
  </Feature>
);
``` 
