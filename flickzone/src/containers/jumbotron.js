import React from 'react';
import jumboData from '../fixtures/jumbo';
import { Jumbotron } from '../components';

// The JumbotronContainer component is a container that displays the jumbotron.
// It uses the Jumbotron component to display the jumbotron.
export function JumbotronContainer() {
  return (
          <Jumbotron.Container>
                {jumboData.map((item) => (
                        <Jumbotron key={item.id} direction={item.direction}>
                                <Jumbotron.Pane>
                                        <Jumbotron.Title>{item.title}</Jumbotron.Title>
                                        <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                                </Jumbotron.Pane>
                                <Jumbotron.Pane>
                                        <Jumbotron.Image src={item.image} alt={item.alt} />
                                </Jumbotron.Pane>
                        </Jumbotron>
                ))}
          </Jumbotron.Container>
  );
}

