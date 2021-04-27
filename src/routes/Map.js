import React, { Fragment } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { getAllowedRoutes } from '../utils/index';
import { isLoggedIn } from '../utils/index';
import PrivateRoutes from '../config/PrivateRoutes';
import Nav from '../components/Nav'
import MapAllowed from './MapAllowed';

function UsePrivateRoutes() {
  const match = useRouteMatch('/app');
  let allowedRoutes = [];
  if (isLoggedIn()) {
    allowedRoutes = getAllowedRoutes(PrivateRoutes);
    console.log(" HEYYYY These are the allowedroutes..", allowedRoutes);
  }

  else {
    return <Redirect to="/login" />;
  }

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
        isAddNotFound
      />

    </Fragment>
  );
}
export default UsePrivateRoutes;