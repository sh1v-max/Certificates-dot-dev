
const handleMouseOver = (event) => {
  event.target.classList.add('hovered')
}

const handleMouseLeave = (event) => {
  event.target.classList.remove('hovered')
}

let name

const handleInput = (event) => {
  name = event.target.value
  document.querySelector('#nameDisplay').textContent = name
}

const handleClick = () => {
  alert(`Hello, ${name}!`)
}


const addEventListeners = () => {
  document.querySelector('#button').addEventListener('mouseover', handleMouseOver)
  document.querySelector('#button').addEventListener('mouseleave', handleMouseLeave)
  document.querySelector('#nameInput').addEventListener('input', handleInput)
  document.querySelector('#button').addEventListener('click', handleClick)
}

export const main = () => {
  addEventListeners()
}


