import { expect, test, vi, beforeAll } from 'vitest'


beforeAll(async () => {
  await import('../src/main.js')
})


test('1. Avoid the Enchanted Spider', async () => {
  const spiderWeb = document.querySelector('#spiderWeb')
  const event = new MouseEvent('mouseenter', { 'bubbles': true })
  const event2 = new MouseEvent('mouseover', { 'bubbles': true })
  spiderWeb.dispatchEvent(event)
  spiderWeb.dispatchEvent(event2)
  expect(spiderWeb.classList.contains('spider-web')).toBeTruthy()
})


test('1. Avoid the Enchanted Spider', async () => {
  const spiderWeb = document.querySelector('#spiderWeb')
  const event = new MouseEvent('mouseleave', { 'bubbles': true })
  const event2 = new MouseEvent('mouseout', { 'bubbles': true })
  spiderWeb.dispatchEvent(event)
  spiderWeb.dispatchEvent(event2)
  expect(spiderWeb.classList.contains('spider-web')).toBeFalsy()
})

test('2. Activate Magic Portal', async () => {
  const spy = vi.spyOn(console, 'log')
  const magicPortalForm = document.querySelector('#magicPortalForm')
  const event = new KeyboardEvent('keydown', { 'key': 'Enter',
    'bubbles': true })
  magicPortalForm.dispatchEvent(event)
  expect(spy).toHaveBeenCalledWith('Magic Portal activated!')
  spy.mockRestore()
})

test('3. Track Fairy Movements', async () => {
  const fairy = document.querySelector('.fairy')
  const event = new MouseEvent('mousemove', {
    'clientX': 100,
    'clientY': 200
  })
  document.dispatchEvent(event)
  expect(fairy.style.left).not.toBe('100px')
  expect(fairy.style.top).not.toBe('200px')
})

test('3. Track Fairy Movements', async () => {
  const fairy = document.querySelector('.fairy')
  const event = new MouseEvent('mousemove', {
    'clientX': 200,
    'clientY': 400,
    'ctrlKey': true
  })
  document.dispatchEvent(event)
  expect(fairy.style.left).toBe('200px')
  expect(fairy.style.top).toBe('400px')
})

test('4. Summon Fireflies', async () => {
  const fireflyButton = document.querySelector('#fireflyButton')
  const event = new MouseEvent('mousedown', { 'bubbles': true })
  fireflyButton.dispatchEvent(event)
  expect(fireflyButton.classList.contains('firefly')).toBeTruthy()
})

test('4. Summon Fireflies', async () => {
  const fireflyButton = document.querySelector('#fireflyButton')
  const event = new MouseEvent('mouseup', { 'bubbles': true })
  fireflyButton.dispatchEvent(event)
  expect(fireflyButton.classList.contains('firefly')).toBeFalsy()
})

test('5. Scroll through Ancient Scrolls', async () => {
  const scrollContainer = document.querySelector('#scrollContainer')
  const tiger = document.querySelector('.tiger')
  scrollContainer.scrollTop = 50
  const event = new Event('scroll', { 'bubbles': true })
  scrollContainer.dispatchEvent(event)
  expect(tiger.style.top).toBe('50px')
})

test('6. Navigate through the Maze', async () => {
  const explorer = document.querySelector('.explorer')
  const directions = {
    'ArrowDown':
    { 'top': 10,
      'left': 0 },
    'ArrowRight':
    { 'top': 10,
      'left': 10 },
    'ArrowLeft':
    { 'top': 10,
      'left': 0 },
    'ArrowUp':
     { 'top': 0,
       'left': 0 }
  }
  const spy = vi.spyOn(console, 'log')
  for (const [
    key,
    value
  ] of Object.entries(directions)) {
    const event = new KeyboardEvent('keydown', { key,
      'bubbles': true })
    document.dispatchEvent(event)
    expect(explorer.style.top).toBe(`${value.top}px`)
    expect(explorer.style.left).toBe(`${value.left}px`)
  }
  spy.mockRestore()
})

test('7. Detect Magical Creatures', async () => {
  const creatureDetector = document.querySelector('#creatureDetector')
  const spy = vi.spyOn(console, 'log')
  const event = new MouseEvent('mouseover', { 'bubbles': true })
  creatureDetector.dispatchEvent(event)
  expect(spy).toHaveBeenCalledWith('Magical creature detected!')
  spy.mockRestore()
})

test('7. Detect Magical Creatures', async () => {
  const creatureDetector = document.querySelector('#creatureDetector')
  const spy = vi.spyOn(console, 'log')
  const event = new MouseEvent('mouseout', { 'bubbles': true })
  creatureDetector.dispatchEvent(event)
  expect(spy).toHaveBeenCalledWith('Magical creature left!')
  spy.mockRestore()
})
