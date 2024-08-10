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
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="">
              <ul className="custom-navbar-nav navbar-nav mb-2 mb-md-0">
                <Link to="/" className="mx-3 my-2">
                  Home
                </Link>
                <Link to="/shop" className="mx-3 my-2">
                  Shop
                </Link>
                <Link to="/about" className="mx-3 my-2">
                  About us
                </Link>
                <Link to="/services" className="mx-3 my-2">
                  Services
                </Link>
                <Link to="/blog" className="mx-3 my-2">
                  Blog
                </Link>
                <Link to="/contact" className="mx-3 my-2">
                  Contact Us
                </Link>
              </ul>
              <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5 my-2">
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
