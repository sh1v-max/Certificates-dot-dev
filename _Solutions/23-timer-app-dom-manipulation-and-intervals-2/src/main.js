const TIMER_EL_ID = 'timer'
const START_BTN_ID = 'start'
const PAUSE_BTN_ID = 'pause'
const RESET_BTN_ID = 'reset'

export function main () {
  const timerElement = document.querySelector(`#${TIMER_EL_ID}`)
  const startButton = document.querySelector(`#${START_BTN_ID}`)
  const pauseButton = document.querySelector(`#${PAUSE_BTN_ID}`)
  const resetButton = document.querySelector(`#${RESET_BTN_ID}`)

  function addEventListener (element, event, handler) {
    element.addEventListener(event, handler)
  }

  function formatTime (seconds) {
    const secs = seconds.toString().padStart(2, '0')
    return `${secs}`
  }

  function updateTimer (time) {
    timerElement.textContent = time
  }

  let intervalId = null
  let seconds = 0

  updateTimer(formatTime(seconds))

  addEventListener(startButton, 'click', () => {
    startButton.classList.add('hidden')
    pauseButton.classList.remove('hidden')
    intervalId = setInterval(() => {
      seconds++
      updateTimer(formatTime(seconds))
    }, 1000)
  })

  addEventListener(pauseButton, 'click', () => {
    startButton.classList.remove('hidden')
    pauseButton.classList.add('hidden')
    clearInterval(intervalId)
    intervalId = null
  })

  addEventListener(resetButton, 'click', () => {
    clearInterval(intervalId)
    intervalId = null
    seconds = 0
    updateTimer(formatTime(seconds))
    startButton.classList.remove('hidden')
    pauseButton.classList.add('hidden')
  })
}

