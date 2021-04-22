import React, { memo } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link, useHistory } from "react-router-dom";
import  isLoggedIn from '../config/isLoggedIn';

//useHistory.. so do we still gotta use this..?
function Nav(props) {
 let history = useHistory();

 function handleLogout() {
  localStorage.removeItem('roles');
  history.push('/');
  }
 //i'll see if i can just use the old navbar.. and pass the props through that
 return (
  <div className={`w3-bar w3-padding w3-card ${props.className}`} >
   <div className="w3-display-topleft w3-padding-large w3-xlarge">
    RBAC-V2
   </div>
   <div className="w3-right">
    {props.routes.map(({ path, title }) => (
     <Link 
       key={path} 
       className="w3-bar-item" 
       to={`${props.prefix}${path}`}
     >
       {title}
     </Link>
    ))}
    {isLoggedIn() && <Button onClick={handleLogout}>Logout</Button> }
   </div>
  </div>
 );
}
//sets up the proptypes.. routes, path, title, 
Nav.propTypes = {
 routes: PropTypes.arrayOf(
  PropTypes.shape({
   path: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired
  })
 ).isRequired,
 prefix: PropTypes.string,
 className: PropTypes.string
};
//setting up the prop types for the navigation bar
Nav.defaultProps ={
 prefix: '',
 className: ''
};
/*
    import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs  from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
class Navigation extends React.Component {
  render() {

    const styles = {
        appBar: {
          flexWrap: 'wrap',
          color: '#ffffff',
          bgcolor: '#0645AE'   
        },
        tabs: {
          width: '100%'
        }
    }
    return (
            <AppBar position= "sticky" style={styles.appBar}>
              <Tabs style={styles.tabs}>
                <Tab label='Track Package'  to='/Track' component={Link} />
                <Tab label='Create Package'  to='/CreatePackage' component={Link} /> 
                <Tab label='Update Status'  to='/UpdatePackage' component={Link} />
                <Tab label='Delete Package'  to='/Delete' component={Link} />
                <Tab label='Order History' to='/OrderHistory' component={Link} />
                <Tab label='Edit Profile'  to='/Profile' component={Link} />
                <Tab label='Logout'  to='/Login' component={Link} />
              </Tabs>
            </AppBar>
    );
  }
}
*/

export default memo(Nav);
/*
React.memo 
returns a new memoized component 
It outputs the same content as the original component
but with one difference.
The rendered content is memoized. 
As long as props are the same 
between renderings React reuses the memoized content.
*/