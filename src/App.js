import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signup'
//import Dashboard from './pages/dashboard'

import Dashboard from './base/dashboard/dashboard'
import Landing from './base/landing/landing'

import Team from './pages/team'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
      <Switch>

        <Route path="/base/dashboard">
          <Dashboard />
        </Route>
        <Route path="/base/landing">
          <Landing />
        </Route>


        <Route path="/team">
          <Team />
        </Route>
        <Route path="/home">
          <Home />
        </Route>


        <Route path="/signup">
          <SignUp />
        </Route>


        <Route path="/login">
          <Login />
        </Route>

        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
