import { expect, test, describe, afterAll, vi, beforeEach, beforeAll } from 'vitest'


const consoleMock = vi.spyOn(console, 'log').mockImplementation(() => undefined)

let codeQuit = false

beforeAll(async () => {
  try {
    await import('../src/main.js')
  } catch (err) {
    codeQuit = true
  }
})

afterAll(() => {
  consoleMock.mockReset()
})

test('the code does NOT quit execution due to a syntax error', async () => {
  expect(codeQuit).toBe(false)
})

test('the result of sum is logged to the console', async () => {
  expect(consoleMock).toHaveBeenLastCalledWith(7)
})


