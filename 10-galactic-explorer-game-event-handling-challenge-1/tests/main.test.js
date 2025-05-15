import { expect, test, vi, beforeAll } from 'vitest'


beforeAll(async () => {
  await import('../src/main.js')
})


test('1. Initiate the Launch Sequence', async () => {
  const consoleMock = vi.spyOn(console, 'log')
  const launchButton = document.querySelector('#launchButton')
  const rocket = document.querySelector('.rocket')
  launchButton.click()
  expect(rocket.classList.contains('launch')).toBeTruthy()
  consoleMock.mockRestore()
})


test('2. Monitor the Control Input', async () => {
  const consoleMock = vi.spyOn(console, 'log')
  const controlInput = document.querySelector('#controlInput')
  const event = new KeyboardEvent('keydown', { 'key': 'c' })
  controlInput.dispatchEvent(event)
  expect(consoleMock).toHaveBeenCalledOnce()
  expect(consoleMock).toHaveBeenCalledWith('c')
  consoleMock.mockRestore()
})


test('3. Track the Mouse Coordinates', async () => {
  const star = document.querySelector('.star')
  const event = new MouseEvent('mousemove', {
    'clientX': 100,
    'clientY': 200
  })
  document.dispatchEvent(event)
  expect(star.style.left).toBe('100px')
  expect(star.style.top).toBe('200px')
})


test('4. Activate the Hyperdrive', async () => {
  const hyperdriveButton = document.querySelector('#hyperdriveButton')
  const event = new MouseEvent('dblclick')
  hyperdriveButton.dispatchEvent(event)
  expect(document.body.classList.contains('hyperdrive')).toBeTruthy()
})
