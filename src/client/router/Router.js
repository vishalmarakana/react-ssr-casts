import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../pages/Home'
import UsersPage from '../pages/Users'

const AppRouter = () => (

  <Switch>

    <Route path="/" component={HomePage} exact />

    <Route path="/users" component={UsersPage} />

  </Switch>

)

export default AppRouter
