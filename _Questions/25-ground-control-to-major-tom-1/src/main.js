import { logMessage, getRandomApiUrl } from '../utils/helpers'

const setupConnectButton = () => {
  // Your code goes here
}

const setupLaunchButton = () => {
  // Your code goes here
}

const setupAbortButton = () => {
  // Your code goes here
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
