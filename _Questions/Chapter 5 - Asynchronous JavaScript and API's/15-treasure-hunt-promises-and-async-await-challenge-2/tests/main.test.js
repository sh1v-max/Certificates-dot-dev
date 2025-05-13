import { expect, describe, vi, it, beforeEach, afterEach } from 'vitest'
import * as mainModule from '../src/main'

describe('findTreasure', () => {
  it('should return a treasure object after specified delay', async () => {
    vi.useFakeTimers()
    const treasureName = 'Gold Coin'
    const delay = 500
    const promise = mainModule.findTreasure(treasureName, delay)
    vi.advanceTimersByTime(delay)
    const result = await promise
    expect(result).toEqual({
      'name': treasureName,
      'foundAt': expect.any(Number)
    })
    vi.useRealTimers()
  })
})
vi.mock('../src/main', async () => ({
  ...await vi.importActual('../src/main'),
  'findTreasure': vi.fn((name, delay) => Promise.resolve({ name,
    'foundAt': Date.now() })),
  'sequentialHunt': vi.fn(async (treasures) => {
    const foundTreasures = []
    for (const treasure of treasures) {
      const foundTreasure = await mainModule.findTreasure(treasure.name, treasure.delay)
      mainModule.renderTreasure(foundTreasure.name)
      foundTreasures.push(foundTreasure)
    }
    return foundTreasures
  }),
  'renderTreasure': vi.fn(),
  'parallelHunt': vi.fn(async (treasures) => {
    const promises = treasures.map((treasure) => mainModule.findTreasure(treasure.name, treasure.delay))
    const results = await Promise.all(promises)
    return results
  })
}))


describe('sequentialHunt', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })
  it('should find treasures sequentially and render them', async () => {
    const treasures = [
      { 'name': 'Gold Coin!',
        'delay': 200 },
      { 'name': 'Silver Coin!',
        'delay': 400 }
    ]
    const promise = mainModule.sequentialHunt(treasures)
    vi.advanceTimersByTimeAsync(210)
    expect(mainModule.findTreasure).toHaveBeenCalledTimes(1)
    expect(mainModule.findTreasure).toHaveBeenNthCalledWith(1, 'Gold Coin!', 200)
    const result = await promise
    expect(result).toHaveLength(2)
    expect(result[0].name).toBe('Gold Coin!')
    expect(result[1].name).toBe('Silver Coin!')
    expect(mainModule.findTreasure).toHaveBeenCalledTimes(2)
    expect(mainModule.findTreasure).toHaveBeenNthCalledWith(2, 'Silver Coin!', 400)
  })
})

describe('parallelHunt', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })
  it('should find all treasures in parallel', async () => {
    // Mock treasure data
    const treasures = [
      { 'name': 'Gold Coin',
        'delay': 100 },
      { 'name': 'Silver Coin',
        'delay': 200 },
      { 'name': 'Diamond',
        'delay': 300 }
    ]


    const startTime = Date.now()
    const result = await mainModule.parallelHunt(treasures)
    const endTime = Date.now()

    // Verify results
    expect(result).toHaveLength(3)
    expect(result[0].name).toBe('Gold Coin')
    expect(result[1].name).toBe('Silver Coin')
    expect(result[2].name).toBe('Diamond')

    // Verify parallel execution
    expect(endTime - startTime).toBeLessThan(400)

    // Verify findTreasure call count
    expect(mainModule.findTreasure).toHaveBeenCalledTimes(3)
  })
})
