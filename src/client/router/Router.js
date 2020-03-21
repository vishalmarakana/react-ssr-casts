import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../pages/Home'

const AppRouter = () => (
  <Switch>
    <Route path="/" component={HomePage} exact />
  </Switch>
)

export default AppRouter
