// 1. Number List
const numbers = [
  23,
  54,
  32,
  87,
  47,
  15,
  98,
  6,
  63,
  41
]

// 2. Even/Odd Counter
let evenCount = 0
let oddCount = 0

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenCount++
  } else {
    oddCount++
  }
}

console.log('Even numbers:', evenCount)
console.log('Odd numbers:', oddCount)

// 3. Range Classifier
let lowCount = 0
let mediumCount = 0
let highCount = 0

// for... of also works for arrays
for (let number of numbers) {
  if (number < 30) {
    lowCount++
  } else if (number <= 70) {
    mediumCount++
  } else {
    highCount++
  }
}


console.log('Low numbers:', lowCount)
console.log('Medium numbers:', mediumCount)
console.log('High numbers:', highCount)

// 4. Sum and Average
let sum = 0

/*
 * you could also use the .reduce method
 * const sum = numbers.reduce((acc, number) => acc + number, 0)
 */
numbers.forEach((number) => {
  sum += number
})


const average = (sum / numbers.length).toFixed(2)

console.log('Sum:', sum)
console.log('Average:', average)

