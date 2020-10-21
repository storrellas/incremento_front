import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


//import './styles.css'

import project from '../assets/project.png'
import Dasboard from '../base/dashboard/dashboard'

class ProjectList extends React.Component {

  render() {
    return (
      <Dasboard>
        <div className="h-100" style={{ display: 'flex', flexDirection: 'column'}}>

          <div className="text-center" style={{ border: "3px solid orange", borderRadius: "5px", color: 'orange', paddingTop: '1em', paddingBottom: '1em' }}>
            Confirm email address
          </div>

          <div className="mt-3" style={{ background: 'white', color: 'grey', flexGrow: 2 }}>
            <div className="text-center pt-3">
              <p>Markagency has no active projects.</p>
              <p>Create one below to start creating automations</p>
            </div>
            <div className="text-center">
              <Button variant="outline-light" style={{ color: 'grey', borderColor: 'grey' }}>
                <b>Create a project</b>
              </Button>
            </div>
            <div className="text-center">
              <img alt="" src={project} className="mt-3 d-inline-block align-top" style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </Dasboard>
    );
  }
}

export default ProjectList;