import React from 'react';
import { Accordion } from '../components';
import faqsData from '../fixtures/faqs';
import OptForm from '../components/opt-form';

// The FaqsContainer component is a container that displays the frequently asked questions.
// It uses the Accordion component to display the questions and answers.
export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>
    </Accordion>
  );
}
