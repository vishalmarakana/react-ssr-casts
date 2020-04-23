import React from 'react'
import { render, hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './app'
import { fetchCurrentUserAsync } from './actions/auth'

const dev = process.env.NODE_ENV === 'development'
const appRender = dev ? render : hydrate
const root = document.getElementById('root')

const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

const store = configureStore(preloadedState)

Promise.resolve()
  .then(async () => {

    await store.dispatch(fetchCurrentUserAsync())

    appRender(

      <Provider store={store}>

        <BrowserRouter>

          <App />

        </BrowserRouter>

      </Provider>

      , root
    )

  })
