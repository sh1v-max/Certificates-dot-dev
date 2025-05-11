import { expect, test, describe, afterAll, vi, beforeEach, beforeAll } from 'vitest'


const consoleMock = vi.spyOn(console, 'log').mockImplementation(() => undefined)

beforeAll(async () => {
  await import('../src/main.js')
})

afterAll(() => {
  consoleMock.mockReset()
})

test('Resource Management', async () => {
  if (window.distanceTraveled === 70) {
    expect(consoleMock).toHaveBeenCalledWith('Fuel reductions: 7, Current fuel level: 65')
    expect(consoleMock).toHaveBeenCalledWith('Fuel is low: false')
  }
  if (window.distanceTraveled === 153) {
    expect(consoleMock).toHaveBeenCalledWith('Fuel reductions: 15.3, Current fuel level: 23.5')
    expect(consoleMock).toHaveBeenCalledWith('Fuel is low: true')
  }
})

test('Oxygen Consumption', async () => {
  if (window.distanceTraveled === 70) {
    expect(consoleMock).toHaveBeenCalledWith('New oxygen level: 96.5')
    expect(consoleMock).toHaveBeenCalledWith('Oxygen is low: false')
  }
  if (window.distanceTraveled === 153) {
    expect(consoleMock).toHaveBeenCalledWith('New oxygen level: 92.35')
    expect(consoleMock).toHaveBeenCalledWith('Oxygen is low: false')
  }
})

test('Alien Encounters', async () => {
  if (window.distanceTraveled === 70) {
    expect(consoleMock).toHaveBeenCalledWith('Crew encountered aliens: false')
  }
  if (window.distanceTraveled === 153) {
    expect(consoleMock).toHaveBeenCalledWith('Crew encountered aliens: true')
  }
})


