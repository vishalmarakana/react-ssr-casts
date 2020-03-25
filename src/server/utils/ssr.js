import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { promisify } from 'util'
import { readFile } from 'fs'
import { join } from 'path'
import App from '../../client/app'

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
