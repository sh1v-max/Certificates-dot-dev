export function logMessage (key, value) {
  const logList = document.getElementById('log-list')
  const logItem = document.createElement('li')

  const messages = {
    'connectStart': 'Attempting to connect to Major Tom...',
    'connectSuccess': 'Connection established with Major Tom.',
    'connectFail': 'Connection failed!',
    'notConnected': 'Connection to Major Tom is required.',
    'launchStart': 'Initiating launch sequence...',
    'launchCountdown': `T-minus ${value}`,
    'launchSuccess': 'Launch Successful! Major Tom is in orbit.',
    'abortSuccess': 'Mission aborted! Major Tom is safe.',
    'abortFail': 'No active mission to abort.'
  }

  const message = messages[key]

  if (message) {
    logItem.textContent = message
    logList.appendChild(logItem)
  } else {
    logItem.textContent = `Unknown log key: ${key}`
    logList.appendChild(logItem)
  }
}

export function getApiUrl () {
  return Math.random() > 0.5 ? 'https://dummyjson.com/http/200' : 'https://dummyjson.com/http/500'
}
