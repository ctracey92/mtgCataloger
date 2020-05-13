import React, { Component } from "react";

import Header from "../../components/Navbar/Navbar";

import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      char: {
        username: "Honorius",
        levels: [
          "Warlock",
          "Warlock",
          "Warlock",
          "Warlock",
          "Warlock",
          "Sorcerer",
          "Sorcerer",
          "Sorcerer",
          "Sorcerer",
        ],
        stats: {
          str: 4,
          dex: 10,
          con: 10,
          wis: 10,
          int: 10,
          cha: 10,
        },
      },
    };
  }

  render() {
    const modifier = (num) => Math.floor((num - 10) / 2);
    const character = this.state.char;
    let lvls = character.levels
      .reduce((sum, i) => {
        if (sum.length > 0) {
          let includes = false;
          sum.map((item, index) => {
            if (item.includes(i)) {
              sum[index][1]++;
              includes = true;
            }
          });
          if (!includes) {
            sum.push([i, 1]);
          }
        } else {
          sum.push([i, 1]);
        }

        return sum;
      }, [])
      .map((i) => i.join(": "))
      .join("|");

    
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col lg={3}>
              <h4>Username: {character.username}</h4>
            </Col>
            <Col lg={9}>
              <h4>
                <b>Levels:</b> {lvls}
              </h4>
            </Col>
          </Row>
          <Row>
            <Col lg={2}>
              <h1>Stats</h1>
              <h5>STR: {character.stats.str}</h5>
              <h5>DEX: {character.stats.dex}</h5>
              <h5>CON: {character.stats.con}</h5>
              <h5>WIS: {character.stats.wis}</h5>
              <h5>INT: {character.stats.int}</h5>
              <h5>CHA: {character.stats.cha}</h5>
            </Col>
            <Col lg={2}>
              <h1>Modifiers</h1>
              <h5>STR: {modifier(character.stats.str)}</h5>
              <h5>DEX: {modifier(character.stats.dex)}</h5>
              <h5>CON: {modifier(character.stats.con)}</h5>
              <h5>WIS: {modifier(character.stats.wis)}</h5>
              <h5>INT: {modifier(character.stats.int)}</h5>
              <h5>CHA: {modifier(character.stats.cha)}</h5>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
