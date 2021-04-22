import { intersection } from 'lodash';

//function to check if an array is okay.
export function isArrayWithLength(arr) {
 return (Array.isArray(arr) && arr.length)
}
//filters private routers with user roles or roles..

//sets the item to roles, routes.filter(), passes it to a local arrow
//function.. then looks to see if we can grant permission,
export function getAllowedRoutes(routes) {
 const roles = JSON.parse(localStorage.getItem('roles'));
 return routes.filter(({ permission }) => {
  if(!permission) return true;
  else if(!isArrayWithLength(permission)) return true; //
  else return intersection(permission, roles).length;
 });
}

//passes array into routes mapping component.