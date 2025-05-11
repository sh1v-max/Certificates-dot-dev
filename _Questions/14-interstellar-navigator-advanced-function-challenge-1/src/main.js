// complete the challenge here 👇


// 1. Star Counter

export function createStarCounter (initialValue) {

}

const starCounter = createStarCounter(3)
starCounter.increment()
starCounter.increment()
starCounter.decrement()
starCounter.decrement()
starCounter.decrement()


const starContainer = document.querySelector('#starContainer')
const starCount = starCounter.getValue()
for (let i = 0; i < starCount; i++) {
  const star = document.createElement('img')
  star.src = '/star.svg'
  star.alt = 'star'
  star.classList.add('star')
  starContainer.appendChild(star)
}

// 2. Cosmic Signal Broadcaster
const signalBroadcaster = document.querySelector('#signalBroadcaster')
export function broadcastSignals () {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      signalBroadcaster.classList.add(`signal-${i}`)
      if (i > 1) {
        signalBroadcaster.classList.remove(`signal-${i - 1}`)
      }
    }, i * 100)
  }
}

broadcastSignals()


// 3. Function Chain: Cosmic Adjuster
const planets = document.querySelector('#planets')
const rockets = document.querySelector('#rockets')
const airships = document.querySelector('#airships')

function createItem (container, count) {
  for (let i = 0; i < count; i++) {
    const planet = document.createElement('span')
    container.appendChild(planet)
  }
}

export function createCosmicAdjuster (initialState) {

}

const adjuster = createCosmicAdjuster({ 'rockets': 1,
  'planets': 2,
  'airships': 3 })
adjuster.addRockets(5).addPlanets(3).
  addAirships(1)
