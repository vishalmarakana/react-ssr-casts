import React from 'react'
import { render, hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './app'

const dev = process.env.NODE_ENV === 'development'
const AppRender = dev ? render : hydrate
const root = document.getElementById('root')
const store = configureStore()

AppRender(

  <Provider store={store}>

    <BrowserRouter>

      <App />

    </BrowserRouter>

  </Provider>

  , root
)
