// 1. Create Virtual Pet
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

// 2. Add to Sanctuary
const petSanctuary = {}

function addToSanctuary (pet) {
  petSanctuary[pet.name] = pet
}

addToSanctuary(pixel)
addToSanctuary(bitsy)
addToSanctuary(datastream)

console.log(petSanctuary)

// 3. Check Sanctuary
function isPetInSanctuary (petName) {
  return petName in petSanctuary
}

console.log('--Sanctuary Check--')
console.log('Pixel is in sanctuary:', isPetInSanctuary('Pixel')) // true
console.log('Glitch is in sanctuary:', isPetInSanctuary('Glitch')) // false

// 4. Generate Pet Report
function generatePetReport () {
  console.log('--Pet Report--')
  for (let petName in petSanctuary) {
    const pet = petSanctuary[petName]
    console.log(`Name: ${pet.name}, Species: ${pet.species}, Mood: ${pet.mood}`)
  }
}

generatePetReport()

// 5. Find Happy Pets
function findHappyPets (threshold) {
  const happyPets = []
  for (let petName in petSanctuary) {
    let pet = petSanctuary[petName]
    if (pet.mood > threshold) {
      happyPets.push(pet)
    }
  }
  return happyPets
}

console.log('--Happy Pets--')
console.log(findHappyPets(0.7))
