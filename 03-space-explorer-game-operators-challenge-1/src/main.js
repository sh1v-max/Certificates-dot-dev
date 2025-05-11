// Spaceship Initialization
let fuelLevel = 100
let oxygenLevel = 100
const crewMembers = 5
let alienEncounters = 0
let distanceTraveled = 0

// 1. Get Going:
distanceTraveled = 70

// 2. Resource Management:
const fuelReductions = distanceTraveled / 10
fuelLevel = fuelLevel - fuelReductions * 5
console.log(`Fuel reductions: ${fuelReductions}, Current fuel level: ${fuelLevel}`)
const fuelIsLow = fuelLevel <= 30
console.log('Fuel is low: ' + fuelIsLow)

// 3. Oxygen Consumption:
const consumedO2 = distanceTraveled / 100 * crewMembers
oxygenLevel -= consumedO2
console.log(`New oxygen level: ${oxygenLevel}`)
const oxygenIsLow = oxygenLevel < 50
console.log('Oxygen is low:' + oxygenIsLow)

// 4. Alien Encounters
const alienEncountered = distanceTraveled % 2 !== 0
console.log(`Crew encountered aliens: ${alienEncountered}`)

// ignore this (it's useful for unit tests)
window.distanceTraveled = distanceTraveled
