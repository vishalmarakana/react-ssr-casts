import React from 'react'
import { hydrate } from 'react-dom'

import AppRouter from './router/Router'

const wrapper = document.getElementById('wrapper')

wrapper ? hydrate(<AppRouter />, wrapper) : false
