import { expect, test, describe, afterAll, vi, beforeEach, beforeAll } from 'vitest'

const consoleMock = vi.spyOn(console, 'log').mockImplementation(() => undefined)

beforeAll(async () => {
  await import('../src/main.js')
})

afterAll(() => {
  consoleMock.mockReset()
})

test('Add to Sanctuary', async () => {
  expect(consoleMock).toHaveBeenCalledWith({
    'Pixel': {
      'name': 'Pixel',
      'species': 'dog',
      'mood': 0.8
    },
    'Bitsy': {
      'name': 'Bitsy',
      'species': 'cat',
      'mood': 0.6
    },
    'Datastream': {
      'name': 'Datastream',
      'species': 'fish',
      'mood': 0.5
    }
  })
})

test('Sanctuary Check', async () => {
  expect(consoleMock).toHaveBeenCalledWith('--Sanctuary Check--')
  expect(consoleMock).toHaveBeenCalledWith('Pixel is in sanctuary:', true)
  expect(consoleMock).toHaveBeenCalledWith('Glitch is in sanctuary:', false)
})

test('Pet Report', async () => {
  expect(consoleMock).toHaveBeenCalledWith('--Pet Report--')
  expect(consoleMock).toHaveBeenCalledWith('Name: Pixel, Species: dog, Mood: 0.8')
  expect(consoleMock).toHaveBeenCalledWith('Name: Bitsy, Species: cat, Mood: 0.6')
  expect(consoleMock).toHaveBeenCalledWith('Name: Datastream, Species: fish, Mood: 0.5')
})

test('Find Happy Pets', async () => {
  expect(consoleMock).toHaveBeenCalledWith('--Happy Pets--')
  expect(consoleMock).toHaveBeenCalledWith([
    {
      'name': 'Pixel',
      'species': 'dog',
      'mood': 0.8
    }
  ])
})


