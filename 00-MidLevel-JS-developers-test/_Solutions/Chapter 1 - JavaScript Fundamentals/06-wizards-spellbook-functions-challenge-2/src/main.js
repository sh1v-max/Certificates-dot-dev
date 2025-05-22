
// 1. Spell Declaration
function createPotion (baseIngredient = 'water', catalystIngredient = 'moonstone dust', powerBooster = 'dragon breath') {
  return `A mystical brew of ${baseIngredient}, ${catalystIngredient}, and ${powerBooster}!`
}

console.log(createPotion())
console.log(createPotion('witch hazel'))
console.log(createPotion('toadstool extract', 'pixie wings'))
console.log(createPotion('shadow essence', 'vampire tears', 'phoenix ash'))


// 2. Enchantment Expression
const castCharm = function (name) {
  return `May luck and fortune smile upon ${name}!`
}

console.log(castCharm('Elara the Elf'))


// 3. Arcane Arrow Function
const calculateSpellPower = (age) => age * 10
console.log('Spell Power: ' + calculateSpellPower(25))

// 4. Spellbook Array
const castFireball = (power) => `Fireball blazes with power ${power}!`
const summonWaterSpout = (power) => `Water spout surges with power ${power}!`
const callLightning = (power) => `Lightning strikes with power ${power}!`


const elementalSpells = [
  castFireball,
  summonWaterSpout,
  callLightning
]

for (let i in elementalSpells) {
  const castSpell = elementalSpells[i]
  console.log(castSpell(Number(i) + 1))
}

// 5. Magical Condition
function determineSpellStrength (power) {
  if (power < 50) {
    return 'Weak'
  } else if (power < 100) {
    return 'Moderate'
  } else {
    return 'Strong'
  }
}
console.log(determineSpellStrength(30))
console.log(determineSpellStrength(75))
console.log(determineSpellStrength(100))

// 6. Familiar's Task (Callback Function)
function transformIngredients (ingredients, transformer) {
  const transformedIngredients = []
  for (const ingredient of ingredients) {
    transformedIngredients.push(transformer(ingredient))
  }
  return transformedIngredients
}

const transformedIngredients = transformIngredients([
  'newt eyes',
  'toe of frog',
  'wool of bat',
  'tongue of dog'
], (ingredient) => `enchanted ${ingredient}`)
console.log(transformedIngredients)
