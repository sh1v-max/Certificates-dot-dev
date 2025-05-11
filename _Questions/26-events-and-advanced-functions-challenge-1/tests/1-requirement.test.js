import { describe, it, expect, beforeAll, vi } from 'vitest'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'
import { main } from '../src/1-requirement'

beforeAll(() => {
  const html = fs.readFileSync(path.resolve(__dirname, '../1-requirement.html'), 'utf8')
  const dom = new JSDOM(html)

  global.window = dom.window
  global.document = dom.window.document
  global.navigator = dom.window.navigator
  global.alert = vi.fn()

  main()
})

describe('Event Handling and DOM Manipulation', () => {
  it('should add .hovered class on mouseover', () => {
    const button = document.querySelector('#button')
    const event = new window.MouseEvent('mouseover')
    button.dispatchEvent(event)
    expect(button.classList.contains('hovered')).toBe(true)
  })

  it('should remove .hovered class on mouseleave', () => {
    const button = document.querySelector('#button')
    button.classList.add('hovered')
    const event = new window.MouseEvent('mouseleave')
    button.dispatchEvent(event)
    expect(button.classList.contains('hovered')).toBe(false)
  })

  it('should update #nameDisplay text on input', () => {
    const input = document.querySelector('#nameInput')
    const display = document.querySelector('#nameDisplay')
    input.value = 'John'
    const event = new window.Event('input')
    input.dispatchEvent(event)
    expect(display.textContent).toBe('John')
  })

  it('should alert with the correct message on button click', () => {
    const input = document.querySelector('#nameInput')
    input.value = 'John'
    const inputEvent = new window.Event('input')
    input.dispatchEvent(inputEvent)

    const alert = vi.spyOn(global, 'alert')
    const button = document.querySelector('#button')
    const clickEvent = new window.MouseEvent('click')
    button.dispatchEvent(clickEvent)
    expect(alert).toHaveBeenCalledWith('Hello, John!')
  })
})
