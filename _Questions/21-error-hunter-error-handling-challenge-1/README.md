---
difficulty: 2
tags: JavaScript, Error Handling
chapter: "Chapter 8: Error Handling"
training: true
---

# Error Hunter: Error Handling Challenge

## Challenge Description

Welcome to "Code Adventure"! As a shrewd code detective, your mission is to uncover the hidden "error goblins" in a series of seemingly normal function calls. These goblins are cunningly concealed within parameters and operations, ready to wreak havoc on our code world at any moment. You need to employ your error handling skills to root out these goblins and maintain peace in the code kingdom!

Complete all tasks in `/src/main.js` to become the most outstanding error hunter!

## Requirements

1. Syntax Trap:

   - Refine the `parseMagicSpell` function.
   - This function accepts a string parameter representing a magic spell.
   - Some inputs may lead to syntax issues. Identify and handle these situations.
   - Return the parsed spell object on success, and return the error object on failure.

2. Range Maze:

   - Refine the `createMagicArray` function.
   - The function receives a single parameter: the length of the magic array to be created.
   - Attempt to create an array of the specified length. Certain lengths might trigger range-related errors.
   - Return the created array on success, and return the error object on failure.

3. Reference Enigma:

   - Refine the `castSpell` function.
   - The function accepts spell name and target as parameters.
   - Some input combinations may result in reference issues. Identify and elegantly handle these situations.
   - Return the spell-casting effect on success, and return the error object on failure.

## What to Expect

You should have the following logged to the console.


```
SyntaxError: Expected double-quoted property name in JSON at position 34 (line 1 column 35)
RangeError: Invalid array length
TypeError: spells[spellName] is not a function
```
