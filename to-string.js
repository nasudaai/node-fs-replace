import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './out/App.js'
//
import { readFileSync, writeFile } from 'node:fs'
//import { writeFile } from 'node:fs/promises'

const components = renderToString(App())
//console.log(components)

const template = readFileSync('./template.html','utf8')
//console.log(template)

const html = template.replace('<!--replace-->', components)
console.log(html)

writeFile('./dist/index.html', html, (err) => {
  if (err) throw err;
  console.log('writed dist/index.html ')
})
