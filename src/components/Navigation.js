import React from 'react';
import { AppBar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Tabs } from '@material-ui/core';
import { Tab } from '@material-ui/core';

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