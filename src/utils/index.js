import { intersection } from 'lodash';

export function isLoggedIn() {
	/*
		* Note:
		*  This app assume if local storage have roles it means
		*  user is authenticated you can update this logic as per your app.
	*/
	//ahahaha
	console.log("!!!!!!!!!!!!!!!!!")
	return !!localStorage.getItem('roles')
	console.log("!!!!!!!!!!!!!!!!!")
}

export function isArrayWithLength(arr) {
	return (Array.isArray(arr) && arr.length)
}

export function getAllowedRoutes(routes) {
	console.log("This is the value of routes.. ",routes);
	const roles = JSON.parse(localStorage.getItem('roles'));
	return routes.filter(({ permission }) => {
		if(!permission) return true;
		else if(!isArrayWithLength(permission)) return true;
		else return intersection(permission, roles).length;
	});
}

//AWS LAMBDA
