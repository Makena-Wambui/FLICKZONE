##  Styled Components for Banner 

**Table of Contents** 

* [Container Component](#container-component)
* [Title Component](#title-component)
* [SubTitle Component](#subtitle-component)

### Container Component 
This component defines the styling for the banner container. 

```javascript
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 45px;
`;
```

**Properties:**

| Property | Description | 
|---|---|
| `display: flex` |  Sets the display property to flex, enabling flexible layout. |
| `flex-direction: column` |  Sets the direction of the flex items to be stacked vertically. | 
| `border-bottom: 8px solid #222` |  Adds a solid black bottom border with a thickness of 8 pixels. |
| `text-align: center` |  Aligns the text content within the container to the center. |
| `padding: 165px 45px` |  Adds padding to the top, bottom, left, and right of the container. | 

### Title Component 
This component defines the styling for the banner title.

```javascript
export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 50px;
  font-weight: 500;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;
```

**Properties:**

| Property | Description | 
|---|---|
| `color: white` |  Sets the text color to white. |
| `max-width: 640px` |  Sets the maximum width of the title to 640 pixels. |
| `font-size: 50px` |  Sets the font size to 50 pixels. |
| `font-weight: 500` |  Sets the font weight to 500 (semi-bold). |
| `margin: auto` |  Automatically centers the title horizontally. |
| `@media (max-width: 600px) { font-size: 35px; }` |  Applies a smaller font size for screens with a maximum width of 600 pixels. |

### SubTitle Component 
This component defines the styling for the banner subtitle.

```javascript
export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
```

**Properties:**

| Property | Description | 
|---|---|
| `color: white` |  Sets the text color to white. |
| `font-size: 26px` |  Sets the font size to 26 pixels. |
| `font-weight: normal` |  Sets the font weight to normal. |
| `margin: 16px auto` |  Adds a top and bottom margin of 16 pixels and automatically centers the subtitle horizontally. |
| `@media (max-width: 600px) { font-size: 18px; }` |  Applies a smaller font size for screens with a maximum width of 600 pixels. | 
