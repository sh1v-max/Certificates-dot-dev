import { describe, it, expect } from 'vitest'
import { setOvenTemperature, checkIngredientFreshness, addDishToMenu, EmptyIngredientError } from '../src/main'

describe('setOvenTemperature', () => {
  it('should set temperature successfully within valid range', () => {
    expect(setOvenTemperature(180)).toBe('Temperature set successfully')
  })

  it('should set temperature successfully at 0', () => {
    expect(setOvenTemperature(0)).toBe('Temperature set successfully')
  })

  it('should set temperature successfully at 280', () => {
    expect(setOvenTemperature(280)).toBe('Temperature set successfully')
  })

  it('should throw TypeError when temperature is not a number', () => {
    expect(() => setOvenTemperature('hot')).toThrow(TypeError('Temperature must be a number'))
  })

  it('should throw RangeError when temperature is less than 0', () => {
    expect(() => setOvenTemperature(-1)).toThrow(RangeError('Temperature out of valid range'))
  })

  it('should throw RangeError when temperature is greater than 280', () => {
    expect(() => setOvenTemperature(281)).toThrow(RangeError('Temperature out of valid range'))
  })
})

describe('checkIngredientFreshness', () => {
  it('should correctly check ingredient freshness', () => {
    expect(checkIngredientFreshness('carrot', 7)).toBe('carrot is fresh and usable')
  })

  it('should throw TypeError when ingredient name is not a string', () => {
    expect(() => checkIngredientFreshness(123, 7)).toThrow(TypeError('Ingredient name must be a string'))
  })

  it('should throw TypeError when shelf life is not an integer', () => {
    expect(() => checkIngredientFreshness('potato', 3.5)).toThrow(TypeError('Shelf life must be an integer'))
  })

  it('should throw Error when ingredient name is empty', () => {
    try {
      checkIngredientFreshness('', 5)
    } catch (error) {
      expect(error).toBeInstanceOf(EmptyIngredientError)
      expect(error.name).toBe('EmptyIngredientError')
      expect(error.message).toBe('Ingredient name cannot be empty')
    }
  })
})

describe('addDishToMenu', () => {
  it('should successfully add a new dish to the menu', () => {
    expect(addDishToMenu('Kung Pao Chicken2', 38)).toBe('Kung Pao Chicken2 has been added to the menu')
  })

  it('should throw TypeError when dish name is invalid', () => {
    expect(() => addDishToMenu('', 10)).toThrow(TypeError('Invalid dish name'))
  })

  it('should throw TypeError when price is invalid', () => {
    expect(() => addDishToMenu('Mapo Tofu2', -5)).toThrow(TypeError('Invalid price'))
  })

  it('should throw Error when adding an existing dish', () => {
    addDishToMenu('Test Dish2', 15)
    expect(() => addDishToMenu('Test Dish2', 20)).toThrow(Error('Dish already exists in the menu'))
  })
})
