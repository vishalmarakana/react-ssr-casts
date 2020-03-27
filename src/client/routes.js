import HomePage from './pages/Home'
import UsersPage from './pages/Users'

const routes = [

  {

    path: '/',

    component: HomePage,

    exact: true,

  },

  {

    path: '/users',

    component: UsersPage,

  }

]

export default routes
