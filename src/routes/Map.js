import React, { Fragment } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { getAllowedRoutes} from '../config/getAllowedRoutes';
import isLoggedIn from './isLoggedIn';
import PrivateRoutes from '../config/PrivateRoutes';
import Nav from '../components/Nav'
import MapAllowed from './MapAllowed';

//yeah lets try to use w3 css bars..

//pass the mapping array into here.
//the useRouteMatch be wrong
function UsePrivateRoutes() {
 const match = useRouteMatch('../App');
 let allowedRoutes = [];
    //if we are logged in.. get the allowed routes..
 if (isLoggedIn()) {
   allowedRoutes = getAllowedRoutes(PrivateRoutes);
 } else {
   return <Redirect to="/" />;
   //alert("Hi, you need to login and receive authentication")
 }
 //else redirect to "/ and print you do not have acess to this website"
 return (
  <Fragment>
   <Nav     //Navigationbar..
     routes={allowedRoutes} 
     path={match.path}
     className="bg-white" 
   />
   <MapAllowed
     routes={allowedRoutes} 
     basePath="../App" 
     isAddNotFound 
   />
  </Fragment>
 );
}
//what does fragment do react..? lets you group multiple elements.. in this case..
// topnav and fragment..
export default UsePrivateRoutes;