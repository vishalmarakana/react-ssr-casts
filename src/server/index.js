import express from 'express'
import compression from 'compression'
import favicon from 'serve-favicon'
import { join } from 'path'
import { createProxyMiddleware } from 'http-proxy-middleware'
import ssr from './utils/ssr'
import configureStore from '../client/store/configureStore'

const server = express()
const port = process.env.PORT || 3000
const publicPath = join(__dirname, '..', 'public')

server.use(favicon(join(publicPath, 'favicon.png')))
server.use(createProxyMiddleware('/api', {

  target: 'http://react-ssr-api.herokuapp.com',

  changeOrigin: true,

  pathRewrite: {

    '^/api': '',

  },

  onProxyReq(proxyReq) {

    proxyReq.setHeader('x-forwarded-host', `localhost:${port}`)

  }

}))
server.use(express.static(publicPath))
server.use(compression())

server.get('*', async (req, res) => {

  const store = configureStore({}, req)
  const context = {}

  try {

    const ctx = { req, res, store, context }
    const html = await ssr(ctx)

    if (context.notFound) {

      res.status(404)

    }

    res.send(html)

  } catch (error) {

    console.log('ERROR: ', error.message)

    if (error.isAxiosError) {

      if (error.response.status === 401) {

        res.redirect(303, '/')

      }

    } else {

      res.status(500).send('Internal server error')

    }

  }

})

server.listen(port, () => console.log(`Listening on http://localhost:${port}`))
