// You do not need to focus on and modify the content of this file

export function renderPetPetAttributes (attributes) {
  const attributesEle = document.querySelector('#attributes')
  attributes.forEach((attr) => {
    const el = document.createElement('span')
    el.textContent = attr
    attributesEle.appendChild(el)
  })
}

export function renderPetHealthIndex (value) {
  const healthValue = document.querySelector('#healthIndex')
  healthValue.textContent = value
}

export function renderSkillList (skills) {
  const skillContainer = document.querySelector('#skillList')
  for (const skill in skills) {
    const el = document.createElement('li')
    el.textContent = skill
    skillContainer.appendChild(el)
  }
}

export function renderPetProtectionStatus (pet) {
  const el = document.querySelector('#protectionStatus')
  const status = Object.isFrozen(pet)
    ? 'Protected'
    : 'Unprotected'
  el.textContent = status
}

export function renderBlazeAbilityExist (pet) {
  const el = document.querySelector('#abilityName')
  const status = Object.isFrozen(pet)
    ? 'True'
    : 'False'
  el.textContent = status
}
