import React from 'react'
import serialize from 'serialize-javascript'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Helmet } from 'react-helmet'
import { promisify } from 'util'
import { readFile } from 'fs'
import { join } from 'path'
import App from '../../client/app'
import routes from '../../client/routes'
// redux actions
import { fetchCurrentUserAsync } from '../../client/actions/auth'

const templatePath = join(__dirname, 'template.html')
const readFileAsync = promisify(readFile)

/**
 * 
 * Renders react page for server side rendering.
 * 
 * @param {Object} ctx Current context on server with redux store
 * 
 * @returns Returns html markup
 */
export default async (ctx) => {

  // fetch current user if any
  await ctx.store.dispatch(fetchCurrentUserAsync())

  const data = await readFileAsync(templatePath, 'utf8')
  const currentRoute = routes.find((route) => matchPath(ctx.req.url, route))

  if (currentRoute && currentRoute.component.getInitialData) {

    await currentRoute.component.getInitialData(ctx)

  }

  const content = renderToString(

    <Provider store={ctx.store}>

      <StaticRouter location={ctx.req.url} context={ctx.context}>

        <App />

      </StaticRouter>

    </Provider>

  )

  const helmet = Helmet.renderStatic()

  const html = data
    .replace('</head>', `${helmet.title.toString()}</head>`)
    .replace('</head>', `<script>window.__PRELOADED_STATE__ = ${serialize(ctx.store.getState())}</script></head>`)
    .replace('<div id="root"></div>', `<div id="root">${content}</div>`)

  return html

}
