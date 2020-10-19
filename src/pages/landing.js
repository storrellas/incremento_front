import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png'
import landing from '../assets/landing.png'


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
        <Col className="ml-3 mt-3"  style={{ height: "50vh", fontSize: "20px"  }}>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <div>       
                <p><b>Signup for all of these great reasons</b></p>
                <p>Reason1</p>
                <p>Reason1</p>
                <p>Reason1</p>
                <div className="text-center">
                  <Button>
                    <b>Sign up</b>
                  </Button>
                </div>                
              </div>
            </Col>
          </Row>
        </Col>
        <Col style={{ height: 50 }}>
        <img
            alt=""
            src={landing}
            
            className="d-inline-block align-top"
          />
        </Col>
      </Row>
    </div>);
  }
}

export default Landing;