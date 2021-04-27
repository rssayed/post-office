import React, { memo } from 'react';
import { Redirect } from 'react-router-dom';
import { isLoggedIn } from '../utils/index';
import PublicRoutes from './PublicRoutes';

function Auth() {
	return isLoggedIn() ? (
		<Redirect to="/app" />
	) : (
		<PublicRoutes />
	)
}
export default memo(Auth);