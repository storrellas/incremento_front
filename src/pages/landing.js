import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png'


class Landing extends React.Component {
  render() {
    return (
    <div>

      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            height="50"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Why Incremento?</Nav.Link>
          <Nav.Link href="#features">Product</Nav.Link>
          <Nav.Link href="#pricing">Services</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Button variant="outline-light">Login</Button>
        </Nav>
      </Navbar>





      <div style={{ display: "flex", minHeight: "45%", width: "30%", minWidth: "200px", 
                    border: "3px solid #7F8C8D", borderRadius: "5px", alignSelf: 'center', backgroundColor: '#A6ACAF'}}>
        <Container style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Row>
            <Col>
              <h3>Omerte</h3>
              <Form>
                
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col style={{ textAlign: 'right'}}>
              <Button>Login</Button>
            </Col>
          </Row>
        </Container>

      </div>    

    </div>);
  }
}

export default Landing;