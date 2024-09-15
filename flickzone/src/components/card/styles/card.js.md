## Styled Components Documentation

This document provides an overview of the styled components used in this project. 

**Table of Contents**

- [Title](#title)
- [Container](#container)
- [Group](#group)
- [SubTitle](#subtitle)
- [Text](#text)
- [Entities](#entities)
- [Meta](#meta)
- [Image](#image)
- [Item](#item)
- [FeatureText](#featuretext)
- [Feature](#feature)
- [FeatureTitle](#featuretitle)
- [FeatureClose](#featureclose)
- [Content](#content)
- [Maturity](#maturity)

### Title

```javascript
export const Title = styled.p`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
  margin-top: 0;
`;
```

This styled component defines a paragraph element with the following styles:

| Property | Value |
|---|---|
| font-size | 24px |
| color | #e5e5e5 |
| font-weight | bold |
| margin-left | 56px |
| margin-right | 56px |
| margin-top | 0 |

### Container

```javascript
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;
```

This styled component defines a div element with the following styles:

| Property | Value |
|---|---|
| display | flex |
| flex-direction | column |
| margin-bottom | 50px |

**Media Queries:**

- **max-width: 1000px**: When the screen width is less than or equal to 1000px, the `Title` component's `margin-left` is set to 30px. 

**Pseudo-selectors:**

- **&:last-of-type**: When the `Container` component is the last element of its type, the `margin-bottom` is set to 0.

### Group

```javascript
export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};

  > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -100px;
    }
  }
`;
```

This styled component defines a div element with the following styles:

| Property | Value |
|---|---|
| display | flex |
| flex-direction | row (default) or column (if `flexDirection` prop is 'column') |
| align-items |  (conditional) dynamically set based on `alignItems` prop |
| margin | (conditional) dynamically set based on `margin` prop |

**Media Queries:**

- **min-width: 1100px**: When the screen width is greater than or equal to 1100px, the first `Container` component within the `Group` will have a `margin-top` of -100px.

### SubTitle

```javascript
export const SubTitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;
```

This styled component defines a paragraph element with the following styles:

| Property | Value |
|---|---|
| font-size | 12px |
| color | #fff |
| font-weight | bold |
| margin-top | 0 |
| margin-bottom | 0 |
| user-select | none |
| display | none | 

### Text

```javascript
export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;
```

This styled component defines a paragraph element with the following styles:

| Property | Value |
|---|---|
| margin-top | 5px |
| font-size | 10px |
| color | #fff |
| margin-bottom | 0 |
| user-select | none |
| display | none |
| line-height | normal |

### Entities

```javascript
export const Entities = styled.div`
  display: flex;
  flex-direction: row;
`;
```

This styled component defines a div element with the following styles:

| Property | Value |
|---|---|
| display | flex |
| flex-direction | row |

### Meta

```javascript
export const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
`;
```

This styled component defines a div element with the following styles:

| Property | Value |
|---|---|
| display | none |
| position | absolute |
| bottom | 0 |
| padding | 10px |
| background-color | #0000008f |

### Image

```javascript
export const Image = styled.img`
  border: 0;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
`;
```

This styled component defines an image element with the following styles:

| Property | Value |
|---|---|
| border | 0 |
| width | 100% |
| max-width | 305px |
| cursor | pointer |
| height | auto |
| padding | 0 |
| margin | 0 |

### Item

```javascript
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.3);
    z-index: 99;
  }

  @media (min-width: 1200px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
      display: block;
      z-index: 100;
    }
  }

  &:first-of-type {
    margin-left: 56px;

    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-right: 56px;

    @media (max-width: 1000px) {
      margin-right: 30px;
    }
  }
`;
```

This styled component defines a div element with the following styles:

| Property | Value |
|---|---|
| display | flex |
| flex-direction | column |
| margin-right | 5px |
| position | relative |
| cursor | pointer |
| transition | transform 0.2s |

**Pseudo-selectors:**

- **&:hover**: When the `Item` component is hovered, the `transform` property is set to `scale(1.3)` and the `z-index` is set to 99.
- **&:first-of-type**: When the `Item` component is the first element of its type, the `margin-left` is set to 56px.
- **&:last-of-type**: When the `Item` component is the last element of its type, the `margin-right` is set to 56px.

**Media Queries:**

- **min-width: 1200px**: When the screen width is greater than or equal to 1200px, the `Meta`, `Text`, and `SubTitle` components within the `Item` component will have `display: block` and `z-index: 100` when the `Item` component is hovered.
- **max-width: 1000px**: When the screen width is less than or equal to 1000px, the `margin-left` of the first `Item` component is set to 30px and the `margin-right` of the last `Item` component is set to 30px.

### FeatureText

```javascript
export const FeatureText = styled.p`
  font-size: 18px;
  color: white;
  font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 'bold' : 'normal')};
  margin: 0;

  @media (max-width: 600px) {
    line-height: 22px;
  }
`;
```

This styled component defines a paragraph element with the following styles:

| Property | Value |
|---|---|
| font-size | 18px |
| color | white |
| font-weight | bold (default) or normal (if `fontWeight` prop is 'normal') |
| margin | 0 |

**Media Queries:**

- **max-width: 600px**: When the screen width is less than or equal to 600px, the `line-height` is set to 22px.

### Feature

```javascript
export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 360px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black;

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;

    ${Title} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    ${FeatureText} {
      font-size: 14px;
    }
  }
`;
```

This styled component defines a div element with the following styles:

| Property | Value |
|---|---|
| display | flex |
| flex-direction | row |
| background | dynamically set based on the `src` prop |
| background-size | contain |
| position | relative |
| height | 360px |
| background-position-x | right |
| background-repeat | no-repeat |
| background-color | black |

**Media Queries:**

- **max-width: 1000px**: When the screen width is less than or equal to 1000px, the `height` and `background-size` are set to `auto`. The `font-size` and `line-height` of the `Title` component are set to 20px, and the `margin-bottom` of the `Title` component is set to 10px. The `font-size` of the `FeatureText` component is set to 14px.

### FeatureTitle

```javascript
export const FeatureTitle = styled(Title)`
  margin-left: 0;
`;
```

This styled component extends the `Title` component and sets the `margin-left` to 0.

### FeatureClose

```javascript
export const FeatureClose = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;
```

This styled component defines a button element with the following styles:

| Property | Value |
|---|---|
| color | white |
| position | absolute |
| right | 20px |
| top | 20px |
| cursor | pointer |
| background-color | transparent |
| border | 0 |

**Nested Elements:**

- `img`: The image element within the button has a `filter` of `brightness(0) invert(1)` and a `width` of 24px.

### Content

```javascript
export const Content = styled.div`
  margin: 56px;
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`;
```

This styled component defines a div element with the following styles:

| Property | Value |
|---|---|
| margin | 56px |
| max-width | 500px |
| line-height | normal |

**Media Queries:**

- **max-width: 1000px**: When the screen width is less than or equal to 1000px, the `margin` is set to 30px and the `max-width` is set to `none`.

### Maturity

```javascript
export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? '#f44336' : '#2f9600')};
  border-radius: 15px;
  width: 28px;
  line-height: 28px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-size: 12px;
`;
```

This styled component defines a div element with the following styles:

| Property | Value |
|---|---|
| background-color | dynamically set based on the `rating` prop: `#f44336` if `rating` is greater than or equal to 15, otherwise `#2f9600` |
| border-radius | 15px |
| width | 28px |
| line-height | 28px |
| text-align | center |
| color | white |
| font-weight | bold |
| text-shadow | 2px 2px 4px rgba(0, 0, 0, 0.2) |
| margin-right | 10px |
| font-size | 12px | 
