---
difficulty: 2
tags: Coding Challenge, training
chapter: "Chapter 5: Asynchronous JavaScript and API's"
training: true
---

# Treasure Hunt: Promises and Async/Await Challenge

## Challenge Description

In this challenge, you will embark on an exciting treasure hunt adventure using JavaScript's asynchronous features.

Complete all tasks in `/src/main.js`.

## Requirements

1. Treasure Finder:

   - As a treasure hunter, you need a reliable way to find treasures asynchronously.
   - Implement a function `findTreasure` that returns a treasure object after a delay.
   - The function should accept `treasureName` and `delay` in milliseconds.
   - The returned treasure object should have properties `name` and `foundAt` (timestamp when the treasure was found).
   - This function will be invoked in the requirements below.

> 💡 HINT - the [setTimeout function](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) and [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) will be very useful for this challenge

2. Sequential Treasure Hunt:

   - You need to find multiple treasures in a specific order.
   - Implement a function `sequentialHunt` that accepts an array of treasure names and delays.
   - Find each treasure in sequence using the `findTreasure` function. 
   - For each treasure found, immediately call the provided `renderTreasure` method to display it.
   - Return an array of all found treasures after all treasures have been found and rendered.

![screenshot of solution](https://raw.githubusercontent.com/JavaScript-Certification/images/refs/heads/main/images/training/5-1/sequential-treasure.gif)

3. Parallel Treasure Hunt:

   - Sometimes, to save time, treasures can be found in parallel.
   - Implement a function `parallelHunt` that accepts an array of treasure names and delays.
   - Asynchronously find all treasures in parallel, logging the name when each treasure is found.
   - Receive the array of treasures returned by the `parallelHunt` function, and call the provided `renderTreasure` method for each treasure to display it.

> 💡 HINT - [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) is useful for know when multiple promises ALL resolve

![screenshot of solution](https://raw.githubusercontent.com/JavaScript-Certification/images/refs/heads/main/images/training/5-1/parallel-treasure.gif)
