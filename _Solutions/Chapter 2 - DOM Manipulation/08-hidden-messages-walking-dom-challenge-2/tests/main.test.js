import { expect, test, vi, beforeAll } from 'vitest'

const consoleMock = vi.spyOn(console, 'log')

beforeAll(async () => {
  await import('../src/main.js')
})


test('Requirement 1', async () => {
  const log = consoleMock.mock.calls[0][0]
  expect(log).toBe(document.head.lastElementChild.innerText)
})


test('Requirement 2', async () => {
  const log = consoleMock.mock.calls[1][0]
  expect(log.nodeValue).toBe(document.body.firstChild.nodeValue)
})

test('Requirement 3', async () => {
  const log = consoleMock.mock.calls[2][0]
  expect(log).toBe(document.body.children[1].children.length)
})

test('Requirement 4', async () => {
  expect(consoleMock.mock.calls[3][0]).toBe(document.body.children[1].children[1].innerText)
})

test('Requirement 5', async () => {
  const log = consoleMock.mock.calls[4][0]
  expect(log).toBe(document.querySelector('ul').nextSibling.textContent)
})
