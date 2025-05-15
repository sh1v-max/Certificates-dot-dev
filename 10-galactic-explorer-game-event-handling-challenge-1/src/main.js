// complete the challenge here 👇


// 1. Initiate the Launch Sequence
const button = document.querySelector('#launchButton')
button.addEventListener('click', () => {
  const rocket = document.querySelector('.rocket')
  rocket.classList.add('launch')
})

// 2. Monitor the Control Input
const controlInput = document.querySelector('#controlInput')
controlInput.addEventListener('keydown', (e) => {
  console.log(e.key)
})

// 3. Track the Mouse Coordinates
const mouse = document.querySelector('.star')
document.addEventListener('mousemove', (e) => {
  mouse.style.left = `${e.clientX}px`
  mouse.style.top = `${e.clientY}px`
})

// 4. Activate the Hyperdrive
const button2 = document.querySelector('#hyperdriveButton')
button2.addEventListener('dblclick', () => {
  document.body.classList.add('hyperdrive')
})
