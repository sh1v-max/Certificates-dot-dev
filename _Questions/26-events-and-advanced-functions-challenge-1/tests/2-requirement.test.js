import { describe, it, expect, beforeAll, vi } from 'vitest'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'
import { main } from '../src/2-requirement'

beforeAll(() => {
  const html = fs.readFileSync(path.resolve(__dirname, '../2-requirement.html'), 'utf8')
  const dom = new JSDOM(html)

  global.window = dom.window
  global.document = dom.window.document
  global.navigator = dom.window.navigator

  main()
})

describe('Advanced Functions', () => {
  it('should apply discount and update DOM correctly', () => {
    const cartContainer = document.querySelector('#cart')
    expect(cartContainer.children.length).toBe(3)
    expect(cartContainer.children[0].textContent).toBe('apple$0.80')
    expect(cartContainer.children[1].textContent).toBe('banana$0.40')
    expect(cartContainer.children[2].textContent).toBe('cherry$1.60')
  })
})
