'use strict'

/*
 * Why this file?
 * You don't need to know anything about it for the exercises
 * but for internal use and if you're curious this is what it does:
 * Since the main.js is a JS module and we aren't exporting anything (because users shouldn't need to know about that yet)
 * we need a way of sharing the variables with the tests.
 * This can't be done with pure JS because that's the whole point of modules, they don't pollute the global scope.
 * So we modifiy set the variables as innerText of a div and then query for that div in the tests.
 */


// handle the JS varaiable requirement
try {
  const javascriptVar = document.createElement('div')
  javascriptVar.id = 'javascriptVar'
  javascriptVar.innerText = JSON.stringify({
    'type': typeof javascript,
    'javascript': javascript
  })
  document.querySelector('body').appendChild(javascriptVar)
} catch (err) {
  // test will fail
}


// handle the jsIsHard variable requirement
try {
  const jsIsHardVar = document.createElement('div')
  jsIsHardVar.id = 'jsIsHardVar'
  jsIsHardVar.innerText = JSON.stringify({
    'type': typeof jsIsHard,
    'jsIsHard': jsIsHard
  })
  document.querySelector('body').appendChild(jsIsHardVar)
} catch (err) {

  // test will fail
}

// handle the age variable requirement
try {
  const ageVar = document.createElement('div')
  ageVar.id = 'ageVar'
  ageVar.innerText = JSON.stringify({
    'type': typeof age,
    'age': age
  })

  document.querySelector('body').appendChild(ageVar)
} catch (err) {

  // test will fail
}

// handle the isPreppingForExam variable requirement
try {
  const isPreppingForExamVar = document.createElement('div')
  isPreppingForExamVar.id = 'isPreppingForExamVar'
  isPreppingForExamVar.innerText = JSON.stringify({
    'type': typeof isPreppingForExam,
    'isPreppingForExam': isPreppingForExam
  })
  document.querySelector('body').appendChild(isPreppingForExamVar)
} catch (err) {

  // test will fail
}

// handle the isOlderThan8 variable requirement
try {
  const olderVar = document.createElement('div')
  olderVar.id = 'isOlderThan8Var'
  olderVar.innerText = JSON.stringify({
    'type': typeof isOlderThan8,
    'isOlderThan8': isOlderThan8
  })
  document.querySelector('body').appendChild(olderVar)
} catch (err) {

  // test will fail
}

// handle the thisVarHasNoValue variable requirement
try {
  const triggerReferenceError = thisVarHasNoValue
  const thisVarHasNoValueVar = document.createElement('div')
  thisVarHasNoValueVar.id = 'thisVarHasNoValueVar'
  thisVarHasNoValueVar.innerText = JSON.stringify({
    'type': typeof thisVarHasNoValue,
    'thisVarHasNoValue': thisVarHasNoValue
  })

  document.querySelector('body').appendChild(thisVarHasNoValueVar)
} catch (err) {

  // test will fail
}

