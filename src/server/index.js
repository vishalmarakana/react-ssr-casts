import express from 'express'
import compression from 'compression'
import { join } from 'path'
import { readFile } from 'fs'

import React from 'react'
import { renderToString } from 'react-dom/server'

// pages
import HomePage from '../client/pages/Home'

const server = express()
const port = process.env.PORT || 3000
const publicPath = join(__dirname, '..', '..', 'public')
const templatePath = join(__dirname, '..', 'index.html')

server.use(express.static(publicPath))
server.use(compression())

server.get('/', (req, res) => {

  const content = renderToString(<HomePage />)

  readFile(templatePath, 'utf8', (err, data) => {

    if (err) {

      res.status(500).send('Internal server error')

    }

    const html = data.replace('<div id="wrapper"></div>', `<div id="wrapper">${content}</div>`)

    res.send(html)

  })

})

server.listen(port, () => console.log(`Listening on http://localhost:${port}`))
