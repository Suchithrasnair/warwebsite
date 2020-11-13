import React from 'react';
import { Navbar, Nav, NavDropdown,Form,FormControl,Button,Container} from 'react-bootstrap';
import { Route, Link, Switch, Redirect } from 'react-router-dom'

const Navbarupdated = () => {
 

   
        return (
            <>
            <Navbar bg="dark" variant="dark">
           
              <Navbar.Brand href="/register">WAR Official site</Navbar.Brand>
              <Navbar.Collapse>
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/login">home</Nav.Link>
                {/* <Button type="submit" onClick={visibleabout}>About</Button> */}
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                {/* <Nav.Link as={Link} to="/contact us">contact Us</Nav.Link> */}

                <NavDropdown title="Contact" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">1234565</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">67567573</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">789678657</NavDropdown.Item>
        
      </NavDropdown>
              </Nav>
              </Navbar.Collapse>
            </Navbar>
           
          </>
    )
}

export default Navbarupdated;