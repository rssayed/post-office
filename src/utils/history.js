  
import { createBrowserHistory } from 'history';

export default createBrowserHistory({});
//? is the conditional operator
/*
The history's push method can pass 
an object like the origin props.
But it's refresh when in the child router always. 
So pass a string when use it.

import history from 'router/history';

history.push(`${your router address}`)

*/