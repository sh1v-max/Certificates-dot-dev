import { renderTemperature, renderIngredient, renderMenu } from './render'

// 1. Temperature Controller
export function setOvenTemperature (temperature) {
  if (typeof temperature !== 'number') {
  }
  if (temperature < 0 || temperature > 280) {
  }
  return 'Temperature set successfully'
}


// 2. Ingredient Inspector

// Create EmptyIngredientError here and export it

export function checkIngredientFreshness (ingredientName, shelfLife) {
  if (typeof ingredientName !== 'string') {
  }
  if (!Number.isInteger(shelfLife)) {
  }
  if (ingredientName.trim() === '') {
  }
  return `${ingredientName} is fresh and usable`
}


// 3. Menu Planner
const menu = {
  'Spaghetti Carbonara': 12.99,
  'Margherita Pizza': 10.50,
  'Caesar Salad': 8.75
}

export function addDishToMenu (dishName, price) {
  if (typeof dishName !== 'string' || dishName.trim() === '') {
  }
  if (typeof price !== 'number' || price < 0) {
  }
  if (dishName in menu) {
  }
  menu[dishName] = price
  return `${dishName} has been added to the menu`
}


// You don't care about the code below this comment.

renderTemperature(() => setOvenTemperature(180))
renderTemperature(() => setOvenTemperature(300))
renderTemperature(() => setOvenTemperature('hot'))

renderIngredient(() => checkIngredientFreshness('carrot', 7))
renderIngredient(() => checkIngredientFreshness('', 5))
renderIngredient(() => checkIngredientFreshness('potato', 3.5))

renderMenu(() => addDishToMenu('Kung Pao Chicken', 38))
renderMenu(() => addDishToMenu('Mapo Tofu', -5))
renderMenu(() => addDishToMenu('Kung Pao Chicken', 40))
