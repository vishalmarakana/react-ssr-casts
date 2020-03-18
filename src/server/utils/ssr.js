import React from 'react'
import { renderToString } from 'react-dom/server'
import { promisify } from 'util'
import { readFile } from 'fs'
import { join } from 'path'

const templatePath = join(__dirname, '..', 'template.html')

// pages
import HomePage from '../../client/pages/Home'

const readFileAsync = promisify(readFile)

/**
 * 
 * Renders react page for server side rendering.
 * 
 * @param {String} path Page route path
 * @returns Returns html markup
 */
export default async (path) => {

  const data = await readFileAsync(templatePath, 'utf8')

  if (path === '/') {

    const content = renderToString(<HomePage />)

    const html = data.replace('<div id="root"></div>', `<div id="root">${content}</div>`)

    return html

  }

}
