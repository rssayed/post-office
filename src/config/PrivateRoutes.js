import Roles from './Roles'
import CreatePackage from '../components/CreatePackage'
import DeletePackage from '../components/DeletePackage'
import orderHistory from '../components/orderHistory'
import Trackinghistory from '../components/Trackinghistory'
import UpdatePackage from '../components/UpdatePackage'
import Profile from '../components/profile'
import GetUserId from '../components/getUserId'
import CreateUser from '../components/createUser'
//this whole thing is a private area containing components with
//certain permissions tied to the role.js..

export default [
   {
      component: CreateUser,
      path: '/CreateUser',
      title: 'Create New User',
      permission: [
      Roles.Worker,
      Roles.Manager,
      ],
    },
   {
   component: GetUserId,
   path: '/getUserId',
   title: 'Get User Id',
   permission: [
   Roles.Worker,
   Roles.Manager,
   ],
 },
   {
      component: CreatePackage,
      path: '/CreatePackage',
      title: 'Create Package',
      permission: [
         Roles.Manager,
         Roles.Worker,
      ],
   },

   {
      component: Trackinghistory,
      path: '/Trackinghistory',
      title: 'Tracking History',
      permission: [
         Roles.Customer,
         Roles.Manager,
         Roles.Worker,
      ],
   },

   {
      component: orderHistory,
      path: '/orderHistory',
      title: 'Order History',
      permission: [
         Roles.Customer,
         Roles.Worker,
         Roles.Manager
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
         Roles.Customer,
         Roles.Manager,
         Roles.Worker
      ],
   },
]
