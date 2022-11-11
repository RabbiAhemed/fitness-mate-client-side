import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import { AuthContext } from "../../../UserContext/UserContext";
import "./Header.css";
const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
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
              <Link to="/services" className="text-white">
                Services
              </Link>
              {user && (
                <Link to="/addService" className="text-white">
                  AddService
                </Link>
              )}
              {user && (
                <Link to="/myReviews" className="text-white">
                  MyReviews
                </Link>
              )}

              <Link to="/blogs" className="text-white">
                Blogs
              </Link>
            </Nav>
            <Nav className="nav-items">
              <Link to="/register" className="text-white">
                Register
              </Link>
              {user && user?.uid ? (
                <Button
                  onClick={logOutUser}
                  className="mb-2 fw-bold text-white"
                  variant="dark"
                >
                  Logout
                </Button>
              ) : (
                <Link className="mb-2 fw-bold text-white" to="/login">
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
