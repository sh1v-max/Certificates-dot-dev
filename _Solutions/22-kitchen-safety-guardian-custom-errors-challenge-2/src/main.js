import { renderTemperature, renderIngredient, renderMenu } from './render'

// 1. Temperature Controller
export function setOvenTemperature (temperature) {
  if (typeof temperature !== 'number') {
    throw new TypeError('Temperature must be a number')
  }
  if (temperature < 0 || temperature > 280) {
    throw new RangeError('Temperature out of valid range')
  }
  return 'Temperature set successfully'
}


// 2. Ingredient Inspector

export class EmptyIngredientError extends Error {
  constructor (message) {
    super(message)
    this.name = 'EmptyIngredientError'
  }
}

export function checkIngredientFreshness (ingredientName, shelfLife) {
  if (typeof ingredientName !== 'string') {
    throw new TypeError('Ingredient name must be a string')
  }
  if (!Number.isInteger(shelfLife)) {
    throw new TypeError('Shelf life must be an integer')
  }
  if (ingredientName.trim() === '') {
    throw new EmptyIngredientError('Ingredient name cannot be empty')
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
    throw new TypeError('Invalid dish name')
  }
  if (typeof price !== 'number' || price < 0) {
    throw new TypeError('Invalid price')
  }
  if (dishName in menu) {
    throw new Error('Dish already exists in the menu')
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
