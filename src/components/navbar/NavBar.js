import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './NavBar.css'; // Ensure this import is correct
import logo from '../../media/GCLogo.svg';

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto"> {/* Add ml-auto to push links to the right */}
          <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link> {/* Update this link */}
          <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
          <Nav.Link as={Link} to="/garment-viewer">Garment Viewer</Nav.Link>
          <Nav.Link as={Link} to="/workshops">Workshops</Nav.Link>
          <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
          <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
          <Nav.Link as={Link} to="/book-consultation">Book a Consultation</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
