import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import Login from './pages/login'
import Landing from './pages/landing'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <Landing />
        </Route>


        <Route path="/home">
          <Home />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
