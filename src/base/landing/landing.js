import React from 'react';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Assets
import logo from '../../assets/logo.png'

class Landing extends React.Component {

  constructor(props){
    super(props)
    this.props = props;
  }

  render() {
    return (
    <Container fluid  style={{ padding: 0 }}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img alt="" src={logo} height="50" className="d-inline-block align-top"/>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Why Incremento?</Nav.Link>
          <Nav.Link href="#features">Product</Nav.Link>
          <Nav.Link href="#pricing">Services</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Button variant="outline-light">Login</Button>
        </Nav>
      </Navbar>
      <div style={{ marginTop: "4em" }}>
        { this.props.children }
      </div>
    </Container>);
  }
}

export default Landing;