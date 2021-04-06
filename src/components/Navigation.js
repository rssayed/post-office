import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Tabs, Tab } from '@material-ui/core';

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
            <Tab label='Logout'  to='/Login' component={Link} />
            </Tabs>
            </AppBar>

       
     
    );
  }
}
export default Navigation