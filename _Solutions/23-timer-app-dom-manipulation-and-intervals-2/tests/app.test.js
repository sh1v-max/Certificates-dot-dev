import { describe, it, expect } from 'vitest'
import { main } from '../src/main'
const TIMER_EL_ID = 'timer'
const START_BTN_ID = 'start'
const PAUSE_BTN_ID = 'pause'
const RESET_BTN_ID = 'reset'

async function sleep (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

describe('Timer App', () => {
  it('should work', async () => {
    main()
    const timerElement = document.querySelector(`#${TIMER_EL_ID}`)
    const startButton = document.querySelector(`#${START_BTN_ID}`)
    const pauseButton = document.querySelector(`#${PAUSE_BTN_ID}`)
    const resetButton = document.querySelector(`#${RESET_BTN_ID}`)
    expect(timerElement.textContent).toBe('00')
    startButton.click()
    await sleep(1100)
    expect(startButton.classList.contains('hidden')).toBe(true)
    expect(timerElement.textContent).toBe('01')
    await sleep(2100)
    expect(timerElement.textContent).toBe('03')
    pauseButton.click()
    await sleep(1100)
    expect(startButton.classList.contains('hidden')).toBe(false)
    expect(pauseButton.classList.contains('hidden')).toBe(true)
    expect(timerElement.textContent).toBe('03')
    resetButton.click()
    expect(startButton.classList.contains('hidden')).toBe(false)
    expect(pauseButton.classList.contains('hidden')).toBe(true)
    expect(timerElement.textContent).toBe('00')
    startButton.click()
    await sleep(2100)
    expect(startButton.classList.contains('hidden')).toBe(true)
    expect(pauseButton.classList.contains('hidden')).toBe(false)
    expect(timerElement.textContent).toBe('02')
  })
})
