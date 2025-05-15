import { expect, test, describe, afterAll, vi, beforeEach, beforeAll } from 'vitest'

const consoleMock = vi.spyOn(console, 'log').mockImplementation(() => undefined)

beforeAll(async () => {
  await import('../src/main.js')
})

afterAll(() => {
  consoleMock.mockReset()
})

test('Create Potion', async () => {
  expect(consoleMock).toHaveBeenCalledWith('A mystical brew of water, moonstone dust, and dragon breath!')
  expect(consoleMock).toHaveBeenCalledWith('A mystical brew of toadstool extract, pixie wings, and dragon breath!')
  expect(consoleMock).toHaveBeenCalledWith('A mystical brew of shadow essence, vampire tears, and phoenix ash!')
})

test('Cast Charm', async () => {
  expect(consoleMock).toHaveBeenCalledWith('May luck and fortune smile upon Elara the Elf!')
})

test('Calculate Spell Power', async () => {
  expect(consoleMock).toHaveBeenCalledWith('Spell Power: 250')
})

test('Elemental Spells', async () => {
  expect(consoleMock).toHaveBeenCalledWith('Fireball blazes with power 1!')
  expect(consoleMock).toHaveBeenCalledWith('Water spout surges with power 2!')
  expect(consoleMock).toHaveBeenCalledWith('Lightning strikes with power 3!')
})

test('Determine Spell Strength', async () => {
  expect(consoleMock).toHaveBeenCalledWith('Weak')
  expect(consoleMock).toHaveBeenCalledWith('Moderate')
  expect(consoleMock).toHaveBeenCalledWith('Strong')
})


test('Transform Ingredients', async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 10))
  expect(consoleMock).toHaveBeenCalledWith([
    'enchanted newt eyes',
    'enchanted toe of frog',
    'enchanted wool of bat',
    'enchanted tongue of dog'
  ])
})

