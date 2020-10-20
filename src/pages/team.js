import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import './styles.css'

import team from '../assets/team.png'
import Dasboard from '../base/dashboard/dashboard'

class Team extends React.Component {
  render() {
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