import express from 'express'
import compression from 'compression'
import { join } from 'path'

import serverSideRenderer from './utils/ssr'

const server = express()
const port = process.env.PORT || 3000
const publicPath = join(__dirname, '..', '..', 'public')

server.use(express.static(publicPath))
server.use(compression())

server.get('/', async (req, res) => {

  try {

    const html = await serverSideRenderer('/')

    res.send(html)

  } catch (error) {

    res.status(500).send('Internal server error')

  }

})

server.listen(port, () => console.log(`Listening on http://localhost:${port}`))
