import { expect, vi, describe, it } from 'vitest'
import {
  analyzeEvidence,
  createSkillEnhancer,
  trackMovements,
  composeTechniques,
  filterSuspects
} from '../src/main.js'


describe('analyzeEvidence', () => {
  it('should not use Array.prototype.reduce', () => {
    const reduceSpy = vi.spyOn(Array.prototype, 'reduce')
    const evidence = [
      2,
      4,
      6,
      8
    ]
    analyzeEvidence(evidence, (acc, val) => acc + val, 0)
    expect(reduceSpy).not.toHaveBeenCalled()
    reduceSpy.mockRestore()
  })
  it('should return the total evidence', () => {
    const evidence = [
      2,
      4,
      6,
      8
    ]
    const totalEvidence = analyzeEvidence(evidence, (acc, val) => acc + val, 0)
    expect(totalEvidence).toBe(20)
  })

  it('should return the total evidence', () => {
    const evidence = [
      1,
      2,
      3,
      4
    ]
    const totalEvidence = analyzeEvidence(evidence, (acc, val) => acc + val, 0)
    expect(totalEvidence).toBe(10)
  })
  it('should return the total evidence', () => {
    const evidence = [
      1,
      2,
      3,
      4,
      5
    ]
    const totalEvidence = analyzeEvidence(evidence, (acc, val) => acc * val, 2)
    expect(totalEvidence).toBe(240)
  })
})


describe('createSkillEnhancer', () => {
  it('should return a function that multiplies the power by n', () => {
    const doubleSkill = createSkillEnhancer(2)
    expect(doubleSkill(5)).toBe(10)
  })
  it('should return a function that multiplies the power by n', () => {
    const tripleSkill = createSkillEnhancer(3)
    expect(tripleSkill(5)).toBe(15)
  })
  it('should return a function that multiplies the power by n', () => {
    const quadrupleSkill = createSkillEnhancer(4)
    expect(quadrupleSkill(8)).toBe(32)
  })
})


function sleep (timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

describe('trackMovements', () => {
  it('should return the total distance', async () => {
    let total = 0
    const movements = [
      2,
      4,
      6,
      8
    ]
    trackMovements(movements, (count) => {
      total += count
    })
    await sleep(210)
    expect(total).toBe(6)
    await sleep(210)
    expect(total).toBe(12)
    await sleep(110)
    expect(total).toBe(12)
    await sleep(100)
    expect(total).toBe(20)
  })
})

describe('composeTechniques', () => {
  it('should return the result of the composed functions', () => {
    const double = (n) => n * 2
    const square = (n) => n * n
    const composed = composeTechniques(double, square)
    expect(composed(5)).toBe(50)
  })
  it('should return the result of the composed functions', () => {
    const triple = (n) => n * 3
    const cube = (n) => n * n * n
    const composed = composeTechniques(triple, cube)
    expect(composed(5)).toBe(375)
  })
  it('should return the result of the composed functions', () => {
    const quadruple = (n) => n * 4
    const fourth = (n) => n * n * n * n
    const composed = composeTechniques(quadruple, fourth)
    expect(composed(5)).toBe(2500)
  })
})


describe('filterSuspects', () => {
  it('should return the filtered suspects', () => {
    const creatures = [
      'Vampire',
      'Werewolf',
      'Zombie',
      'Ghost',
      'Witch'
    ]
    const isMonster = (creature) => [
      'Vampire',
      'Werewolf',
      'Zombie'
    ].includes(creature)
    const suspects = filterSuspects(creatures, isMonster)
    expect(suspects).toEqual([
      'Vampire',
      'Werewolf',
      'Zombie'
    ])
  })
  it('should return the filtered suspects', () => {
    const creatures = [
      'Vampire',
      'Werewolf',
      'Zombie',
      'Ghost',
      'Witch'
    ]
    const isMonster = (creature) => [
      'Ghost',
      'Witch'
    ].includes(creature)
    const suspects = filterSuspects(creatures, isMonster)
    expect(suspects).toEqual([
      'Ghost',
      'Witch'
    ])
  })
  it('should return the filtered suspects', () => {
    const creatures = [
      'Vampire',
      'Werewolf',
      'Zombie',
      'Ghost',
      'Witch'
    ]
    const isMonster = (creature) => [
      'Vampire',
      'Zombie'
    ].includes(creature)
    const suspects = filterSuspects(creatures, isMonster)
    expect(suspects).toEqual([
      'Vampire',
      'Zombie'
    ])
  })

  it('should not use Array.prototype.filter', () => {
    const filterSpy = vi.spyOn(Array.prototype, 'filter')
    filterSuspects([
      1,
      2,
      3
    ], (val) => val > 1)
    expect(filterSpy).not.toHaveBeenCalled()
    filterSpy.mockRestore()
  })
})
