import React from 'react'
import { render, hydrate } from 'react-dom'

import AppRouter from './router/Router'

const dev = process.env.NODE_ENV === 'development'
const root = document.getElementById('root')

const AppRender = dev ? render : hydrate

root ? AppRender(<AppRouter />, root) : false
