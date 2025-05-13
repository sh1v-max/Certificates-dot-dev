import { expect, test, describe, afterAll, vi, beforeEach, beforeAll } from 'vitest'

const consoleMock = vi.spyOn(console, 'log').mockImplementation(() => undefined)

beforeAll(async () => {
  await import('../src/main.js')
})

afterAll(() => {
  consoleMock.mockReset()
})

test('Even/Odd Counter', async () => {
  expect(consoleMock).toHaveBeenCalledWith('Even numbers:', 4)
  expect(consoleMock).toHaveBeenCalledWith('Odd numbers:', 6)
})

test('Range Classifier', async () => {
  expect(consoleMock).toHaveBeenCalledWith('Low numbers:', 3)
  expect(consoleMock).toHaveBeenCalledWith('Medium numbers:', 5)
  expect(consoleMock).toHaveBeenCalledWith('High numbers:', 2)
})

test('Sum and Average', async () => {
  expect(consoleMock).toHaveBeenCalledWith('Sum:', 466)
  expect(consoleMock).toHaveBeenCalledWith('Average:', '46.60')
})
