import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./styles.css";
import LOGO from "./lvledFav.png"

export default function Header(props) {
  return (
    <Navbar id="nav" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          LVLed UP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/inventory">Inventory</Nav.Link>
            <Nav.Link href="/404">404</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
