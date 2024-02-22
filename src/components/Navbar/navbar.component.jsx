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
      {/* <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark"
        arial-label="Furni navigation bar"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            Furni<span>.</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarsFurni"
          >
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <Link className="nav-link bold" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/about">
                  About us
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/contact">
                  Contact us
                </Link>
              </li>
            </ul>
            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <Link className="nav-link" to="/user">
                <User className="nav-icon" />
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/cart">
                <ShoppingCart className="nav-icon" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
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
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact Us</Link>
              <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                <Link to="/user">
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
