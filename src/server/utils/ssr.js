import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'
import { promisify } from 'util'
import { readFile } from 'fs'
import { join } from 'path'
import App from '../../client/app'
import routes from '../../client/routes'

const templatePath = join(__dirname, 'template.html')
const readFileAsync = promisify(readFile)

/**
 * 
 * Renders react page for server side rendering.
 * 
 * @param {String} location Page route location
 * @param {Object} store redux store
 * 
 * @returns Returns html markup
 */
export default async (location, store) => {

  const data = await readFileAsync(templatePath, 'utf8')
  const currentRoute = routes.find((route) => matchPath(location, route))

  if (currentRoute.component.initialData) {

    await currentRoute.component.initialData(store)

  }

  const content = renderToString(

    <Provider store={store}>

      <StaticRouter location={location} context={{}}>

        <App />

      </StaticRouter>

    </Provider>

  )

  const html = data.replace('<div id="root"></div>', `<div id="root">${content}</div>`)

  return html

}
