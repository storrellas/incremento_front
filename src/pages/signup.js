import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png'
import landing from '../assets/landing.png'


class SingUp extends React.Component {
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
          />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Why Incremento?</Nav.Link>
          <Nav.Link href="#features">Product</Nav.Link>
          <Nav.Link href="#pricing">Services</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Button variant="outline-light">Login</Button>
        </Nav>
      </Navbar>

      <Row style={{ marginTop: "4em" }}>
      
        
      </Row>


      <Row>
        <Col className="mt-3 " md={{ span: 6, offset: 3 }}>
        <h2 className="text-center">Sign Up for Incremento</h2>
        <Form style={{ marginTop:"3em"}}>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                Email Address
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="email" placeholder="Email" />
              </Col>
            </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={4}>
                  Password
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="password" placeholder="Password" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={4}>
                  Confirm Password
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="password" placeholder="Password" />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type="submit">Sign Up</Button>
                </Col>
              </Form.Group>
            </Form>

        </Col>
      </Row>
    </div>);
  }
}

export default SingUp;