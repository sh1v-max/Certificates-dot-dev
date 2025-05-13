/*
 *  Requirement 1.
 * --------------------------------------------------------------------------
 */
const javascript = 'king' // string
console.log(javascript) // king

// if you try to assign the const to something new it will throw a TypeError: Assignment to constant variable and stop execution of the script

// javascript = 'something else'


/*
 *  Requirement 2.
 * --------------------------------------------------------------------------
 */

// you can provide the result directly to the console.log
console.log(javascript.includes('hard')) // false

// or you can assign it to a variable first and then console log it
const jsIsHard = javascript.includes('hard')
console.log(jsIsHard) // false


/*
 *  Requirement 3.
 * --------------------------------------------------------------------------
 */

let age = 12 // number
console.log(age) // 12
age = 13 // number
console.log(age) // 13

/*
 *  Requirement 4.
 * --------------------------------------------------------------------------
 */

const isPreppingForExam = true // boolean
console.log(isPreppingForExam) // true


/*
 *  Requirement 5.
 * --------------------------------------------------------------------------
 */

const isOlderThan8 = age > 8 // boolean
console.log(isOlderThan8) // true

/*
 *  Requirement 6.
 * --------------------------------------------------------------------------
 */

let thisVarHasNoValue
