import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="shadow-sm border-bottom border-light sticky-top"
    >
      <Container className="p-0 container-fluid mb-0 mt-0">
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          Winda Marito
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" style={{ border: "none" }} />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about" className="text-dark">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/skills" className="text-dark">
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/project" className="text-dark">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-dark">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
