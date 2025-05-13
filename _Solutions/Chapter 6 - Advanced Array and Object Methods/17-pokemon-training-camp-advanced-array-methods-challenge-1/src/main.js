// complete the challenge here 👇

import { pokemonData } from '../public/data'
import {
  displayTeamOverview,
  displayPokedex,
  displayChallengeResults
} from './render'

// 1. Pokédex Update
export function updatePokedex (pokemonArray) {
}


// 2. Type Filtering Master
export function filterByType (pokemonArray, type) {
}


// 3. Team Power Assessment
export function calculateTeamPower (pokemonArray) {
}


// 4. Rare Pokémon Explorer
export function findRarePokemon (pokemonArray) {
}


// 5. Evolution Journey
export function evolveAllPokemon (pokemonArray) {
}


// 6. Championship Challenge
export function readyForChampionship (pokemonArray) {
}


// You do not need to focus on and modify the following code
const _data = structuredClone(pokemonData)
// 2. Type Filtering Master
const fireType = filterByType(_data, 'Fire')
// 4. Rare Pokémon Explorer
const rarePokemon = findRarePokemon(_data)

displayChallengeResults(fireType, rarePokemon)
// 5. Evolution Journey
evolveAllPokemon(_data)
// 3. Team Power Assessment
const teamPower = calculateTeamPower(_data)
// 6. Championship Challenge
const isReady = readyForChampionship(_data)

displayTeamOverview(_data, teamPower, isReady)
// 1. Pokédex Update
const updatedPokedex = updatePokedex(_data)

displayPokedex(updatedPokedex)

