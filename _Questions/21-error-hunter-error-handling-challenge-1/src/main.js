// complete the challenge here 👇

// 1. Syntax Trap
export function parseMagicSpell (spellString) {
  const spellObject = JSON.parse(spellString)
  return spellObject
}

console.log(parseMagicSpell('{"spell": "fireball", "power": 10,}'))

// 2. Range Maze
export function createMagicArray (length) {
  return new Array(length)
}

console.log(createMagicArray(-1))

// 3. Reference Enigma
export function castSpell (spellName, target) {
  const spells = {
    'fireball': (t) => `Cast fireball at ${t}`,
    'heal': (t) => `Heal ${t}`,
    'shield': (t) => `Apply shield to ${t}`
  }

  return spells[spellName](target)
}


console.log(castSpell('invisibility', 'wizard'))
