// complete the challenge here 👇
function createVirtualPet (name, species, mood) {
  return {
    name,
    species,
    mood
  }
}

const pixel = createVirtualPet('Pixel', 'dog', 0.8)
const bitsy = createVirtualPet('Bitsy', 'cat', 0.6)
const datastream = createVirtualPet('Datastream', 'fish', 0.5)


const petSanctuary = {}
function addToSanctuary (pet) {
  petSanctuary[pet.name] = pet
}

addToSanctuary(pixel)
addToSanctuary(bitsy)
addToSanctuary(datastream)

console.log(petSanctuary)

function isPetInSanctuary (petName) {
  return petName in petSanctuary
}

console.log('--sanctuary check--')
console.log('pixel is in sanctuary:', isPetInSanctuary('Pixel'))
console.log('glitch is in sanctuary:', isPetInSanctuary('Glitch'))

function generatePetReport () {
  console.log('--pet report--')
  for (const petName in petSanctuary) {
    const pet = petSanctuary[petName]
    console.log(`name: ${pet.name}, species: ${pet.species}, mood: ${pet.mood}`)
  }
}

generatePetReport()

function findHappyPets (threshold) {
  const happyPets = []
  for (const petName in petSanctuary) {
    const pet = petSanctuary[petName]
    if (pet.mood > threshold) {
      happyPets.push(pet)
    }
  }
  return happyPets
}

console.log('--happy pets--')
console.log(findHappyPets(0.7))
