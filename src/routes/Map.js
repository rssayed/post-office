import React, { Fragment } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { getAllowedRoutes} from '../utils/index';
import { isLoggedIn } from '../utils/index';
import PrivateRoutes from '../config/PrivateRoutes';
import Nav from '../components/Nav'
import MapAllowed from './MapAllowed';

//yeah lets try to use w3 css bars..

//pass the mapping array into here.
//the useRouteMatch be wrong
function UsePrivateRoutes() {
 const match = useRouteMatch('/app');
 let allowedRoutes = [];
    //if we are logged in.. get the allowed routes..
 if (isLoggedIn()) {
   allowedRoutes = getAllowedRoutes(PrivateRoutes);
   console.log(" HEYYYY These are the allowedroutes..",allowedRoutes);
 } else {
   return <Redirect to="/" />;
   //alert("Hi, you need to login and receive authentication")
 }
 //else redirect to "/ and print you do not have acess to this website"
 return (
  <Fragment>
   <Nav     //Navigationbar..
     routes={allowedRoutes} 
     prefix={match.path}
     className="bg-white" 
   />
   <MapAllowed
     routes={allowedRoutes} 
     basePath="/app" 
     isAddNotFound    //take you to Home..
   />
  </Fragment>
 );
}
//so it actually returns the NavBar with my allowedRoutes..
export default UsePrivateRoutes;