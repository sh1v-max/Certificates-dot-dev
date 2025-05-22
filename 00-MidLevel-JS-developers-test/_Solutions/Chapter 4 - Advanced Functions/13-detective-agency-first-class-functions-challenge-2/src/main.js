

// 1. Analyze Evidence

export function analyzeEvidence (array, callback, initialValue) {
  let acc = initialValue
  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i])
  }
  return acc
}

const evidence = [
  2,
  4,
  6,
  8
]
const totalEvidence = analyzeEvidence(evidence, (acc, val) => acc + val, 0)
console.log(totalEvidence)


// 2. Enhance Investigation Skills

export function createSkillEnhancer (n) {
  return function (power) {
    return power * n
  }
}

const doubleSkill = createSkillEnhancer(2)
console.log(doubleSkill(5))


// 3. Track Suspect Movements

export function trackMovements (locations, callback) {
  locations.forEach((location, index) => {
    setTimeout(() => {
      callback(location)
    }, index * 200)
  })
}

const locations = [
  'Park',
  'Mall',
  'Cafe'
]
trackMovements(locations, (location) => {
  console.log(`Suspect spotted at: ${location}`)
})


// 4. Combine Investigation Techniques

export function composeTechniques (...funcs) {
  return function (arg) {
    return funcs.reduceRight((acc, fn) => fn(acc), arg)
  }
}

const addForensics = (x) => x + ' with Forensic Analysis'
const addInterrogation = (x) => x + ' with Interrogation'
const combinedTechnique = composeTechniques(addInterrogation, addForensics)
console.log(combinedTechnique('Investigation'))


// 5. Filter Suspect List

export function filterSuspects (creatures, predicate) {
  const result = []
  for (let i = 0; i < creatures.length; i++) {
    if (predicate(creatures[i])) {
      result.push(creatures[i])
    }
  }
  return result
}


const suspects = [
  { 'name': 'Alice',
    'age': 30,
    'location': 'Park' },
  { 'name': 'Bob',
    'age': 25,
    'location': 'Mall' },
  { 'name': 'Charlie',
    'age': 35,
    'location': 'Cafe' }
]
const isAtPark = (suspect) => suspect.location === 'Park'
const suspectsAtPark = filterSuspects(suspects, isAtPark)
console.log(suspectsAtPark)
