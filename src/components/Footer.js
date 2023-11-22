import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Footerupward from "./Footerupward";

const Footer = () => {
  return (
    <div style={{ color: "white", backgroundColor: "grey" }}>
      <Footerupward />
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="justify-content-center">
          {/* <Navbar.Brand href="#home">F.Q.A</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">F.Q.A</Nav.Link>
              <Nav.Link href="#home">About Us</Nav.Link>
              <Nav.Link href="#link">Career</Nav.Link>
              <Nav.Link href="#home">Blog</Nav.Link>
              <Nav.Link href="#link">Privacy Policy</Nav.Link>
              <Nav.Link href="#link">Terms & Conditions</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
