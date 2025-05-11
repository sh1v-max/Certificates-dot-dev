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
}


renderPetPetAttributes(listPetAttributes(pikachu))

// 2. Pet Health Index Calculation
export function calculatePetHealth (petStatus) {

}


renderPetHealthIndex(calculatePetHealth(charmander.status))


// 3. Pet Skill Upgrade
export function upgradePetSkills (currentSkills, newSkills) {
}


renderSkillList(upgradePetSkills(pikachu.skills, newSkills))

// 4. Rare Pet Protection
export function protectRarePet (rarePet) {
}


renderPetProtectionStatus(protectRarePet(pikachu))

// 5. Pet Special Ability Check
export function checkSpecialAbility (pet, abilityName) {
}


renderBlazeAbilityExist(checkSpecialAbility(charmander, 'blaze'))
