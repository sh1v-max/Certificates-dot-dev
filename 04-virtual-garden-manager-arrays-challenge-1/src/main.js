// complete the challenge here 👇
const garden = [
  'tomato',
  'carrot',
  'lettuce',
  'cucumber',
  'pepper'
]
console.log(`initial garden: ${garden}`)

// garden growth
garden.push('pumpkin')
garden.unshift('sunflower')

console.log(`updated garden: ${garden}`)
console.log(`number of plants: ${garden.length}`)

// harvest
const rmLastItem = garden.pop()
const rmFirstItem = garden.shift()
console.log(`harvested: ${rmFirstItem} and ${rmLastItem}`)

// maintenance
const cuIndex = garden.indexOf('cucumber')
garden[cuIndex] = 'bell pepper'
console.log(`replaced plant at index: ${cuIndex}`)
console.log(`garden after replacement: ${garden}`)

// health check
const includeWeeds = garden.includes('weeds')
console.log(`garden includes weeds: ${includeWeeds}`)
