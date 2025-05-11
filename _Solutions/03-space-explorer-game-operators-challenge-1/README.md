---
difficulty: 2
tags: codechallenge, training
chapter: "Chapter 1: JavaScript Fundamentals"
training: true
---

# Space Explorer Game - Operators Challenge

## Challenge Description

In this challenge, your mission is to create a simple space exploration game using JavaScript operators. You'll be managing your spaceship's resources, navigating through space, and encountering aliens. 

Complete all tasks in `/src/main.js`.

## Requirements

1. Get Going!
   - Simulate the spaceship traveling by setting `distanceTraveled` to a new value: 70
  
2. Resource Management:
   - For every 10 units of `distanceTraveled`, reduce `fuelLevel` by 5
   - Log the number of fuel reductions and the current `fuelLevel` as the following message:
   ```
   Fuel reductions: [value here], Current fuel level: [value here]
   ```
   - Fuel is low when there are 30 or less units left
   - Log the status of the fuel
  ```
  Fuel is low: [value here: true or false]
  ```

> 💡 HINT: You can use [string concatenation](https://javascript.info/operators#string-concatenation-with-binary) to assemble the console log message or [use template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) (a concept we'll dive deeper into later).

3. Oxygen Consumption:
   - Oxygen is consumed at a rate of 1 unit per crew member per 100 units of distance
   - Calculate the total oxygen consumed and subtract it from `oxygenLevel`
   - [Use a compound assignment operator](https://www.educative.io/answers/what-are-compound-operators-in-javascript) (aka a [`modify-and-assign` operator](https://javascript.info/operators#modify-in-place)) for this calculation
   - Log the new `oxygenLevel`
   ```
   New oxygen level [real value here]
   ```
   - Oxygen is low when there are less than 20 units left
   - Log the status of the oxygen
   ```
   Oxygen is low: [value here: true or false]
   ```

4. Alien Encounters:
   - Aliens will attack whenever you've traveled a distance that's an odd number of units (ie. has a remainder when divided by 2)
   - Log true or false for the alien encounter
   ```
   Crew encountered aliens: [real value here: true or false]
   ```

5. Change the `travelDistance` to 153. How do the results differ?

## What to Expect

1. Given the `travelDistance` of 70 you should have the following logged:
   ```
   Fuel reductions: 7, Current fuel level: 65
   Fuel is low: false
   New oxygen level: 96.5
   Oxygen is low: false
   Crew encountered aliens: false
   ```
2. Given the `travelDistance` of 153 you should have the following logged:
   ```
   Fuel reductions: 15.3, Current fuel level: 23.5
   Fuel is low: true
   New oxygen level: 92.35
   Oxygen is low: false
   Crew encountered aliens: true
   ```
