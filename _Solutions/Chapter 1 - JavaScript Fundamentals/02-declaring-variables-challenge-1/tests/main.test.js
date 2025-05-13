import { expect, test, describe, afterAll, vi, beforeEach, beforeAll } from 'vitest'


test('the variable `javascript` has been defined with the value `king`', () => {
  const {
    javascript,
    type
  } = checkVariable('javascript')
  expect(javascript).toBe('king')
  expect(type).toBe('string')
})

test('the variable `jsIsHard` has been defined and is a boolean false', () => {
  const {
    jsIsHard,
    type
  } = checkVariable('jsIsHard')
  expect(jsIsHard).toBe(false)
  expect(type).toBe('boolean')
})

test('the variable `age` has been defined and is a number 13', () => {
  const {
    age,
    type
  } = checkVariable('age')
  expect(age).toBe(13)
  expect(type).toBe('number')
})

test('the variable `isPreppingForExam` has been defined as a boolean true', () => {
  const {
    isPreppingForExam,
    type
  } = checkVariable('isPreppingForExam')
  expect(isPreppingForExam).toBe(true)
  expect(type).toBe('boolean')
})

test('the variable `isOlderThan8` has resolved to a boolean true', () => {
  const {
    isOlderThan8,
    type
  } = checkVariable('isOlderThan8')
  expect(isOlderThan8).toBe(true)
  expect(type).toBe('boolean')
})

test('the variable `hasNoValueVar` is undefined', () => {
  const {
    thisVarHasNoValue,
    type
  } = checkVariable('thisVarHasNoValue')
  expect(thisVarHasNoValue).toBe(undefined)
  expect(type).toBe('undefined')
})

function checkVariable (name) {
  try {
    const _selector = `#${name}Var`
    const value = document.querySelector(_selector).innerText.trim()
    return JSON.parse(value)
  } catch (e) {
    throw new Error(e.message)
  }
}
