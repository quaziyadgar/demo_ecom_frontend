import React from "react";

import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { User, ShoppingCart } from "react-feather";
import Nav from "react-bootstrap/Nav";

import "./navbar.component.css";

export const MyNavbar = () => {
  return (
    <>
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand href="/">
            Furni<span>.</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="">
              <Link to="/" className="active">
                Home
              </Link>
              <Link to="/shop" className="onHover">
                Shop
              </Link>
              <Link to="/about">About us</Link>
              <Link to="/services">Services</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact us</Link>
              <Link to="/user">
                <User className="nav-icon" />
              </Link>
              <Link to="/cart">
                <ShoppingCart className="nav-icon" />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
