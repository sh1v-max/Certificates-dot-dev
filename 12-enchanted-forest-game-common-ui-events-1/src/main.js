// complete the challenge here 👇


// 1. Avoid the Enchanted Spider
const spider = document.querySelector('#spiderWeb')
spider.addEventListener('mousemove', (e) => {
  spider.classList.add('spider-web')
})

spider.addEventListener('mouseout', (e) => {
  spider.classList.remove('spider-web')
})

// 2. Activate Magic Portal
const form = document.querySelector('#magicPortalForm')
form.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault()
    console.log('magic portal activated')
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
const firefly = document.querySelector('#fireflyButton')
firefly.addEventListener('mousedown', (e) => {
  firefly.classList.add('firefly')
})
firefly.addEventListener('mouseup', (e) => {
  firefly.classList.remove('firefly')
})

// 5. Scroll through Ancient Scrolls
const scrollContainer = document.querySelector('#scrollContainer')
scrollContainer.addEventListener('scroll', (e) => {
  const tiger = document.querySelector('.tiger')
  tiger.style.top = scrollContainer.scrollTop + 'px'
})

// 6. Navigate through the Maze
const explorer = document.querySelector('.explorer')
document.addEventListener('keydown', (e) => {
  const directions = {
    'ArrowDown':
    { 'top': 10,
      'left': 0 },
    'ArrowRight':
    { 'top': 0,
      'left': 10 },
    'ArrowLeft':
    { 'top': 0,
      'left': -10 },
    'ArrowUp':
     { 'top': -10,
       'left': 0 }
  }
  const value = directions[e.key]
  if (value) {
    explorer.style.top = `${explorer.offsetTop + value.top}px`
    explorer.style.left = `${explorer.offsetLeft + value.left}px`
  }
})

// 7. Detect Magical Creatures
const creature = document.querySelector('#creatureDetector')
creature.addEventListener('mouseover', (e) => {
  console.log('Magical creature entered!')
})
creature.addEventListener('mouseout', (e) => {
  console.log('Magical creature left!')
})

