import { expect, test, vi, beforeAll } from 'vitest'


beforeAll(async () => {
  await import('../src/main.js')
})


test('1. Prevent Hyperlink to Black Hole', async () => {
  const consoleMock = vi.spyOn(console, 'log')
  const blackHoleLink = document.querySelector('#blackHoleLink')
  const event = new MouseEvent('click', {
    'bubbles': true,
    'cancelable': true
  })

  blackHoleLink.dispatchEvent(event)
  expect(event.defaultPrevented).toBe(true)
  expect(consoleMock).toHaveBeenCalledWith('Black Hole avoided!')
  consoleMock.mockRestore()
})

test('2. Block Unauthorized Communications', async () => {
  const communicationForm = document.querySelector('#communicationForm')
  const event = new Event('submit', {
    'bubbles': true,
    'cancelable': true
  })

  const consoleMock = vi.spyOn(console, 'log')

  communicationForm.dispatchEvent(event)
  expect(event.defaultPrevented).toBe(true)
  expect(consoleMock).toHaveBeenCalledWith('Unauthorized communication blocked!')

  consoleMock.mockRestore()
})


test('3. Activate Rescue Beacon', async () => {
  const rescueBeaconButton = document.querySelector('#rescueBeaconButton')
  const buttonEvent = new MouseEvent('click', {
    'bubbles': true,
    'cancelable': true
  })
  const documentEvent = new MouseEvent('click', {
    'bubbles': true,
    'cancelable': true
  })

  const consoleMock = vi.spyOn(console, 'log')

  rescueBeaconButton.dispatchEvent(buttonEvent)
  expect(consoleMock).toBeCalledTimes(1)
  expect(consoleMock).toHaveBeenCalledWith('Rescue beacon activated!')

  document.dispatchEvent(documentEvent)
  expect(consoleMock).toHaveBeenCalledWith('Rescue beacon deactivated!')

  consoleMock.mockRestore()
})

test('4. Retrieve Space Supplies', async () => {
  const suppliesContainer = document.querySelector('#suppliesContainer')
  expect(suppliesContainer.children.length).toBe(3)
  const addSupplyButton = document.querySelector('#addSupplyButton')
  addSupplyButton.click()
  console.log(suppliesContainer.children.length)
  expect(suppliesContainer.children.length).toBe(4)
  expect(suppliesContainer.children.item(3).textContent).toBe('Supply 4')
})

test('4. Retrieve Space Supplies', async () => {
  const suppliesContainer = document.querySelector('#suppliesContainer')
  const span = document.createElement('span')
  span.textContent = 'Supply Test'
  suppliesContainer.appendChild(span)

  const event = new MouseEvent('click', {
    'bubbles': true,
    'cancelable': true
  })

  const consoleMock = vi.spyOn(console, 'log')

  span.dispatchEvent(event)
  expect(consoleMock).toHaveBeenCalledWith('Supply Test')

  consoleMock.mockRestore()
})
