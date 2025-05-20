

export function main () {
  console.log('hello')
  const timer = document.querySelector('#timer')
  const start = document.querySelector('#start')
  const pause = document.querySelector('#pause')
  const reset = document.querySelector('#reset')

  let seconds = 0
  let intervalId = null

  function formatTime (seconds) {
    return seconds.toString().padStart(2, '0')
  }

  timer.textContent = formatTime(seconds)
  console.log(reset)

  start.addEventListener('click', () => {
    start.classList.add('hidden')
    pause.classList.remove('hidden')

    intervalId = setInterval(() => {
      seconds++
      timer.textContent = formatTime(seconds)
    }, 1000)
  })

  pause.addEventListener('click', () => {
    clearInterval(intervalId)

    start.classList.remove('hidden')
    pause.classList.add('hidden')
  })

  reset.addEventListener('click', () => {
    clearInterval(intervalId)
    seconds = 0
    timer.textContent = formatTime(seconds)

    start.classList.remove('hidden')
    pause.classList.add('hidden')
  })
}
