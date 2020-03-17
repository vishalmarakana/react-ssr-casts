import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from '../pages/Home'

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact />
    </Switch>
  </BrowserRouter>
)

export default AppRouter
