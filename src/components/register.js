import React, { Fragment } from 'react';

import Nav from './Nav'

const containerStyles = {
	maxWidth: 400,
	margin: 'auto',
}

const navOptions = [
	{title: 'Login', path: '/login'},
	{title: 'Register', path: '/register'}
];

function LandingPage() {
        return (
				<div className = "testing">
				<Nav routes={navOptions}/>
            	<h1 align='center'>Please register to sign up..</h1>
            	<p align='center'></p>
				</div>
				
		)
}

export default LandingPage