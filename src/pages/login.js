import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



class Login extends React.Component {
  render() {
    return (
    <div style={{backgroundColor: '#EEEEEE', flexDirection: 'column', height: '100vh', justifyContent: 'center', display: 'flex'}}>
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

export default Login;