import React, { memo } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link, useHistory } from "react-router-dom";
import { isLoggedIn } from '../utils/index';
import AppBar from '@material-ui/core/AppBar';
import Tabs  from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
function Nav(props) {
	let history = useHistory();

	function handleLogout() {
		localStorage.removeItem('roles');
		history.push('');
	}
  const useStyles = makeStyles((theme) => ({
    root: {
      //flexGrow: 1,
      //backgroundColor: theme.palette.background.paper,
    },
  }));
  

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
  
 
 
  
	return (
    <div className={classes.root}>
		<AppBar position = "sticky"> 
    <Tabs value = {null}>
       
        {props.routes.map(
        ({title, path})=>
        <Tab key={path} 
          label = {title}
          component={Link}
          value = {null}
          to={`${props.prefix}${path}`}
          />
        )
       
    }
       
       {isLoggedIn() && 
       
       <Tab
        label = {"Logout"}
        component={Link}
        onClick = {handleLogout}
        value = {null}
        to={''}
       
       />


       
       }
      
  
    </Tabs>
    </AppBar>
     </div>
	);
}

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

Nav.defaultProps ={
	prefix: '',
	className: ''
};

export default memo(Nav);