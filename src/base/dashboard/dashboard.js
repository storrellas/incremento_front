import React from 'react';
import ReactDOM from 'react-dom';

import { Container, Row, Col } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faCog, faQuestion, faColumns, faCommentAlt } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css'

import logo from '../../assets/logo.png'

class Dashboard extends React.Component {

  constructor(props){
    super(props)
    this.props = props;
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

    const submenu_classes = (transition_menu?"":"submenu-hidden ") + " submenu list-group"

    return (
      <Container fluid>
        <Row>
          <Col xs={2} style={{backgroundColor: "#180430", height: '100vh'}}>
          
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

                      <ul className={submenu_classes} style={{ fontSize: '15px', padding: 0 }}>
                        <li className="list-group-item menu" style={{ backgroundColor: 'transparent' }} >
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
          
          <Col xs={10} style={{ backgroundColor: "#EEEEEE", padding: 0, display: 'flex', flexDirection: 'column'}}>
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
                {this.props.children}
            </div>
          </Col>

        </Row>
      </Container>);
  }
}

export default Dashboard;