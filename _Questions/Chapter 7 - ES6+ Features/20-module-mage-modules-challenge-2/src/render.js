// You do not need to focus on and modify the content of this file

export function renderSpellsModule (fireball, frostNova) {
  const fireballEl = document.querySelector('#fireball')
  const frostNovaEl = document.querySelector('#frostNova')
  fireballEl.textContent = fireball
  frostNovaEl.textContent = frostNova
}

export function renderWizardStaff (wizardStaff) {
  const wizardStaffEl = document.querySelector('#wizardStaff')
  wizardStaffEl.textContent = JSON.stringify(wizardStaff, null, 2)
}


export function renderWizard (wizard) {
  const wizardEl = document.querySelector('#wizard')
  wizardEl.textContent = JSON.stringify(wizard)
}

export function renderFireDynamicModule (inferno) {
  const infernoEl = document.querySelector('#inferno')
  infernoEl.textContent = inferno
}

export function renderIceDynamicModule (blizzard) {
  const blizzardEl = document.querySelector('#blizzard')
  blizzardEl.textContent = blizzard
}

export function renderMagicModule (fireball, magicRobe) {
  const fireballEl = document.querySelector('#magicFireball')
  const magicRobeEl = document.querySelector('#magicRobe')
  fireballEl.textContent = fireball
  magicRobeEl.textContent = JSON.stringify(magicRobe)
}
