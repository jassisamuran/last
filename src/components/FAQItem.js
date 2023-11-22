// FAQItem.js
import React, { useState } from "react";
import { Card, Accordion, Button } from "react-bootstrap";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="0">
        <Button variant="link" onClick={handleToggle}>
          {question}
        </Button>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Card.Body>{answer}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default FAQItem;
