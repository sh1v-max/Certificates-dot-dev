import { logMessage, getApiUrl } from '../utils/helpers'

let connectionActive = false

const setupConnectButton = () => {
  const connectButton = document.getElementById('connect')
  connectButton.addEventListener('click', async () => {
    logMessage('connectStart')

    const apiUrl = getApiUrl()
    const response = await fetch(apiUrl)
    const data = await response.json()

    if (data.status === 500) {
      return logMessage('connectFail')
    }
    connectionActive = true
    logMessage('connectSuccess')
  })
}

let countdownInterval = null
let launchActive = false

const setupLaunchButton = () => {
  const launchButton = document.getElementById('launch')
  launchButton.addEventListener('click', () => {
    if (!connectionActive) {
      return logMessage('notConnected')
    }

    let countdown = 3
    logMessage('launchStart')

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

const setupAbortButton = () => {
  const abortButton = document.getElementById('abort')
  abortButton.addEventListener('click', () => {
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
