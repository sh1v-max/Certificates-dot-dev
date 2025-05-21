import { logMessage, getApiUrl } from '../utils/helpers'

let connected = false

const setupConnectButton = () => {
  // Your code goes here
  const connectBtn = document.getElementById('connect')
  connectBtn.addEventListener('click', async () => {
    logMessage('connectStart')

    const api = getApiUrl()
    const res = await fetch(api)
    const data = await res.json()
    console.log(data)
    if (data.status === 500) {
      return logMessage('connectFail')
    } else {
      connected = true
      logMessage('connectSuccess')
    }
  })
}

let countdownInterval = null
let launchActive = false
const setupLaunchButton = () => {
  // Your code goes here
  const launchBtn = document.getElementById('launch')
  launchBtn.addEventListener('click', () => {
    if (!connected) {
      return logMessage('notConnected')
    }
    logMessage('launchStart')

    let countdown = 10
    countdownInterval = setInterval(() => {
      launchActive = true
      if (countdown > 0) {
        logMessage('launchCountdown', countdown)
        countdown--
      } else {
        launchActive = false
        clearInterval(countdownInterval)
        logMessage('launchSuccess')
      }
    }, 1000)
  })
}

console.log(countdownInterval)

const setupAbortButton = () => {
  // Your code goes here
  const abortBtn = document.getElementById('abort')
  abortBtn.addEventListener('click', () => {
    if (launchActive) {
      launchActive = false
      clearInterval(countdownInterval)
      logMessage('abortSuccess')
    } else {
      logMessage('abortFail')
    }
  })
}

export const main = () => {
  const navContainer = document.querySelector('#app')
  navContainer.innerHTML = `
    <div class="controls">
      <button id="connect">Connect to Major Tom</button>
      <button id="launch">Initiate Launch</button>
      <button id="abort">Abort Mission</button>
    </div>

    <div class="logs">
      <h2>Mission Logs:</h2>
      <ul id="log-list"></ul>
    </div>
  `

  setupConnectButton()
  setupLaunchButton()
  setupAbortButton()
}
