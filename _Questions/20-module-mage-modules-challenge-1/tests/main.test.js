import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { fireball, frostNova } from '../src/1-spells.js'
import { magicWand as wizardStaff } from '../src/2-items.js'
import defaultWizard from '../src/3-wizard.js'
import { loadSpellBook } from '../src/main.js'
import * as magic from '../src/5-magic.js'

describe('Module Mage: JavaScript Modules Challenge Tests', () => {
  // 1. Basic Spell Exports
  describe('Basic Spell Exports', () => {
    it('should return the correct string for fireball', () => {
      expect(fireball()).toBe('🔥 Fireball!')
    })

    it('should return the correct string for frostNova', () => {
      expect(frostNova()).toBe('❄️ Frost Nova!')
    })
  })

  // 2. Magic Item Aliases
  describe('Magic Item Aliases', () => {
    it('should correctly import magicWand as wizardStaff', () => {
      expect(wizardStaff).toBeDefined()
      // Assuming magicWand has a name property
      expect(wizardStaff.name).toBe('Magic Wand')
    })
  })

  // 3. Default Wizard
  describe('Default Wizard Export', () => {
    it('should correctly export the default wizard object', () => {
      expect(defaultWizard).toBeDefined()
      // Assuming the wizard object has a name property
      expect(defaultWizard.name).toBeDefined()
    })
  })

  // 4. Dynamic Spellbook
  describe('Dynamic Spellbook Loading', () => {
    it('should dynamically load a spellbook', async () => {
      const spellBook = await loadSpellBook('fire')
      expect(spellBook).toBeDefined()
      // Assuming the fireSpells spellbook has an inferno spell
      expect(spellBook.inferno).toBeDefined()
    })

    it('should handle non-existent spellbooks', async () => {
      await expect(loadSpellBook('nonexistentBook')).rejects.toThrow()
    })
  })

  // 5. Magic Aggregation
  describe('Magic Aggregation', () => {
    it('should export all spells and items', () => {
      expect(magic.fireball).toBeDefined()
      expect(magic.frostNova).toBeDefined()
      expect(magic.magicWand).toBeDefined()
    })
  })
})
