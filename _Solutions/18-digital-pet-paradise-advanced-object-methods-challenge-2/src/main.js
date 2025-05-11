import { pikachu, charmander, newSkills } from '../public/data'
import {
  renderPetPetAttributes,
  renderPetHealthIndex,
  renderSkillList,
  renderPetProtectionStatus,
  renderBlazeAbilityExist
} from './render'

// 1. Pet Attribute List
export function listPetAttributes (pet) {
  return Object.keys(pet)
}


renderPetPetAttributes(listPetAttributes(pikachu))

// 2. Pet Health Index Calculation
export function calculatePetHealth (petStatus) {
  const healthMetrics = Object.values(petStatus)
  const sum = healthMetrics.reduce((acc, val) => acc + val, 0)
  return sum / healthMetrics.length
}


renderPetHealthIndex(calculatePetHealth(charmander.status))


// 3. Pet Skill Upgrade
export function upgradePetSkills (currentSkills, newSkills) {
  return Object.assign({}, currentSkills, newSkills)
}


renderSkillList(upgradePetSkills(pikachu.skills, newSkills))

// 4. Rare Pet Protection
export function protectRarePet (rarePet) {
  return Object.freeze(rarePet)
}


renderPetProtectionStatus(protectRarePet(pikachu))

// 5. Pet Special Ability Check
export function checkSpecialAbility (pet, abilityName) {
  return pet.hasOwnProperty('abilities') && pet.abilities.hasOwnProperty(abilityName)
}


renderBlazeAbilityExist(checkSpecialAbility(charmander, 'blaze'))
