import React from 'react';

// Bootstrap
import { Button, Row, Col, Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Project
import Dasboard from '../base/dashboard/dashboard'

import ReactChipInput from "react-chip-input";

import './styles.css'

class TeamCreate extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      chips: []
    }
  }

  addChip = value => {
    const chips = this.state.chips.slice();
    chips.push(value);
    this.setState({ chips });
  };
  removeChip = index => {
    const chips = this.state.chips.slice();
    chips.splice(index, 1);
    this.setState({ chips });
  };

  render() {
    return (
      <Dasboard>
        <div className="ml-3 mr-3"  style={{ background: 'white', minHeight: '60vh' }} >
          <Row className="mt-3 pt-3">
            <Col className="text-center">
              <h2>Create a Team</h2>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={4}>Team Name</Col>
            <Col sm={8} style={{ color: '#90C8E1' }}>
            <Form.Control type="text" placeholder="Email" />
            </Col>
          </Row>

          <Row className="mt-3">
            <Col xs={4}>Invite Members</Col>
            <Col sm={8} style={{ color: '#90C8E1' }}>
            <ReactChipInput
                    classes="react-chip"
                    chips={this.state.chips}
                    onSubmit={value => this.addChip(value)}
                    onRemove={index => this.removeChip(index)}
                  />
            </Col>
          </Row>

          <Row className="mt-3" style={{display: 'flex', justifyContent: 'center'}}>
                    <Button type="submit">Create Team</Button>
          </Row>
        </div>
      </Dasboard>
    );
  }
}

export default TeamCreate;