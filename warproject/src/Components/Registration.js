import React from 'react';
import { Col, Container, Form, Navbar, Row } from 'react-bootstrap';
import './myStyles.css'
import Navbarnew from './Navbarupdated'
import {Link} from 'react-router-dom'
import Footer from './Footer';

const Registration = () => {
    

    return (
        <React.Fragment>
           <Navbarnew/>
            <Container>
        <Form>
           
       
<Row>
    <Col></Col>
    <Col>
         <h3>Sign Up</h3>
        <div className="form-group">
            <label>First name</label>
            <input type="text" className="form-control" placeholder="First name" />
        </div>
       

        <div className="form-group">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
        </div>

        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
        <p className="forgot-password text-right">
            Already registered <Link to="/login">sign in?</Link>
        </p>
     </Col>
    <Col></Col>
    </Row>
    </Form>
    
    </Container>
    
   <Footer/>
    </React.Fragment>
    )
}

export default Registration;