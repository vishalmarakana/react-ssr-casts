import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'

const App = () => (

  <Switch>

    {
      routes.map((route, i) => <Route key={i} {...route} />)
    }

  </Switch>

)

export default App
