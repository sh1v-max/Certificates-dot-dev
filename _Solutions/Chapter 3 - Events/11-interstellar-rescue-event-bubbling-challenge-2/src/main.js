

// 1. Prevent Hyperlink to Black Hole
const blackHoleLink = document.querySelector('#blackHoleLink')
blackHoleLink.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('Black Hole avoided!')
})

// 2. Block Unauthorized Communications

const communicationForm = document.querySelector('#communicationForm')
communicationForm.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log('Unauthorized communication blocked!')
})


// 3. Activate Rescue Beacon

const rescueBeaconButton = document.querySelector('#rescueBeaconButton')
rescueBeaconButton.addEventListener('click', (event) => {
  event.stopPropagation()
  console.log('Rescue beacon activated!')
})

document.addEventListener('click', () => {
  console.log('Rescue beacon deactivated!')
})


// 4. Retrieve Space Supplies

const suppliesContainer = document.querySelector('#suppliesContainer')
suppliesContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'SPAN') {
    event.stopPropagation()
    console.log(event.target.textContent)
  }
})

const addSupplyButton = document.querySelector('#addSupplyButton')
addSupplyButton.addEventListener('click', () => {
  const newSupply = document.createElement('span')
  const index = suppliesContainer.children.length + 1
  newSupply.textContent = `Supply ${index}`
  suppliesContainer.appendChild(newSupply)
})
