---
difficulty: 2
tags: codechallenge, training
chapter: "Chapter 1: JavaScript Fundamentals"
training: true
---

# Number Analyzer - Control Structures Challenge

## Challenge Description

In this challenge, you'll create a program that analyzes a list of numbers using conditionals and loops. You'll perform various calculations and generate a report based on the numbers.

Complete all tasks in `/src/main.js`.

## Requirements

1. Number List:
   - Create an array called `numbers` with the following values: 
     `[23, 54, 32, 87, 47, 15, 98, 6, 63, 41]`

2. Even/Odd Counter:
   - Use a loop to count how many even and odd numbers are in the `numbers` array
   - Log the results
   ```
   Even numbers: [count]
   Odd numbers: [count]
   ```

3. Range Classifier:
   - Use a loop and conditionals to classify each number as:
     - "Low" if it's less than 30
     - "Medium" if it's between 30 and 70 (inclusive)
     - "High" if it's above 70
   - Count how many numbers fall into each category
   - Log the results
   ```
   Low numbers: [count]
   Medium numbers: [count]
   High numbers: [count]
   ```

4. Sum and Average:
   - Calculate the sum of all numbers in the array
   - Calculate the average (mean) of the numbers
   - Round the average to two decimal places
   - Log the results
   ```
   Sum: [sum]
   Average: [average]
   ```

## What to Expect

Your output should look like this:

```
Even numbers: 4
Odd numbers: 6
Low numbers: 3
Medium numbers: 5
High numbers: 2
Sum: 466
Average: 46.60
```

> 💡 HINT: Remember to use appropriate loop structures (for or while) and conditional statements (if-else) to implement the required logic. Pay attention to the initial value, condition, and increment of your loops.