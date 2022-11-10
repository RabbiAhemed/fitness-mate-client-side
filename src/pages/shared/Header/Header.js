import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg=""
        variant="dark"
        id="nav-color"
        style={{ backgroundColor: "rgb(5, 5, 40)" }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            FITNESS MATE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav-items">
              <Link to="/" className="text-white">
                Home
              </Link>
              <Link to="/About" className="text-white">
                About
              </Link>

              <Link to="/Blogs" className="text-white">
                Blogs
              </Link>
            </Nav>
            <Nav className="nav-items">
              <Link to="/Register" className="text-white">
                Register
              </Link>
              <Link to="/login" className="text-white">
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
