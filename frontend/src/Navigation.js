import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'


class Navigation extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-default horizontal-navbar">
        <a className="navbar-brand" href="#">
        
        </a>

        <div className="links-navbar-div">
          
          <div className="btn-nav">
            
            <ul className="nav navbar-nav navbar-right">
              <li>
                <NavLink to="/Delete">Delete Package</NavLink>
              </li>
              <li>
                <NavLink to="/Track">Track</NavLink>
              </li>
              <li>
                <NavLink to="/Profile">Profile</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navigation