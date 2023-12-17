// Header.js

import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import the Bootstrap styles
import './Header.css';
import Clock from './Clock';

const Header = () => {
  return (
    <header className='Header'>
      <Navbar bg="#333" variant="dark">
        <Navbar.Brand> TechBiz </Navbar.Brand>
        <Clock/>
        <Nav className="Nav-btns">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <NavDropdown
            title="Services"
            id="basic-nav-dropdown"
            drop="down" // Set the direction of the dropdown
          >
            <NavDropdown.Item href="#">Service 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Service 2</NavDropdown.Item>
            <NavDropdown.Item href="#">Service 3</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
