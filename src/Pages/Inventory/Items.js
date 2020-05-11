import React from "react";
import { Card, Button, Image } from "react-bootstrap";

export default function Items({ item }) {
  return (
    <Card className="text-center m-2"style={{ width: '20rem' }}>
      <Card.Header>{item.name}</Card.Header>
      <Card.Body>
        <Card.Title>Image will go here</Card.Title>
        <Card.Text>{item.text}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        Quantity: {item.quantity}
      </Card.Footer>
    </Card>
  );
}
