import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/login';
import DeletePackage from './components/DeletePackage';
import Profile from './components/profile';
import Tracking_history from './components/Tracking_history';
import Navigation from './components/Navigation';
import OrderHistory from './components/orderHistory';
import CreatePackage from './components/CreatePackage';
import UpdatePackage from './components/UpdatePackage';

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
          <Route exact path='/Delete' component={DeletePackage} />
          <Route exact path='/Track' component={Tracking_history} />
          <Route exact path='/Profile' component={Profile} />
          <Route exact path='/CreatePackage' component={CreatePackage} />
          <Route exact path='/UpdatePackage' component={UpdatePackage} />
         
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