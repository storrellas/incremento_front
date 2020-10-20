import React from 'react';
import ReactDOM from 'react-dom';

import { Button, Container, Row, Col } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../assets/logo.png'
import team from '../assets/team.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faCog, faQuestion, faColumns, faCommentAlt } from '@fortawesome/free-solid-svg-icons'

import './styles.css'


class Dashboard extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      project_list: false
    }
  }

  hideMenu(e){
    console.log("Hide Menu")
    this.setState({project_list: !this.state.project_list})
  }

  render() {
    console.log("Render ", this.state.project_list)

    const transition_menu = this.state.project_list;

    return (
      <Container fluid>
        <Row>
          <Col md={2} style={{backgroundColor: "#180430", height: '100vh'}}>
          
            <img alt="" src={logo} className="mt-3 d-inline-block align-top" style={{ width: "100%"}} />


            <div style={{ marginTop: '2em', fontSize: '20px' }}>

              <ul className="list-group">
                <li className="list-group-item" style={{ backgroundColor: 'transparent' }} >
                  <a className="menu" href="#">
                    <FontAwesomeIcon className="mr-2" icon={faColumns} /><span>Dashboard</span>
                  </a>
                </li>
                <li className="list-group-item" style={{ backgroundColor: 'transparent' }} >
                  <a className="menu" href="#">
                    <FontAwesomeIcon className="mr-2" icon={faTasks} /><span>Project</span>
                  </a>
                </li>
                <li className="list-group-item" style={{ backgroundColor: 'transparent' }} onClick={(e) => this.hideMenu(e)}>
                  <a className="menu" href="#">
                    <FontAwesomeIcon className="mr-2" icon={faCommentAlt} /><span>Report</span>


                      <ul className={transition_menu?"list-group menu-visible":"list-group menu-hidden"} style={{ fontSize: '15px' }}>
                        <li className="list-group-item" style={{ backgroundColor: 'transparent' }} >
                          <a className="menu" href="#">Dashboard</a>
                        </li>
                        <li className="list-group-item" style={{ backgroundColor: 'transparent' }} >
                          <a className="menu" href="#">Project</a>
                        </li>
                        <li className="list-group-item" style={{ backgroundColor: 'transparent' }} >
                          <a className="menu" href="#">Report</a>
                        </li>
                      </ul>

                  </a>
                </li>
              </ul>

            </div>



          </Col>
          
          <Col md={10} style={{ backgroundColor: "#EEEEEE", padding: 0, display: 'flex', flexDirection: 'column'}}>


            <Navbar style={{ backgroundColor: "#999999", color: 'yellow' }}>
              <Nav className="ml-auto">
                <Nav.Link href="#home">test@testdomain.com</Nav.Link>
                <Nav.Link href="#features">
                  <FontAwesomeIcon icon={faCog} />
                </Nav.Link>
                <Nav.Link href="#pricing">
                  Help
                </Nav.Link>
                <Nav.Link href="#pricing">
                  <FontAwesomeIcon icon={faQuestion} />
                </Nav.Link>
              </Nav>
            </Navbar>

            <div className="m-3" style={{ backgroundColor: '#EEEEEE', display: 'flex', flexDirection: 'column', flexGrow: '1' }}>
            
              <div className="text-center" style={{ border: "3px solid orange", borderRadius: "5px", color: 'orange', paddingTop: '1em', paddingBottom: '1em' }}>
                Confirm email address
              </div>

              <div className="mt-3" style={{ backgroundColor: 'white', color: 'grey', flexGrow: 2 }}>

                <div className="text-center pt-3"> 
                  <p>You have no active teams. Create one or get a team admin to invite you.</p>
                </div>

                <div className="text-center">
                  <Button  variant="outline-light" style={{ color: 'grey', borderColor: 'grey' }}>
                    <b>Create a team</b>
                  </Button>
                </div>

                <div className="text-center">
                  <img alt="" src={team} className="mt-3 d-inline-block align-top" style={{ width: "50%"}} />
                </div>


              </div>


            </div>


          </Col>

        </Row>
      </Container>);
  }
}

export default Dashboard;