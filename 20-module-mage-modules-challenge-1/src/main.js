// complete the challenge here 👇
import {
  renderSpellsModule,
  renderWizardStaff,
  renderWizard,
  renderFireDynamicModule,
  renderIceDynamicModule,
  renderMagicModule
} from './render.js'

// 1. Basic Spell Exports
import { fireball, frostNova } from './1-spells.js'

// 2. Magic Item Aliases
import { magicWand as wizardStaff } from './2-items.js'

// 3. Default Wizard
import wizard from './3-wizard.js'

// 4. Dynamic Spellbook: Asynchronously load spellbook
export async function loadSpellBook (bookName) {
  const module = await import(`./4-spellbooks/${bookName}Spells.js`)
  return module[`${bookName}Spells`]
}

// 5. Magic Aggregation: Import all magical content from src/5-magic.js
import * as magic from './5-magic.js'

// 1. Basic Spell Exports
renderSpellsModule(fireball(), frostNova())

// 2. Magic Item Aliases
renderWizardStaff(wizardStaff)

// 3. Default Wizard
renderWizard(wizard)

// 4. Dynamic Spellbook
loadSpellBook('fire').then((fireSpells) => {
  if (fireSpells) {
    renderFireDynamicModule(fireSpells.inferno)
  }
})

// 4. Dynamic Spellbook
loadSpellBook('ice').then((iceSpells) => {
  if (iceSpells) {
    renderIceDynamicModule(iceSpells.blizzard)
  }
})

// 5. Magic Aggregation
renderMagicModule(magic.fireball(), magic.magicRobe)


