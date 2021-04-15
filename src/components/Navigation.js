import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs  from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Navigation extends React.Component {
  render() {

    var styles = {
        appBar: {
          flexWrap: 'wrap',
          color: '#ffffff',
          bgcolor: '#0645AE'    /*doesn't work, neither does color'*/
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
export default Navigation