import React from 'react';
import { Navbar, Nav, Row, Col,Table, Container } from 'react-bootstrap'

const UserHome = () => {
    const showRequest = () => {
        const request=document.getElementById("resultTable")
        // request.style.display="block"
       if(request.style.display=="none"){
        request.style.display="block"
       }
       else{
        request.style.display="none"
       }
        }
    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark">

                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        {/* <button type='button' id='btnResult'>ADD RESULT</button> */}
                        
                        <Nav.Link id='linkRequest'>REQUEST FOR SLOT</Nav.Link>
                        <Nav.Link id='linkResult'  onClick={showRequest} >VIEW RESULT</Nav.Link>
                        {/* <button type='button' id='btnResult'>ADD RESULT</button> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
            <Row>
                <Col>
                <h3>Request for Slot</h3>
                <div className="form-group">
                            <label>Pubg Name:</label>
                            <input type="text" className="form-control" placeholder="Pubg Name" />
                        </div>
                        <div className="form-group">
                            <label>Clan Name:</label>
                            <input type="text" className="form-control" placeholder="Clan Name" />
                        </div>


                        <div className="form-group">
                            <label>Contact No.</label>
                            <input type="text" className="form-control" placeholder="mobile number" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">SUBMIT</button>
                </Col>
                <Col></Col>
                <Col>
                
                <div id='resultTable' style={{display:"none"}}>
                    <div>
                    <h3>Match Result</h3>
                    </div>
                    <Table striped bordered hover style={{background:"bisque"}}>
                        <thead>
                            <tr>
                               
                                <th>Clan Name</th>
                                <th>Rank</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                               
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                               
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                    </div>
                </Col>
            </Row>
            </Container>
        </React.Fragment>
    )
}

export default UserHome;