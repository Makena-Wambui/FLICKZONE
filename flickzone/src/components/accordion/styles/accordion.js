import styled from 'styled-components'; // Imports styled-components library 

// Container component with flex layout and border at the bottom
export const Container = styled.div`
  display: flex; // Enables flexbox layout
  border-bottom: 8px solid #222; // Adds border at the bottom
`;

// Frame component with margin at the bottom
export const Frame = styled.div`
  margin-bottom: 40px; // Adds space below the frame
`;

// Inner component with flex layout and padding
export const Inner = styled.div`
  display: flex; // Enables flexbox layout
  padding: 70px 45px; // Adds padding around the inner content
  flex-direction: column; // Stacks children vertically
  max-width: 815px; // Sets maximum width
  margin: auto; // Centers the inner content
`;

// Title component with specific font styles
export const Title = styled.h1`
  font-size: 50px; // Sets font size
  line-height: 1.1; // Adjusts line height for better readability
  margin-top: 0; // Removes top margin
  margin-bottom: 8px; // Adds space below the title
  color: white; // Sets text color to white
  text-align: center; // Centers the title text

  // Responsive font size for smaller screens
  @media (max-width: 600px) {
    font-size: 35px; // Reduces font size on small screens
  }
`;

// Item component with styling for individual items
export const Item = styled.div`
  color: white; // Sets text color to white
  margin: auto; // Centers the item
  margin-bottom: 10px; // Adds space below each item
  max-width: 728px; // Sets maximum width for the item
  width: 100%; // Allows item to take full width

  // Styles for the first item
  &:first-of-type {
    margin-top: 3em; // Adds space above the first item
  }
  // Styles for the last item
  &:last-of-type {
    margin-bottom: 0; // Removes bottom margin for the last item
  }
`;

// Header component with flex layout and clickable cursor
export const Header = styled.div`
  display: flex; // Enables flexbox layout
  justify-content: space-between; // Distributes space between items
  cursor: pointer; // Changes cursor to pointer on hover
  margin-bottom: 1px; // Adds space below the header
  font-size: 26px; // Sets font size
  font-weight: normal; // Sets font weight
  background: #303030; // Sets background color
  padding: 0.8em 1.2em; // Adds padding around the header
  user-select: none; // Prevents text selection
  align-items: center; // Vertically centers items

  // Styles for the image inside the header
  img {
    filter: brightness(0) invert(1); // Inverts image colors
    width: 24px; // Sets image width
    user-select: none; // Prevents image selection

    // Responsive image size for smaller screens
    @media (max-width: 600px) {
      width: 16px; // Reduces image width on small screens
    }
  }

  // Responsive font size for smaller screens
  @media (max-width: 600px) {
    font-size: 16px; // Reduces font size on small screens
  }
`;

// Body component with text styling and transitions
export const Body = styled.div`
  font-size: 26px; // Sets font size
  font-weight: normal; // Sets font weight
  line-height: normal; // Sets line height
  background: #303030; // Sets background color
  white-space: pre-wrap; // Preserves whitespace and wraps text
  user-select: none; // Prevents text selection
  overflow: hidden; // Hides overflow content

  // Styles for the closed state
  &.closed {
    max-height: 0; // Hides content when closed
    overflow: hidden; // Hides overflow content
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1); // Smooth transition for height change
  }
  // Styles for the open state
  &.open {
    max-height: 1200px; // Allows content to be fully visible when open
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1); // Smooth transition for height change
  }

  // Styles for span elements inside the body
  span {
    display: block; // Makes span a block element
    padding: 0.8em 2.2em 0.8em 1.2em; // Adds padding around the span
  }

  // Responsive font size and line height for smaller screens
  @media (max-width: 600px) {
    font-size: 16px; // Reduces font size on small screens
    line-height: 22px; // Adjusts line height for better readability
  }
`;