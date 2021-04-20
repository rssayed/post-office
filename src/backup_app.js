import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/login';
import DeletePackage from './components/DeletePackage';
import Profile from './components/profile';
import Trackinghistory from './components/Trackinghistory';
import Navigation from './components/Navigation';
import OrderHistory from './components/orderHistory';
import CreatePackage from './components/CreatePackage';
import UpdatePackage from './components/UpdatePackage';

function Backup_App() {
  return (
    <div className="App">
      <Router>
          {/*
              Navigation bar on every page.. that routes to 
              the location of what ever link is clicked.
              Ex: Delete goes to /Delete

              There needs to be a switch to see if the user is
              a customer or a manager. And then it will 
              give a special navbar along with routing options for it.
              ----------------------------------
          
              switch
              
                case: customer
                  navbar customer
                  routing customer   
                
                  case: manager
                  navbar manager
                  routing manager
          */}
          <Navigation />
          <Route path='/Login' component={Login} />
          <Route exact path='/Delete' component={DeletePackage} />
          <Route exact path='/Track' component={Trackinghistory} />
          <Route exact path='/Profile' component={Profile} />
          <Route exact path='/CreatePackage' component={CreatePackage} />
          <Route exact path='/UpdatePackage' component={UpdatePackage} />
          <Route exact path='/OrderHistory' component={OrderHistory} />
      </Router> 
    </div>
  );
}

export default Backup_App;