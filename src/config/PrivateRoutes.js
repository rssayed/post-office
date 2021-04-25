
import Roles from './Roles'
// components we are using
import Home from '../components/Home';
import login from '../components/login'
import CreatePackage from '../components/CreatePackage'
import DeletePackage from '../components/DeletePackage'
import orderHistory from '../components/orderHistory'
import Trackinghistory from '../components/Trackinghistory'
import UpdatePackage from '../components/UpdatePackage'
import Profile from '../components/profile'


export default [
 {
  component: Home,
  path: '/Home',
  title: 'Home',
  exact: true,
  permission: [
    Roles.User,
    Roles.Manager,
    Roles.Worker,
     ],
  
 },
 {
  component: login,
  path: '/login',
  title: 'Login',
  exact: true,
 },
 {
  component: CreatePackage,
  path: '/CreatePackage',
  title: 'Create',
  exact: true,
  permission: [
    Roles.User,
    Roles.Manager,
    Roles.Worker,
     ],
 },
 {
    component: Trackinghistory,
    path: '/Trackinghistory',
    title: 'Tracking History',
    exact: true,
    permission: [
      Roles.User,
      Roles.Manager,
      Roles.Worker,
       ],
   },

 {
  component: orderHistory,
  path: '/orderHistory',
  title: 'Order History',
  exact: true,
  permission: [
   Roles.User
    ],
 },
 {
    component: DeletePackage,
    path: '/DeletePackage',
    title: 'Delete Package',
    exact: true,
    permission: [
     Roles.Manager
      ],
   },
 {
  component: Profile,
  path: '/profile',
  title: 'Profile',
  exact: true,
  permission: [
      Roles.User,
      Roles.Manager,
      Roles.Worker,

  ],
 },
]