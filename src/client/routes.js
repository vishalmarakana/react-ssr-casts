import HomePage from './pages/Home'
import UsersPage from './pages/Users'
import AdminsPage from './pages/Admins'
import NotFoundPage from './pages/404'

const routes = [

  {

    path: '/',

    component: HomePage,

    exact: true,

  },

  {

    path: '/users',

    component: UsersPage,

  },

  {

    path: '/admins',

    component: AdminsPage,

  },

  {

    component: NotFoundPage,

  },

]

export default routes
