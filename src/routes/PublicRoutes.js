import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/login';

function PublicRoutes() {
	return (
		<Fragment>
			<Switch>
				<Route path="/">
					<Login />
				</Route>
			</Switch>
		</Fragment>
	)
};
export default PublicRoutes;