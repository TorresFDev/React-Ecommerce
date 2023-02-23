import React from "react";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

// import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React Ecommerce</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/inicio">Inicio</Link>
            <Link to="/category">Productos</Link>
            <Nav.Link href="#pricing">Nosotros</Nav.Link>
            <CartWidget/>
          </Nav>
        </Container>
      </Navbar>
      </>

      )
    }

      export default NavBar;


