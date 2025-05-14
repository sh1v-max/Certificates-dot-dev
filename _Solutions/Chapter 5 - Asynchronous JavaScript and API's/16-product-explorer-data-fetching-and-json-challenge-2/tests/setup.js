import { JSDOM } from 'jsdom'
import html from '../index.html?raw'
import mainJS from '../src/main.js?raw'

const transformedHtml = html

const dom = new JSDOM(transformedHtml, { 'runScripts': 'dangerously' })


global.window = dom.window
global.document = dom.window.document
global.navigator = dom.window.navigator
