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

import Dasboard from '../base/dashboard/dashboard'



class Team extends React.Component {

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

    const submenu_classes = (transition_menu?"":"submenu-hidden ") + " submenu list-group"

    return (
      <Dasboard>            
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

      </Dasboard>);
  }
}

export default Team;