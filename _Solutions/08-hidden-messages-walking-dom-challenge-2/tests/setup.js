import { JSDOM } from 'jsdom'
import html from '../index.html?raw'
import mainJS from '../src/main.js?raw'
import * as sanitizeHtml from 'sanitize-html'
const transformedHtml = html

const dom = new JSDOM(transformedHtml, { 'runScripts': 'dangerously' })

global.window = dom.window
global.document = dom.window.document
global.navigator = dom.window.navigator
Object.defineProperty(global.window.Element.prototype, 'innerText', {
  get () {
    return sanitizeHtml.default(this.textContent, {
      'allowedTags': [],
      'allowedAttributes': {}
    })
  },
  'configurable': true
})
