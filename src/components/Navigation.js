import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs  from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Navigation extends React.Component {
  render() {

    var styles = {
        appBar: {
          flexWrap: 'wrap'
        },
        tabs: {
          width: '100%'
        }
    }


    return (


            <AppBar position = "sticky" style={styles.appBar}>
            <Tabs style={styles.tabs}>
            <Tab label='Delete'  to='/Delete' component={Link} />
            <Tab label='Track'  to='/Track' component={Link} />
            <Tab label='Profile'  to='/Profile' component={Link} />
            <Tab label='Create'  to='/CreatePackage' component={Link} />
            <Tab label='Update'  to='/UpdatePackage' component={Link} />
            <Tab label='Logout'  to='/Login' component={Link} />
            </Tabs>
            </AppBar>

       
     
    );
  }
}
export default Navigation