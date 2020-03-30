import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import routes from './routes'

const App = () => (

  <>

    <Navbar />

    <Switch>

      {
        routes.map((route, i) => <Route key={i} {...route} />)
      }

    </Switch>

  </>

)

export default App
