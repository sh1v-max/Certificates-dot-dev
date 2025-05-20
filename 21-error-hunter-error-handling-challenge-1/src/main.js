// complete the challenge here 👇

// 1. Syntax Trap
export function parseMagicSpell(spellString) {
  try {
    const spellObject = JSON.parse(spellString)
    return spellObject
  } catch (err) {
    return err
  }
}

console.log(parseMagicSpell('{"spell": "fireball", "power": 10,}'))

// 2. Range Maze
export function createMagicArray(length) {
  try {
    return new Array(length)
  } catch (err) {
    return err
  }
}

console.log(createMagicArray(-1))

// 3. Reference Enigma
export function castSpell (spellName, target) {
  try {
    const spells = {
      'fireball': (t) => `Cast fireball at ${t}`,
      'heal': (t) => `Heal ${t}`,
      'shield': (t) => `Apply shield to ${t}`
    }
    return spells[spellName](target)
  } catch (err) {
    return err
  }
}

console.log(castSpell('invisibility', 'wizard'))
