import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./navbar.css"



function NavBar() {
  return (
    <>
    <Navbar expand="lg" className="body-tertiary" bg="dark" variant={"dark"}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/Persona">Persona</Nav.Link>
          <Nav.Link as={Link} to="/Texto">Texto</Nav.Link>
          <Nav.Link as={Link} to="/Datos">Datos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;


//https://i.ibb.co/PMJjywc/viki-logo.png