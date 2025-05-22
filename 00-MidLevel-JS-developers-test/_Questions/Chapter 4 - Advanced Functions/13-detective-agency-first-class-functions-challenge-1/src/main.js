// complete the challenge here 👇


// 1. Analyze Evidence

export function analyzeEvidence () {}

const evidence = [
  2,
  4,
  6,
  8
]
const totalEvidence = analyzeEvidence(evidence, (acc, val) => acc + val, 0)
console.log(totalEvidence)


// 2. Enhance Investigation Skills

export function createSkillEnhancer () {}

const doubleSkill = createSkillEnhancer(2)
console.log(doubleSkill(5))


// 3. Track Suspect Movements

export function trackMovements () {}

const locations = [
  'Park',
  'Mall',
  'Cafe'
]
trackMovements(locations, (location) => {
  console.log(`Suspect spotted at: ${location}`)
})


// 4. Combine Investigation Techniques

export function composeTechniques () {}

const addForensics = (x) => x + ' with Forensic Analysis'
const addInterrogation = (x) => x + ' with Interrogation'
const combinedTechnique = composeTechniques(addInterrogation, addForensics)
console.log(combinedTechnique('Investigation'))


// 5. Filter Suspect List

export function filterSuspects () {}

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
