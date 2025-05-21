const handleMouseOver = (event) => {
  // ..
  event.target.classList.add('hovered')
}

const handleMouseLeave = (event) => {
  // ..
  event.target.classList.remove('hovered')
}

let text
const handleInput = (event) => {

  // ..
  text = event.target.value
  document.querySelector('#nameDisplay').textContent = text
}

const handleClick = () => {
  // ..
  alert(`Hello, ${text}!`)
}

const addEventListeners = () => {
  // Add event listeners here
  const btn = document.querySelector('#button')
  btn.addEventListener('mouseover', handleMouseOver)
  btn.addEventListener('mouseleave', handleMouseLeave)
  btn.addEventListener('click', handleClick)
  const input = document.querySelector('#nameInput')
  input.addEventListener('input', handleInput)
}

export const main = () => {
  addEventListeners()
}
