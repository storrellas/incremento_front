import React from 'react';

// Bootstrap
import { Button, Row, Col, Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Project
import Dasboard from '../base/dashboard/dashboard'

class TeamCreate extends React.Component {

  render() {
    return (
      <Dasboard>
        <Container className="mt-3">
          <Row style={{ background: 'white' }}>
            <Col className="mt-3">
              <h2 className="text-center">Create a Team</h2>
              <Form style={{ marginTop: "3em" }}>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={4}>
                    Team Name
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
        </Container>
      </Dasboard>
    );
  }
}

export default TeamCreate;