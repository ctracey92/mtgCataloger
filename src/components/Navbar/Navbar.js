import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Header(props) {
  return (
    <Navbar bg="dark" expand="lg" sticky="top">
      <Navbar.Brand href="#home">Nerdy App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/404">404</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

// const colors = {
//     main: "3f351e",
//     secondary: "716145",
//     tertiary: "c0a475",
//     highlight: 'f0db89',
//     accent: '892a26'
// }
