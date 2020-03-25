import express from 'express'
import compression from 'compression'
import favicon from 'serve-favicon'
import { join } from 'path'
import ssr from './utils/ssr'
import configureStore from '../client/store/configureStore'

const server = express()
const port = process.env.PORT || 3000
const publicPath = join(__dirname, '..', 'public')

server.use(express.static(publicPath))
server.use(favicon(join(publicPath, 'favicon.png')))
server.use(compression())

server.get('*', async (req, res) => {

  const store = configureStore()

  try {

    const html = await ssr(req.url, store)

    res.send(html)

  } catch (error) {

    res.status(500).send('Internal server error')

  }

})

server.listen(port, () => console.log(`Listening on http://localhost:${port}`))
