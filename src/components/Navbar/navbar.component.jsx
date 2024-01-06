import React from "react";
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
          <Navbar.Brand href="#home">
            Furni<span>.</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="">
              <Nav.Link href="#home" className="active">
                Home
              </Nav.Link>
              <Nav.Link href="#shop">Shop</Nav.Link>
              <Nav.Link href="#about">About us</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contact">Contact us</Nav.Link>
            </Nav>
            <Nav.Link href="#user">
              <User className="nav-icon" />
            </Nav.Link>
            <Nav.Link href="#cart">
              <ShoppingCart className="nav-icon" />
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
