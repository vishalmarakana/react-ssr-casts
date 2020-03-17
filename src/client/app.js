import React from 'react'
import { render } from 'react-dom'

import AppRouter from './router/Router'

const wrapper = document.getElementById('wrapper')

wrapper ? render(<AppRouter />, wrapper) : false
