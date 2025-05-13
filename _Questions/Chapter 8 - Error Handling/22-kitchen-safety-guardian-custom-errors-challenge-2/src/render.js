// You do not need to focus on and modify the content of this file

function render (fn, id) {
  const el = document.querySelector(`#${id}`)
  try {
    const res = fn()
    el.textContent = res
  } catch (e) {
    el.textContent = e.message
  }
}

let renderTemperatureCount = 0
export function renderTemperature (fn) {
  renderTemperatureCount++
  const id = `temperature${renderTemperatureCount}`
  render(fn, id)
}


let renderIngredientCount = 0
export function renderIngredient (fn) {
  renderIngredientCount++
  const id = `ingredient${renderIngredientCount}`
  render(fn, id)
}


let renderMenuCount = 0
export function renderMenu (fn) {
  renderMenuCount++
  const id = `menu${renderMenuCount}`
  render(fn, id)
}
