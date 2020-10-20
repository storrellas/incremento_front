import React from 'react';
import { Button, Row, Col} from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Landing from '../base/landing/landing'


class SignUp extends React.Component {
  render() {
    return (
    <Landing>
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
    </Landing>);
  }
}

export default SignUp;