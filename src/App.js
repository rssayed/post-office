import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/login';

import Deletepackage from './components/Deletepackage';
import Profile from './components/profile';
import Tracking_history from './components/Tracking_history';
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      <Router>
          {/*
              <Profile />
              <Login />
              <Deletepackage />
              <Tracking_history />

              //just type in the url.. localhost:300/Login for example.
              //still need to route everything to a nav bar..
         
          */}

          <Navigation />
          {/*<Login />*/}
          <Route path='/Login' component={Login} />
          <Route exact path='/Delete' component={Deletepackage} />
          <Route exact path='/Track' component={Tracking_history} />
          <Route exact path='/Profile' component={Profile} />
         
         
         {/*
         <Login />
         <Deletepackage />
         <Tracking_history />
          {/*
         <Profile />
         */}
          
      </Router> 
    </div>
  );
}

export default App;