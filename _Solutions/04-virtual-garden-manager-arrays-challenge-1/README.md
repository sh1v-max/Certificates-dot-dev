---
difficulty: 1
tags: codechallenge, training
chapter: "Chapter 1: JavaScript Fundamentals"
training: true
---

# Virtual Garden Manager - Arrays Challenge

## Challenge Description

In this challenge, you'll create a simple virtual garden management system using JavaScript arrays. You'll be planting seeds, watching them grow, and maintaining your garden.

Complete all tasks in `/src/garden.js`.

## Requirements

1. Plant Your Seeds:
   - Create an array called `garden` with the following seeds: "Tomato", "Carrot", "Lettuce", "Cucumber", "Pepper"
   - Log the contents of your garden
   ```
   Initial garden: [contents of the garden array]
   ```

2. Garden Growth:
   - Add "Pumpkin" to the end of your `garden` array
   - Add "Sunflower" to the beginning of your `garden` array
   - Log the updated contents
   ```
   Updated garden: [contents of the garden array]
   ```
   - Log the number of plants in your garden
   ```
   Number of plants: [length of the garden array]
   ```

3. Harvest Time:
   - Remove the last plant from your `garden` array
   - Remove the first plant from your `garden` array
   - Log the harvested plants 
   ```
   Harvested: [first removed plant] and [last removed plant]
   ```

4. Garden Maintenance:
   - Find the index of "Cucumber" in your `garden` array
   - Replace "Cucumber" with "Bell Pepper"
   - Log the index where the replacement occurred 
   ```
   Replaced plant at index: [index of Cucumber]
   ```
   - Log the updated garden
   ```
   Garden after replacement: [contents of the garden array]
   ```

5. Garden Health Check:
   - Check if your garden includes "Weeds"
   - Log the results
   ```
   Garden includes Weeds: [true or false]
   ```

## What to Expect

After completing all steps, your final output should look similar to this:

```
Initial garden: Tomato,Carrot,Lettuce,Cucumber,Pepper
Updated garden: Sunflower,Tomato,Carrot,Lettuce,Cucumber,Pepper,Pumpkin
Number of plants: 7
Harvested: Sunflower and Pumpkin
Replaced plant at index: 3
Garden after replacement: Tomato,Carrot,Lettuce,Bell Pepper,Pepper
Garden includes Weeds: false
```

> 💡 HINT: Remember to use array methods like push(), unshift(), pop(), shift(), indexOf(), and includes() to manipulate and check your arrays.