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
          STR: 4,
          DEX: 10,
          CON: 10,
          WIS: 10,
          INT: 10,
          CHA: 10,
        },
      },
    };
  }

  render() {
    const character = this.state.char;

    //Determines the modifier based on the core stat
    const modifier = (num) => Math.floor((num - 10) / 2);

    //Filters down the levels to individual classes with the number of levels in each class that the user has sorted from most levels to least
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
      .sort((a, b) => b[1] - a[1])
      .map((i) => i.join(": "))
      .join("|");

    //Creates an array of the stats keys 
    const statsKeys = Object.keys(character.stats);

    //Gets the core stats and creates an H5 for it
    const stats = statsKeys.map((i) => (
      <h5 key={"coreStat-" + i} id={"coreStat-" + i}>
        {i}: {character.stats[i]}
      </h5>
    ));

    //Gets the modifier and creates an H5 for it
    const modifiers = statsKeys.map((i) => (
      <h5 key={"modifier-" + i} id={"modifier-" + i}>
        {i}: {modifier(character.stats[i])}
      </h5>
    ));

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
              {stats}
            </Col>
            <Col lg={2}>
              <h1>Modifiers</h1>
              {modifiers}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
