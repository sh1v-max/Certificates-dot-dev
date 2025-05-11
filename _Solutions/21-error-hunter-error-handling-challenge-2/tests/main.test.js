import { describe, it, expect, beforeAll } from 'vitest'
console.log = () => {}

let mainModule

describe('parseMagicSpell', () => {
  beforeAll(async () => {
    mainModule = await import('../src/main')
  })
  it('should correctly parse a valid JSON string', () => {
    const result = mainModule.parseMagicSpell('{"spell": "fireball", "power": 10}')
    expect(result).toEqual({ 'spell': 'fireball',
      'power': 10 })
  })

  it('should handle an invalid JSON string', () => {
    const error = mainModule.parseMagicSpell('{"spell": "fireball", "power": 10,}')
    expect(error).toBeInstanceOf(Error)
    expect(error.name).toBe('SyntaxError')
    expect(error.message).toBe('Expected double-quoted property name in JSON at position 34')
  })
})

describe('createMagicArray', () => {
  it('should create an array of the specified length', () => {
    const createMagicArray = mainModule.createMagicArray
    const result = createMagicArray(5)
    expect(result).toBeInstanceOf(Array)
    expect(result.length).toBe(5)
  })

  it('should handle negative length', () => {
    const createMagicArray = mainModule.createMagicArray
    const error = createMagicArray(-1)
    expect(error).toBeInstanceOf(Error)
    expect(error.name).toBe('RangeError')
    expect(error.message).toBe('Invalid array length')
  })
})

describe('castSpell', () => {
  it('should correctly cast known spells', () => {
    const castSpell = mainModule.castSpell
    expect(castSpell('fireball', 'dragon')).toBe('Cast fireball at dragon')
    expect(castSpell('heal', 'warrior')).toBe('Heal warrior')
    expect(castSpell('shield', 'mage')).toBe('Apply shield to mage')
  })

  it('should handle unknown spells', () => {
    const castSpell = mainModule.castSpell
    const error = castSpell('invisibility', 'wizard')
    expect(error).toBeInstanceOf(Error)
    expect(error.name).toBe('TypeError')
    expect(error.message).toBe('spells[spellName] is not a function')
  })
})
