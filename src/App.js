/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import axios from 'axios';
import Home from './components/Home';
import { BrowserRouter as Router} from "react-router-dom";
import Login from './components/login';
import DeletePackage from './components/DeletePackage';
import Profile from './components/profile';
import Trackinghistory from './components/Trackinghistory';
import Navigation from './components/Navigation';
import OrderHistory from './components/orderHistory';
import CreatePackage from './components/CreatePackage';
import UpdatePackage from './components/UpdatePackage';
import Nav2 from './components/Nav2';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus() {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then(response => {
        if (
          response.data.logged_in &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          });
        } else if (
          !response.data.logged_in &
          (this.state.loggedInStatus === "LOGGED_IN")
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
          });
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
  }

  render() {
    return (
      <div className="App">
        <div /* BrowserRouter is used for dynamic web pages 
            handles history already for us. Keeps UI in sync with
            url.
            
            {...props}
            Passes the props for the login state to every page..
            we can now see the user role, and keep track of the loggedIn
            status.
    
            When ever a user gets routed to the page, give them the navigation
            bar assigned to their role.

            As well as the web page assigned to their role. 
            Still need to add the role part, but will try to get this to work.
            */            
            >          
        </div>   

        <BrowserRouter> 
          <Switch>   
            
          <Route
              exact
              path ="/" >
              <Redirect to="/Login" />

          </Route>   
          
          <Route
              exact
              path={"/Login"}
              render={props => (
                <Login
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            
            <Route
              exact
              path={"/Home"}
              render={props => (
                <Home
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route
              exact
              path={"/Delete"}
              render={props => (
                <DeletePackage
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
          <Route
              exact
              path={"/Track"}
              render={props => (
                <Trackinghistory
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
          <Route
              exact
              path={"/Profile"}
              render={props => (
                <Profile
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
          <Route
              exact
              path={"/CreatePackage"}
              render={props => (
                <CreatePackage
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            /> 
          <Route
              exact
              path={"/UpdatePackage"}
              render={props => (
                <UpdatePackage
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route
              exact
              path={"/OrderHistory"}
              render={props => (
                <OrderHistory
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />

          </Switch>      
        </BrowserRouter>
      </div>
    );
  }
}

