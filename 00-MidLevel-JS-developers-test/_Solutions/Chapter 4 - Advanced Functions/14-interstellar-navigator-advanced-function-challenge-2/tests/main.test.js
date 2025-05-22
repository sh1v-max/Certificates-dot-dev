import { expect, describe, it } from 'vitest'
import {
  createStarCounter
} from '../src/main.js'

function sleep (seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds))
}

describe('1. Star Counter', () => {
  it('should initialize with the given initial value', () => {
    const starCounter = createStarCounter(3)
    expect(starCounter.getValue()).toBe(3)
  })

  it('should increment the value', () => {
    const starCounter = createStarCounter(3)
    starCounter.increment()
    expect(starCounter.getValue()).toBe(4)
  })

  it('should decrement the value', () => {
    const starCounter = createStarCounter(3)
    starCounter.decrement()
    expect(starCounter.getValue()).toBe(2)
  })

  it('should not decrement below 0', () => {
    const starCounter = createStarCounter(0)
    starCounter.decrement()
    expect(starCounter.getValue()).toBe(-1)
  })
})

describe('2. Cosmic Signal Broadcaster', async () => {
  it('should broadcast signals correctly', async () => {
    const signals = document.querySelector('#signalBroadcaster')
    await sleep(110)
    expect(signals.classList).toContain('signal-1')
    expect(signals.classList).not.toContain('signal-2')
    await sleep(110)
    expect(signals.classList).toContain('signal-2')
    expect(signals.classList).not.toContain('signal-1')
    await sleep(110)
    expect(signals.classList).toContain('signal-3')
    expect(signals.classList).not.toContain('signal-2')
    await sleep(110)
    expect(signals.classList).toContain('signal-4')
    expect(signals.classList).not.toContain('signal-3')
    await sleep(110)
    expect(signals.classList).toContain('signal-5')
    expect(signals.classList).not.toContain('signal-4')
  })
})


describe('3. Cosmic Adjuster', () => {
  it('should add the specified number of rockets, planets, and airships', () => {
    const rockets = document.querySelector('#rockets')
    const planets = document.querySelector('#planets')
    const airships = document.querySelector('#airships')


    expect(rockets.children.length).toBe(6)
    expect(planets.children.length).toBe(5)
    expect(airships.children.length).toBe(4)
  })
})
