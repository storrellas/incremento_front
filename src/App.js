import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import Dashboard from './base/dashboard/dashboard'
import Landing from './base/landing/landing'

import Home from './pages/home'
import TeamList from './pages/team_list'
import TeamCreate from './pages/team_create'
import SignUp from './pages/signup'
import Login from './pages/login'




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

        <Route path="/team/create">
          <TeamCreate />
        </Route>        
        <Route path="/team">
          <TeamList />
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
