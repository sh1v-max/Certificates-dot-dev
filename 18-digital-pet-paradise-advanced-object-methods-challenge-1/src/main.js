// complete the challenge here 👇

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
  const health = Object.values(petStatus)
  console.log(health)
  const sum = health.reduce((acc, val) => acc + val, 0)
  return sum / health.length
}

renderPetHealthIndex(calculatePetHealth(charmander.status))

// 3. Pet Skill Upgrade
export function upgradePetSkills (currentSkills, newSkills) {
  return { ...currentSkills,
    ...newSkills }
}

renderSkillList(upgradePetSkills(pikachu.skills, newSkills))

// 4. Rare Pet Protection
export function protectRarePet (rarePet) {
  return Object(rarePet)
}

renderPetProtectionStatus(protectRarePet(pikachu))

// 5. Pet Special Ability Check
export function checkSpecialAbility(pet, abilityName) {
  return Object.hasOwn(pet, 'abilities') && Object.hasOwn(pet.abilities, abilityName);
}


renderBlazeAbilityExist(checkSpecialAbility(charmander, 'blaze'))
