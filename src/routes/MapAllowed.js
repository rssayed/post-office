import React, { memo } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import CreatePackage from '../components/CreatePackage';
import NotFound from '../components/NotFound';

function MapAllowed({routes, basePath, isAddNotFound}) {
	const match = useRouteMatch(basePath);
	return (
		<Switch>
			{routes.map((route) => {
				/*
				* some variables are used by below code
				* some are not used by the code but destructure due to remove from rest object
				* just make sure that rest object only contain props that supported by react-router's route component
				* you may find props list here https://reactrouter.com/web/api/Route
				*/
				const { path, component: Component,title, permission, ...rest } = route;
        
				return (
					<Route {...rest} key={path} path={`${match.path}${path}`}
           component = {route.component}
          >
            
					</Route>
				)
			})}
		
		</Switch>
	)
}

export default memo(MapAllowed);