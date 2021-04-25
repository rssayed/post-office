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

function Home() {
        return (
				<div className = "testing">
            	<h1 align='center'>SnailMail</h1>
            	<p align='center'></p>
				</div>
				
		)
}

export default Home