

// 1. Avoid the Enchanted Spider
const spiderWeb = document.querySelector('#spiderWeb')
spiderWeb.addEventListener('mouseenter', () => {
  spiderWeb.classList.add('spider-web')
})

spiderWeb.addEventListener('mouseleave', () => {
  spiderWeb.classList.remove('spider-web')
})

// 2. Activate Magic Portal

const magicPortalForm = document.querySelector('#magicPortalForm')

magicPortalForm.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault()
    console.log('Magic Portal activated!')
  }
})


// 3. Track Fairy Movements

const fairy = document.querySelector('.fairy')
document.addEventListener('mousemove', (e) => {
  if (e.ctrlKey) {
    fairy.style.left = `${e.clientX}px`
    fairy.style.top = `${e.clientY}px`
  }
})


// 4. Summon Fireflies

const fireflyButton = document.querySelector('#fireflyButton')

fireflyButton.addEventListener('mousedown', () => {
  fireflyButton.classList.add('firefly')
})

fireflyButton.addEventListener('mouseup', () => {
  fireflyButton.classList.remove('firefly')
})


// 5. Scroll through Ancient Scrolls

const scrollContainer = document.querySelector('#scrollContainer')
const tiger = document.querySelector('.tiger')
scrollContainer.addEventListener('scroll', () => {
  tiger.style.top = scrollContainer.scrollTop + 'px'
})


// 6. Navigate through the Maze

const explorer = document.querySelector('.explorer')
document.addEventListener('keydown', (event) => {
  let top = parseInt(explorer.style.top) || 0
  let left = parseInt(explorer.style.left) || 0
  switch (event.key) {
  case 'ArrowUp':
    top -= 10
    break
  case 'ArrowDown':
    top += 10
    break
  case 'ArrowLeft':
    left -= 10
    break
  case 'ArrowRight':
    left += 10
    break
  }
  explorer.style.top = `${top}px`
  explorer.style.left = `${left}px`
})

// 7. Detect Magical Creatures

const creatureDetector = document.querySelector('#creatureDetector')

creatureDetector.addEventListener('mouseover', (event) => {
  console.log('Magical creature detected!')
})

creatureDetector.addEventListener('mouseout', (event) => {
  console.log('Magical creature left!')
})
