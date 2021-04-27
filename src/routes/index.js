import React, { memo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoutes from '../config/PrivateRoutes';
import Auth from './Auth';
import History from '../utils/history';
import UsePrivateRoutes from './Map'

function Routes() {
	return (
		<Router History={History}>
			<Switch>
				<Route path="/app">
					<UsePrivateRoutes />
				</Route>
				<Route path="">
					<Auth />
				</Route>
			</Switch>
		</Router>
	)
}
export default memo(Routes);