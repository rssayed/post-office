import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/login';
import Register from '../components/register';
import LandingPage from '../components/LandingPage';

function PublicRoutes() {
	return (
		<Fragment>
			<Switch>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="">
					<LandingPage />
				</Route>
			</Switch>
		</Fragment>
	)
}

export default PublicRoutes;