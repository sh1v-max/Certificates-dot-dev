
const treasures = [
  { 'name': 'Gold Coin',
    'delay': 500 },
  { 'name': 'Silver Coin',
    'delay': 1000 },
  { 'name': 'Diamond',
    'delay': 1500 }
]


const sequentialContainer = document.querySelector('#sequential')
const parallelContainer = document.querySelector('#parallel')

function renderTreasure (name, container) {
  const treasureEle = document.createElement('span')
  const normalizedClassName = name.split(' ').join('-').
    toLowerCase()
  treasureEle.classList.add(normalizedClassName)
  container.appendChild(treasureEle)
}

// 1. Treasure Finder

export function findTreasure (treasureName, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        'name': treasureName,
        'foundAt': Date.now()
      })
    }, delay)
  })
}

// 2. Sequential Treasure Hunt

export async function sequentialHunt (treasures) {
  const foundTreasures = []
  for (const treasure of treasures) {
    const foundTreasure = await findTreasure(treasure.name, treasure.delay)
    renderTreasure(foundTreasure.name, sequentialContainer)
    foundTreasures.push(foundTreasure)
  }
  return foundTreasures
}

sequentialHunt(treasures)

// 3. Parallel Treasure Hunt

export async function parallelHunt (treasures) {
  const foundTreasures = await Promise.all(treasures.map(async (treasure) => {
    const foundTreasure = await findTreasure(treasure.name, treasure.delay)
    return foundTreasure
  }))
  return foundTreasures
}

parallelHunt(treasures).then((foundTreasures) => {
  foundTreasures.forEach((treasure) => {
    renderTreasure(treasure.name, parallelContainer)
  })
})
