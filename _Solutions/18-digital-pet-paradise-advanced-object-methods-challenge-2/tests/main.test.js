import { describe, it, expect } from 'vitest'
import { listPetAttributes, calculatePetHealth, upgradePetSkills, protectRarePet, checkSpecialAbility } from '../src/main'
import { pikachu, charmander, newSkills } from '../public/data'

describe('Pet Functions Tests', () => {
  it('should correctly list pet attributes', () => {
    const attributes = listPetAttributes(pikachu)
    expect(attributes).toContain('name')
    expect(attributes).toContain('type')
    expect(attributes).toContain('skills')
  })

  it('should correctly calculate pet health index', () => {
    const health = calculatePetHealth(charmander.status)
    expect(health).toBe(65)
  })

  it('should correctly upgrade pet skills', () => {
    const upgradedSkills = upgradePetSkills(pikachu.skills, newSkills)
    expect(upgradedSkills).toEqual({ ...pikachu.skills,
      ...newSkills })
  })

  it('should freeze rare pet object', () => {
    const protectedPet = protectRarePet(pikachu)
    expect(Object.isFrozen(protectedPet)).toBe(true)
    expect(() => {
      protectedPet.name = 'NewMew'
    }).toThrow()
  })

  it('should correctly check pet special ability', () => {
    expect(checkSpecialAbility(charmander, 'blaze')).toBe(true)
    expect(checkSpecialAbility(charmander, 'watergun')).toBe(false)
  })
})
