// complete the challenge here 👇
const numbers = [
  23,
  54,
  42,
  87,
  47,
  15,
  98,
  6,
  63,
  41
]

let even = 0
let odd = 0

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    even++
  } else {
    odd++
  }
}

console.log('Even numbers:', even)
console.log('Odd numbers:', odd)

let low = 0
let med = 0
let high = 0

for (let number of numbers) {
  if (number < 30) {
    low++
  } else if (number <= 70) {
    med++
  } else {
    high++
  }
}

console.log('low numbers:', low)
console.log('medium numbers:', med)
console.log('high numbers:', high)

const sum = numbers.reduce((acc, number) => acc + number, 0)

const avg = (sum / numbers.length).toFixed(2)

console.log('sum:', sum)
console.log('average:', avg)
