import { JSDOM } from 'jsdom'
import html from '../index.html?raw'
import mainJS from '../src/main.js?raw'
import doNotTouchJS from '../src/_do-no-touch.js?raw'


const transformedHtml = html.
  replace('<!--replace with main.js-->', `<script>${mainJS}</script>`).
  replace('<!--replace with _do-no-touch.js-->', `<script>${doNotTouchJS}</script>`)

const dom = new JSDOM(transformedHtml, { 'runScripts': 'dangerously' })


global.window = dom.window
global.document = dom.window.document
global.navigator = dom.window.navigator
