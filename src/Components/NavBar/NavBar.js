import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.scss";
import LOGO from "../../images/Group.png";

export default function NavBar() {
  return (
    <Navbar expand="md" className="NavBar">
      <Container>
        <Navbar.Brand href="#home">
          <img src={LOGO} alt="LOGO" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto NavMenu">
            <Nav.Link href="#whatWeDo">What We Do</Nav.Link>
            <Nav.Link href="#whatWeHaveDone">What We've Done</Nav.Link>
            <Nav.Link href="#howWeDoIt">How We Do It</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
