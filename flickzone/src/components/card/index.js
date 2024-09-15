import React, { useState, useContext, createContext } from 'react';

import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Meta,
  Entities,
  Item,
  Image,
} from './styles/card';

// Feature Context for the card
export const FeatureContext = createContext();

//Card component (Main component) that renders the card container
export default function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

// Card Group (Group of cards) 
Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

//Card Title (Movie Title) 
Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

//Card SubTitle (Genre)
Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

//Card Text (Description)
Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

//Card Entities (Group of items)
Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

// Card Meta (Meta data)
Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

//Card Item (Individual item) that renders the item container
Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);
  
  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

//Card Image (Image of the item)
Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};

//Card Feature (Feature of the item) that renders the feature container
Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);

  return showFeature ? (
    <Feature {...restProps} src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>

        {children}
      </Content>
    </Feature>
  ) : null;
};
