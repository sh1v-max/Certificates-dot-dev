import { describe, it, expect, vi, beforeEach } from 'vitest'
import { main } from '../src/main'

describe('The challenge', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>'
    main()
  })

  it('should show not connected message if launch is attempted without connection', () => {
    const launchButton = document.getElementById('launch')
    launchButton.click()

    const logItems = document.querySelectorAll('#log-list li')
    expect(logItems[0].textContent).toBe('Connection to Major Tom is required.')
  })

  it('should connect to Major Tom successfully', async () => {
    global.fetch = vi.fn(() => Promise.resolve({
      'json': () => Promise.resolve({ 'status': 200 })
    }))

    const connectButton = document.getElementById('connect')
    connectButton.click()

    await new Promise((resolve) => setTimeout(resolve, 0))

    const logItems = document.querySelectorAll('#log-list li')
    expect(logItems[0].textContent).toBe('Attempting to connect to Major Tom...')
    expect(logItems[1].textContent).toBe('Connection established with Major Tom.')
  })

  it('should fail to connect to Major Tom', async () => {
    global.fetch = vi.fn(() => Promise.resolve({
      'json': () => Promise.resolve({ 'status': 500 })
    }))

    const connectButton = document.getElementById('connect')
    connectButton.click()

    await new Promise((resolve) => setTimeout(resolve, 0))

    const logItems = document.querySelectorAll('#log-list li')
    expect(logItems[0].textContent).toBe('Attempting to connect to Major Tom...')
    expect(logItems[1].textContent).toBe('Connection failed!')
  })


  it('should initiate launch sequence and complete countdown', () => {
    vi.useFakeTimers()
    global.fetch = vi.fn(() => Promise.resolve({
      'json': () => Promise.resolve({ 'status': 200 })
    }))

    const connectButton = document.getElementById('connect')
    connectButton.click()

    vi.advanceTimersByTime(1000)

    const launchButton = document.getElementById('launch')
    launchButton.click()

    const logItems = document.querySelectorAll('#log-list li')
    expect(logItems[1].textContent).toBe('Initiating launch sequence...')

    for (let i = 3; i > 0; i--) {
      vi.advanceTimersByTime(1000)
      expect(document.querySelector('#log-list').innerHTML).toContain(`T-minus ${i}`)
    }

    vi.advanceTimersByTime(1000)
    expect(document.querySelector('#log-list').innerHTML).toContain('Launch Successful! Major Tom is in orbit.')
    vi.useRealTimers()
  })

  it('should abort mission during countdown', () => {
    vi.useFakeTimers()
    global.fetch = vi.fn(() => Promise.resolve({
      'json': () => Promise.resolve({ 'status': 200 })
    }))

    const connectButton = document.getElementById('connect')
    connectButton.click()

    vi.advanceTimersByTime(1000)

    const launchButton = document.getElementById('launch')
    launchButton.click()

    vi.advanceTimersByTime(3000)

    const abortButton = document.getElementById('abort')
    abortButton.click()

    const logItems = document.querySelectorAll('#log-list li')
    expect(logItems[logItems.length - 1].textContent).toBe('Mission aborted! Major Tom is safe.')
    vi.useRealTimers()
  })

  it('should fail to abort mission if no active mission', () => {
    const abortButton = document.getElementById('abort')
    abortButton.click()

    const logItems = document.querySelectorAll('#log-list li')
    expect(logItems[0].textContent).toBe('No active mission to abort.')
  })
})
