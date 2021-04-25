import Roles from './Roles'
import Home from '../components/Home'
import login from '../components/login'
import CreatePackage from '../components/CreatePackage'
import DeletePackage from '../components/DeletePackage'
import orderHistory from '../components/orderHistory'
import Trackinghistory from '../components/Trackinghistory'
import UpdatePackage from '../components/UpdatePackage'
import Profile from '../components/profile'
import LandingPage from '../components/LandingPage';
import GetUserId from '../components/getUserId'
//this whole thing is a private area containing components with
//certain permissions tied to the role.js..

export default [
 {
  component: CreatePackage,
  path: '/CreatePackage',
  title: 'Create',
  permission: [
    Roles.Manager,
    Roles.Worker,
     ],
 },
 {
  component: Home,
  path: '/app',
  title: 'Home',
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
  permission: [
   Roles.User,
   Roles.Worker,
   Roles.Manager
    ],
 },
 {
  component: GetUserId,
  path: '/getUserId',
  title: 'getUserId',
  permission: [
   Roles.Worker,
   Roles.Manager,
    ],
 },
 {
    component: DeletePackage,
    path: '/DeletePackage',
    title: 'Delete Package',
    permission: [
     Roles.Manager
      ],
   },
   {
    component: UpdatePackage,
    path: '/UpdatePackage',
    title: 'Update Package',
    permission: [
     Roles.Worker,
     Roles.Manager
      ],
   },
 {
  component: Profile,
  path: '/Profile',
  title: 'Profile',
  permission: [
      Roles.User,
      Roles.Manager,
      Roles.Worker
  ],
 },
]
