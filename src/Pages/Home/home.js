import React, { Component } from "react";

import Header from "../../components/Navbar/Navbar";

import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      str: 4,
      dex: 10,
      con: 10,
      wis: 10,
      int: 10,
      cha: 10,
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col>
              <h1>Stats</h1>
              <h3>STR: {this.state.str}</h3>
              <h3>DEX: {this.state.dex}</h3>
              <h3>CON: {this.state.con}</h3>
              <h3>WIS: {this.state.wis}</h3>
              <h3>INT: {this.state.int}</h3>
              <h3>CHA: {this.state.cha}</h3>
            </Col>
            <Col>
              <h1>Modifiers</h1>
              <h3>STR: {Math.floor((this.state.str-10)/2)}</h3>
              <h3>DEX: {Math.floor((this.state.dex-10)/2)}</h3>
              <h3>CON: {Math.floor((this.state.con-10)/2)}</h3>
              <h3>WIS: {Math.floor((this.state.wis-10)/2)}</h3>
              <h3>INT: {Math.floor((this.state.int-10)/2)}</h3>
              <h3>CHA: {Math.floor((this.state.cha-10)/2)}</h3>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
