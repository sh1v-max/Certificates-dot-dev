// complete the challenge here 👇


// 1. Prevent Hyperlink to Black Hole
const blackLink = document.querySelector('#blackHoleLink')
blackLink.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('black hole avoided')
})

// 2. Block Unauthorized Communications
const form = document.querySelector('#communicationForm')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log('unauthorized communication blocked')
})

// 3. Activate Rescue Beacon
const button = document.querySelector('#rescueBeaconButton')
button.addEventListener('click', (e) => {
  e.stopPropagation()
  console.log('rescue beacon activated')
})

document.addEventListener('click', (e) => {
  console.log('rescue beacon deactivated')
})

// 4. Retrieve Space Supplies
const suppliesContainer = document.querySelector('#suppliesContainer')
suppliesContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    e.stopPropagation()
    console.log(e.target.textContent)
  }
})

const supplyButton = document.querySelector('#addSupplyButton')
supplyButton.addEventListener('click', (e) => {
  const newSupply = document.createElement('span')
  const index = suppliesContainer.children.length + 1
  newSupply.textContent = `Supply ${index} `
  suppliesContainer.appendChild(newSupply)
})
