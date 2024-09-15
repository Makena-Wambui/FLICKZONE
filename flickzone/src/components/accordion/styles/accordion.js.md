## Styled Components for a FAQ Section 

**Table of Contents**

* [Container Component](#container-component)
* [Frame Component](#frame-component)
* [Inner Component](#inner-component)
* [Title Component](#title-component)
* [Item Component](#item-component)
* [Header Component](#header-component)
* [Body Component](#body-component)


### Container Component 

**Description:**
This component serves as a container for the entire FAQ section.

**Code:**
```javascript
export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;
```

**Properties:**
* **display:** flex - Sets the display property to flex, enabling flexible box layout.
* **border-bottom:** 8px solid #222 - Adds a bottom border with a width of 8 pixels, a solid style, and a color of #222 (dark gray).

### Frame Component 

**Description:**
This component provides a wrapper for the FAQ items and adds some basic styling.

**Code:**
```javascript
export const Frame = styled.div`
  margin-bottom: 40px;
`;
```

**Properties:**
* **margin-bottom:** 40px - Adds a bottom margin of 40 pixels.

### Inner Component 

**Description:**
This component provides a container for the FAQ content, including the title and items. 

**Code:**
```javascript
export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;
```

**Properties:**
* **display:** flex - Sets the display property to flex, enabling flexible box layout.
* **padding:** 70px 45px - Adds padding to the top, right, bottom, and left of the component.
* **flex-direction:** column - Sets the flex direction to column, arranging items vertically.
* **max-width:** 815px - Sets the maximum width of the component.
* **margin:** auto - Centers the component horizontally.

### Title Component 

**Description:**
This component displays the title for the FAQ section.

**Code:**
```javascript
export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;
```

**Properties:**
* **font-size:** 50px - Sets the font size to 50 pixels.
* **line-height:** 1.1 - Sets the line height to 1.1, slightly compressing the text.
* **margin-top:** 0 - Removes the top margin.
* **margin-bottom:** 8px - Adds a bottom margin of 8 pixels.
* **color:** white - Sets the text color to white.
* **text-align:** center - Centers the text horizontally.
* **@media (max-width: 600px) { ... }**: Applies the following styles only when the screen width is 600 pixels or less.
    * **font-size:** 35px - Decreases the font size to 35 pixels for smaller screens.

### Item Component 

**Description:**
This component represents a single FAQ item.

**Code:**
```javascript
export const Item = styled.div`
  color: white;
  margin: auto;
  margin-bottom: 10px;
  max-width: 728px;
  width: 100%;

  &:first-of-type {
    margin-top: 3em;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;
```

**Properties:**
* **color:** white - Sets the text color to white.
* **margin:** auto - Centers the component horizontally.
* **margin-bottom:** 10px - Adds a bottom margin of 10 pixels.
* **max-width:** 728px - Sets the maximum width of the component.
* **width:** 100% - Makes the component take up 100% of its container's width.
* **&:first-of-type { ... }**: Applies the following styles only to the first item.
    * **margin-top:** 3em - Adds a top margin of 3 ems.
* **&:last-of-type { ... }**: Applies the following styles only to the last item.
    * **margin-bottom:** 0 - Removes the bottom margin.

### Header Component 

**Description:**
This component displays the question for an FAQ item.

**Code:**
```javascript
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  background: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
    user-select: none;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
```

**Properties:**
* **display:** flex - Sets the display property to flex, enabling flexible box layout.
* **justify-content:** space-between - Distributes the items evenly with space between them.
* **cursor:** pointer - Changes the mouse cursor to a pointer when hovering over the component.
* **margin-bottom:** 1px - Adds a bottom margin of 1 pixel.
* **font-size:** 26px - Sets the font size to 26 pixels.
* **font-weight:** normal - Sets the font weight to normal (not bold).
* **background:** #303030 - Sets the background color to a dark gray.
* **padding:** 0.8em 1.2em 0.8em 1.2em - Adds padding to the top, right, bottom, and left of the component.
* **user-select:** none - Prevents the text from being selected.
* **align-items:** center - Aligns the items vertically to the center.
* **img { ... }**: Applies the following styles to any image element inside the component.
    * **filter:** brightness(0) invert(1) - Inverts the colors of the image.
    * **width:** 24px - Sets the width of the image to 24 pixels.
    * **user-select:** none - Prevents the image from being selected.
    * **@media (max-width: 600px) { ... }**: Applies the following styles only when the screen width is 600 pixels or less.
        * **width:** 16px - Decreases the width of the image to 16 pixels for smaller screens.
* **@media (max-width: 600px) { ... }**: Applies the following styles only when the screen width is 600 pixels or less.
    * **font-size:** 16px - Decreases the font size to 16 pixels for smaller screens.

### Body Component 

**Description:**
This component displays the answer to an FAQ question.

**Code:**
```javascript
export const Body = styled.div`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  white-space: pre-wrap;
  user-select: none;
  overflow: hidden;

  &.closed {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }
  &.open {
    max-height: 1200px;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }

  span {
    display: block;
    padding: 0.8em 2.2em 0.8em 1.2em;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
```

**Properties:**
* **font-size:** 26px - Sets the font size to 26 pixels.
* **font-weight:** normal - Sets the font weight to normal (not bold).
* **line-height:** normal - Sets the line height to normal.
* **background:** #303030 - Sets the background color to a dark gray.
* **white-space:** pre-wrap - Preserves whitespace and line breaks.
* **user-select:** none - Prevents the text from being selected.
* **overflow:** hidden - Hides any content that overflows the container.
* **&.closed { ... }**: Applies the following styles only when the component has the class "closed".
    * **max-height:** 0 - Sets the maximum height to 0, effectively hiding the content.
    * **overflow:** hidden - Hides any content that overflows the container.
    * **transition:** max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1) - Adds a smooth transition effect for the max-height property.
* **&.open { ... }**: Applies the following styles only when the component has the class "open".
    * **max-height:** 1200px - Sets the maximum height to 1200 pixels, allowing the content to be visible.
    * **transition:** max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1) - Adds a smooth transition effect for the max-height property.
* **span { ... }**: Applies the following styles to any span element inside the component.
    * **display:** block - Makes the span a block element, taking up the full width of its container.
    * **padding:** 0.8em 2.2em 0.8em 1.2em - Adds padding to the top, right, bottom, and left of the span.
* **@media (max-width: 600px) { ... }**: Applies the following styles only when the screen width is 600 pixels or less.
    * **font-size:** 16px - Decreases the font size to 16 pixels for smaller screens.
    * **line-height:** 22px - Sets the line height to 22 pixels for smaller screens.