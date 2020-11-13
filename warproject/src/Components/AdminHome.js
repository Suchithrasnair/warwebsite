import React from 'react';
import { Navbar, Nav, Row, Col, Container,Table } from 'react-bootstrap'

const AdminHome = () => {
    const showRequest = () => {
    const request=document.getElementById("requestTable")
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
                        <Nav.Link id='linkResult' >ADD RESULT</Nav.Link>
                        <Nav.Link id='linkRequest' onClick={showRequest}>REQUEST</Nav.Link>
                        {/* <button type='button' id='btnResult'>ADD RESULT</button> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Row>
                    <Col>
                        <h3>Add Result</h3>
                        <div className="form-group">
                            <label>Clan Name:</label>
                            <input type="text" className="form-control" placeholder="Clan Name" />
                        </div>


                        <div className="form-group">
                            <label>Position:</label>
                            <input type="text" className="form-control" placeholder="Position" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">SUBMIT</button>
                    </Col>
                    <Col>fvdf</Col>


                    <Col>
                        <div id='requestTable' style={{display:"none"}}>
                    <div>
                    <h3>Requests</h3>
                    </div>
                    <Table striped bordered hover style={{background:"bisque"}}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Pubg Name</th>
                                <th>Clan Name</th>
                                <th>Contact No.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
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
export default AdminHome;