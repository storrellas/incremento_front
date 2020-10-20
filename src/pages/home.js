import React from 'react';

import { Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Landing from '../base/landing/landing'
import landing_logo from '../assets/landing.png'


class Home extends React.Component {
  render() {
    return (
      <Landing>
        <Row>
          <Col className="ml-3 mt-3" style={{ height: "50vh", fontSize: "20px" }}>
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
              src={landing_logo}

              className="d-inline-block align-top"
            />
          </Col>
        </Row>
      </Landing>
    );
  }
}

export default Home;