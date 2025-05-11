import { expect, test, describe, afterAll, vi, beforeEach, beforeAll } from 'vitest'


const consoleMock = vi.spyOn(console, 'log').mockImplementation(() => undefined)

beforeAll(async () => {
  await import('../src/main.js')
})

afterAll(() => {
  consoleMock.mockReset()
})


test('Plant Your Seeds', async () => {
  expect(consoleMock).toHaveBeenCalledWith('Initial garden: Tomato,Carrot,Lettuce,Cucumber,Pepper')
})

test('Garden Growth', async () => {
  expect(consoleMock).toHaveBeenCalledWith('Updated garden: Sunflower,Tomato,Carrot,Lettuce,Cucumber,Pepper,Pumpkin')
  expect(consoleMock).toHaveBeenCalledWith('Number of plants: 7')
})

test('Harvest Time', async () => {
  expect(consoleMock).toHaveBeenCalledWith('Harvested: Sunflower and Pumpkin')
})

test('Garden Maintenance', async () => {
  expect(consoleMock).toHaveBeenCalledWith('Replaced plant at index: 3')
  expect(consoleMock).toHaveBeenCalledWith('Garden after replacement: Tomato,Carrot,Lettuce,Bell Pepper,Pepper')
})

test('Garden Health Check', async () => {
  expect(consoleMock).toHaveBeenCalledWith('Garden includes Weeds: false')
})


