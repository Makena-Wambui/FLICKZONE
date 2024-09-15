import styled from 'styled-components';

// The Title component is a styled p element with a font-size of 24px, a color of #e5e5e5, a font-weight of bold, and a margin of 56px on the left and right sides and 0 on the top. 
export const Title = styled.p`
  font-size: 24px; 
  color: #e5e5e5; 
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
  margin-top: 0;
`;

// The Container component is a styled div element with a display of flex, a flex-direction of column, and a margin-bottom of 50px.
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

// The Group component is a styled div element with a display of flex, a flex-direction of row or column, an align-items property that is set to the value of the alignItems prop, and a margin property that is set to the value of the margin prop.
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

// The SubTitle component is a styled p element with a font-size of 12px, a color of #fff, a font-weight of bold, a margin-top of 0, a margin-bottom of 0, and a user-select property set to none.
export const SubTitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

// The Text component is a styled p element with a margin-top of 5px, a font-size of 10px, a color of #fff, a margin-bottom of 0, a user-select property set to none, a display property set to none, and a line-height property set to normal.
export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;

// The Entities component is a styled div element with a display of flex and a flex-direction of row.
export const Entities = styled.div`
  display: flex;
  flex-direction: row;
`;

// The Meta component is a styled div element with a display of none, a position of absolute, a bottom of 0, a padding of 10px, and a background-color of #0000008f.
export const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
`;

// The Image component is a styled img element with a border of 0, a width of 100%, a max-width of 305px, a cursor of pointer, a height of auto, and a padding and margin of 0.
export const Image = styled.img`
  border: 0;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
`;

// The Item component is a styled div element with a display of flex, a flex-direction of column, a margin-right of 5px, a position of relative, and a cursor of pointer. It also has a transition property that changes the transform property over 0.2 seconds when the item is hovered over. When the item is hovered over, the transform property is set to scale(1.3) and the z-index is set to 99. When the item is hovered over, the Meta, Text, and SubTitle components are displayed with a z-index of 100. The first Item component has a margin-left of 56px, and the last Item component has a margin-right of 56px.
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

// The FeatureText component is a styled p element with a font-size of 18px, a color of white, a font-weight of bold if the fontWeight prop is set to bold, and a margin of 0. The line-height is set to 22px when the screen width is less than 600px.
export const FeatureText = styled.p`
  font-size: 18px;
  color: white;
  font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 'bold' : 'normal')};
  margin: 0;

  @media (max-width: 600px) {
    line-height: 22px;
  }
`;

// The Feature component is a styled div element with a display of flex, a flex-direction of row, a background-image that is set to the value of the src prop, a background-size of contain, a position of relative, a height of 360px, a background-position-x of right, a background-repeat of no-repeat, and a background-color of black. When the screen width is less than 1000px, the height is set to auto, the background-size is set to auto, the font-size of the Title component is set to 20px, the line-height of the Title component is set to 20px, the margin-bottom of the Title component is set to 10px, and the font-size of the FeatureText component is set to 14px.
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

// The FeatureTitle component is a styled Title component with a margin-left of 0.
export const FeatureTitle = styled(Title)`
  margin-left: 0;
`;

// The FeatureClose component is a styled button element with a color of white, a position of absolute, a right of 20px, a top of 20px, a cursor of pointer, a background-color of transparent, and a border of 0. The img element inside the FeatureClose component has a filter of brightness(0) invert(1) and a width of 24px.
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

// The Content component is a styled div element with a margin of 56px, a max-width of 500px, and a line-height of normal. When the screen width is less than 1000px, the margin is set to 30px and the max-width is set to none.
export const Content = styled.div`
  margin: 56px;
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`;

// The Maturity component is a styled div element with a background-color of #f44336 if the rating is greater than or equal to 15, and #2f9600 if the rating is less than 15. It has a border-radius of 15px, a width of 28px, a line-height of 28px, a text-align of center, a color of white, a font-weight of bold, a text-shadow of 2px 2px 4px rgba(0, 0, 0, 0.2), a margin-right of 10px, and a font-size of 12px.
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
