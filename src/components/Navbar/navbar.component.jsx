import React from "react";

import { Link } from "react-router-dom";
import { User, ShoppingCart } from "react-feather";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import "./navbar.component.css";

export const MyNavbar = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark"
      >
        <Container>
          <Navbar.Brand to="/">
            Furni<span>.</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="position-relative">
            <Nav className="me-auto position-absolute end-0">
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/about">About us</Link>
              <Link to="/services">Services</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact Us</Link>
              <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                <Link to="#">
                  <User className="nav-icon" />
                </Link>
                <Link to="/cart">
                  <ShoppingCart className="nav-icon" />
                </Link>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
