// Spaceship Initialization
let fuelLevel = 100
let oxygenLevel = 100
const crewMembers = 5
let alienEncounters = 0
let distanceTraveled = 0

// 1. Get Going:

distanceTraveled = 70
// distanceTraveled = 153

// 2. Resource Management:
const numberOfFuelReductions = distanceTraveled / 10
fuelLevel = fuelLevel - numberOfFuelReductions * 5
console.log(`Fuel reductions: ${numberOfFuelReductions}, Current fuel level: ${fuelLevel}`)

const fuelIsLow = fuelLevel <= 30
console.log('Fuel is low: ' + fuelIsLow)


// 3. Oxygen Consumption:
const consumedOxygen = distanceTraveled / 100 * crewMembers
oxygenLevel -= consumedOxygen
console.log(`New oxygen level: ${oxygenLevel}`)
console.log(`Oxygen is low: ${oxygenLevel < 50}`)

// 4. Alien Encounters:
const aliensEncountered = distanceTraveled % 2 !== 0
console.log(`Crew encountered aliens: ${aliensEncountered}`)

// ignore this (it's useful for unit tests)
window.distanceTraveled = distanceTraveled
