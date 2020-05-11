import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../../components/Navbar/Navbar";
import Items from "./Items";
import { ITEMSLIST } from "../../shared/itemslist";

class Inventory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = ITEMSLIST.map((i) => {
      return (
        // <Row>
        <Items item={i} />
        // </Row>
      );
    });
    return (
      <div>
        <Header />
        <Container>
          <h1>Current Inventory</h1>
          <Row>{items}</Row>
        </Container>
      </div>
    );
  }
}

export default Inventory;
