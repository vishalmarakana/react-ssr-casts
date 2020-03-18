import express from 'express'
import compression from 'compression'
import { join } from 'path'

import React from 'react'
import { renderToString } from 'react-dom/server'

// pages
import HomePage from '../client/pages/Home'

const server = express()
const port = process.env.PORT || 3000
const publicPath = join(__dirname, '..', '..', 'public')

server.use(express.static(publicPath))
server.use(compression())

server.get('/', (req, res) => {

  const content = renderToString(<HomePage />)

  res.send(content)

})

server.listen(port, () => console.log(`Listening on http://localhost:${port}`))
