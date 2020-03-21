import React from 'react'
import { render, hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app'

const dev = process.env.NODE_ENV === 'development'
const AppRender = dev ? render : hydrate
const root = document.getElementById('root')

AppRender(

  <BrowserRouter>

    <App />

  </BrowserRouter>

  , root
)
