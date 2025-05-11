---
difficulty: 1
tags: codechallenge, training
chapter: "Chapter 1: JavaScript Fundamentals"
training: true
---

# Declaring Variables Challenge

# Challenge Description

In this challenge, you'll get practice declaring variables of different data types. You should do everything below in `/src/main.js`

## Requirements

1. Declare a variable that can never be assigned a new value:
  -  Call it `javascript`
  -  give it the value `king`
  -  log this variable to the console
  -  What type data type is this?
  -  Which keyword did you use to define it? `let` or `const`
  -  Try re-assigning a new value to it on the next line. What happens? (Once complete, you can remove this failed re-assignment)
2. Check to see if the `javascript` variable includes the word `hard` 
   - assign the result to a variable called `jsIsHard`

> 💡 HINT: You can use the string method `includes` to check if a substring exists within a string. [See an example on W3 schools here](https://www.w3schools.com/jsref/jsref_includes.asp).

3. Declare another variable called `age`
  - Give it the value `12`
  - console log it's value
  - Update the value to `13`
  - console log the new value
4. Declare a variable called `isPreppingForExam`
  - Set it's value to `true`
  - console log `isPreppingForExam`
5. Declare a variable called `isOlderThan8`
   1. Give it a value of `age > 8`
   2. console log the result
   3. What data type is it?
6. Finally, declare a variable called `thisVarHasNoValue`
  - Do NOT assign it a value
  - console log `thisVarHasNoValue`
  - What is logged?

## What to Expect

You should have the following logged to the console.

```
king
false
false
12
13
true
true
```