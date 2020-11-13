import React from 'react';
import { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Footer from './Footer';
import Navbarupdated from './Navbarupdated';
import {useHistory}from 'react-router-dom'

const Login = () => {
    const[username,setusername]=useState("")
    const[password,setpassword]=useState("")
    const history=useHistory()
    const handleUsername=(event)=>{
     setusername(event.target.value)
    }
    const handlePassword=(event)=>{
     setpassword(event.target.value)
    }

    const onsubmitValue=()=>{
        if(username=='admin' && password=='admin123')
        {
        history.push('/adminhome')
        }
        else{
            history.push('/userhome')
            // setpassword("")
            // setusername("")
        }
    }
    return (
       <React.Fragment>
           <Navbarupdated/>
            <Container  className='padding-top-form'>
           <Form onSubmit={onsubmitValue}>
            <Row>
                <Col></Col>
                <Col>
                    <h3>Login</h3>
                    <div className="form-group">
                    <label>Username</label>
                    <input placeholder='enter email address'value={username} className='form-control' type='text' onChange={handleUsername}></input>
                    </div>
                    <div className='form-group'>
                    <label>Password</label>
                    <input type='text' placeholder='password' value={password}className='form-control' onChange={handlePassword}></input>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Login</button>

                </Col>
                <Col></Col>
            </Row>
            </Form>
            </Container>
            <Footer/>
            
            </React.Fragment>
    )
}
export default Login;