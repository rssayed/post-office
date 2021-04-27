import React, { memo } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import CreatePackage from '../components/CreatePackage';
import NotFound from '../components/NotFound';

function MapAllowed({ routes, basePath, isAddNotFound }) {
	const match = useRouteMatch(basePath);
	return (
		<Switch>
			{
			routes.map((route) => {
				const { path, component: Component, title, permission, ...rest } = route;
				return (

					<Route {...rest} key={path} path={`${match.path}${path}`}
						component={route.component}
					>
					</Route>

				)
			})}
		</Switch>
	)
}
export default memo(MapAllowed);