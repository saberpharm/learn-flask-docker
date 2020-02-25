import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = props => (
  <Container>
    <Navbar collapseOnSelect bg="light" expand="lg">
      <Navbar.Brand href="/">
        <span>{props.title}</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          {window.localStorage.authToken && (
            <Nav.Link href="/status">User Status</Nav.Link>
          )}
        </Nav>
        <Nav>
          {!window.localStorage.authToken && (
            <Nav.Link href="/register">Register</Nav.Link>
          )}
          {!window.localStorage.authToken && (
            <Nav.Link href="/login">Log In</Nav.Link>
          )}
          {window.localStorage.authToken && (
            <Nav.Link href="/logout">Log Out</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>
);

export default NavBar;
