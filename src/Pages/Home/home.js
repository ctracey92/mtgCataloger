import React, { Component } from "react";

import Header from "../../components/Navbar/Navbar";

import { Container, Row, Col, Table } from "react-bootstrap";

//Data will eventuall be piped in from the DB
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

    //***Will eventually add in some conditional formatting so that the numbers will have corresponding colors based on their values.***
    //Gets the core stats/modifier and creates an table row for it
    const stats = statsKeys.map((i) => (
      <tr key={i} id={i}>
        <td>{i}</td>
        <td>{character.stats[i]}</td>
        <td>{modifier(character.stats[i])}</td>
      </tr>
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
                <b>Levels: {lvls}</b>
              </h4>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
              <h1 className="d-flex justify-content-center">Stats</h1>
              <Table bordered>
                <thead>
                  <tr>
                    <th></th>
                    <th>Roll</th>
                    <th>Mod</th>
                  </tr>
                </thead>
                <tbody>{stats}</tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
