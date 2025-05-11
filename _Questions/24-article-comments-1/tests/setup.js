import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8')
const dom = new JSDOM(html, {
  'url': 'http://localhost'
})

global.window = dom.window
global.document = dom.window.document
global.navigator = dom.window.navigator
