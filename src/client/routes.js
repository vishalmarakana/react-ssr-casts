import HomePage from './pages/Home'
import UsersPage from './pages/Users'
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

    component: NotFoundPage,

  },

]

export default routes
