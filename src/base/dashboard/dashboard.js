import React from 'react';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faCog, faQuestion, faColumns, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
// Styles
import './dashboard.css'
// Assets
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
    this.setState({project_list: !this.state.project_list})
  }

  render() {
    const submenu_classes = (this.state.project_list?"":"submenu-hidden ") + " submenu list-group"


    return (
      <Container fluid>
        <Row>
          <Col xs={2} style={{backgroundColor: "#180430", height: '100vh'}}>
          
            <img alt="" src={logo} className="mt-3 d-inline-block align-top" style={{ width: "100%"}} />

            <div style={{ marginTop: '2em', fontSize: '20px' }}>

              <ul className="list-group">
                <li className="list-group-item" style={{ paddingLeft: 0, paddingRight: 0, backgroundColor: 'transparent' }} >
                  <button className="menu" href="#">
                    <FontAwesomeIcon className="mr-2" icon={faColumns} /><span>Dashboard</span>
                  </button>
                </li>
                <li className="list-group-item" style={{ paddingLeft: 0, paddingRight: 0, backgroundColor: 'transparent' }} >
                  <button className="menu" href="#">
                    <FontAwesomeIcon className="mr-2" icon={faTasks} /><span>Project</span>
                  </button>
                </li>
                <li className="list-group-item" style={{ paddingLeft: 0, paddingRight: 0, backgroundColor: 'transparent' }} onClick={(e) => this.hideMenu(e)}>
                  <button className="menu" href="#">
                    <FontAwesomeIcon className="mr-2" icon={faCommentAlt} /><span>Report</span>
                  </button>
                  <ul className={submenu_classes} style={{ fontSize: '15px', padding: 0 }}>
                    <li className="list-group-item menu" style={{ backgroundColor: 'transparent' }} >
                      <button className="menu" href="#">Home</button>
                    </li>
                    <li className="list-group-item" style={{ paddingTop: 0, paddingBottom: ".25rem", backgroundColor: 'transparent' }} >
                      <button className="menu" href="#">Automation</button>
                    </li>
                    <li className="list-group-item" style={{ backgroundColor: 'transparent' }} >
                      <button className="menu" href="#">Reports</button>
                    </li>
                    <li className="list-group-item" style={{ backgroundColor: 'transparent' }} >
                      <button className="menu" href="#">Linked Accounts</button>
                    </li>
                    <li className="list-group-item" style={{ backgroundColor: 'transparent' }} >
                      <button className="menu" href="#">Settings</button>
                    </li>
                  </ul>
                  
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

            <div style={{ flexGrow: '1' }}>
                {this.props.children}
            </div>
          </Col>

        </Row>
      </Container>);
  }
}

export default Dashboard;