import { expect, test, vi, beforeAll } from 'vitest'

const consoleMock = vi.spyOn(console, 'log')

beforeAll(async () => {
  await import('../src/main.js')
})


function normalizeHtml (html) {
  return html.replace(/\s+/g, ' ').trim()
}

test('1. Discover the Enchanted Scroll', async () => {
  const loggedHtml = consoleMock.mock.calls[0][0].outerHTML
  expect(normalizeHtml(loggedHtml)).toBe(normalizeHtml(document.querySelector('#scroll').outerHTML))
})


test('2. Decipher the Ancient Spell', async () => {
  const log = consoleMock.mock.calls[1][0]
  expect(log).toBe('Ancient Spell')
})

test('3. Rewrite the Spell', async () => {
  expect(document.querySelector('#scroll').textContent).toBe('Abracadabra!')
})

test('4. Reveal the Magic Attribute', async () => {
  expect(document.querySelector('#scroll').getAttribute('data-magic')).toBe('hi')
})

test('5. Enchant the Scroll Appearance', async () => {
  expect(document.querySelector('#scroll').style.color).toBe('blue')
})

test('6. Bestow a Magical Class', async () => {
  expect(document.querySelector('#scroll').classList).toContain('enchanted')
})

test('7. End the Game with a Magical Finale', async () => {
  const msgEl = document.querySelector('#msg')
  expect(msgEl.textContent).toBe('Congratulations! You have mastered the DOM Magic!')
  expect(msgEl.getAttribute('data-magic')).toBe('finale')
  expect(msgEl.style.backgroundColor).toBe('green')
  expect(msgEl.style.color).toBe('white')
})
