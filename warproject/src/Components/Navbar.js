import React from 'react';
import { Navbar, Nav, NavDropdown,Form,FormControl,Button,Container} from 'react-bootstrap';
import { Route, Link, Switch, Redirect } from 'react-router-dom'

const Navbarnew = () => {
    return (
      <>
      <Navbar bg="dark" variant="dark">
     
        <Navbar.Brand href="#home">WAR Official site</Navbar.Brand>
        <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/login">sign in?</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact us">contact Us</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
     
    </>
    )}
export default Navbarnew;