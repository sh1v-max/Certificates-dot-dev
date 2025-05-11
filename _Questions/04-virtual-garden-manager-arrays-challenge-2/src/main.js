// 1. Plant Your Seeds:
const garden = [
  'Tomato',
  'Carrot',
  'Lettuce',
  'Cucumber',
  'Pepper'
]
console.log(`Initial garden: ${garden}`)

// 2. Garden Growth:
garden.push('Pumpkin')
garden.unshift('Sunflower')

console.log(`Updated garden: ${garden}`)
console.log(`Number of plants: ${garden.length}`)

// 3. Harvest Time:
const lastItem = garden.pop()
const firstItem = garden.shift()
console.log(`Harvested: ${firstItem} and ${lastItem}`)

// 4. Garden Maintenance:
const cucumberIndex = garden.indexOf('Cucumber')
garden[cucumberIndex] = 'Bell Pepper'
console.log(`Replaced plant at index: ${cucumberIndex}`)
console.log(`Garden after replacement: ${garden}`)

// 5. Garden Health Check:
const includesWeeds = garden.includes('Weeds')
console.log(`Garden includes Weeds: ${includesWeeds}`)
