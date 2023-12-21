// Header.js
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Clock from './Clock';

const Header = () => {
  return (
    <header className='Header'>
      <Navbar>
        <Navbar.Brand> TechBiz </Navbar.Brand>
        <Clock />
        <Nav className="Nav-btns">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <NavDropdown Link to="/services"
            title="Services"
            id="basic-nav-dropdown"
            drop="down"
          >
            <NavDropdown.Item href="#">Service 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Service 2</NavDropdown.Item>
            <NavDropdown.Item href="#">Service 3</NavDropdown.Item>
          </NavDropdown>
          <Link to="/contact">Contact</Link>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
