---
difficulty: 2
tags: codechallenge, training
chapter: "Chapter 4: Advanced Functions"
training: true
---

# Detective Agency: First Class Functions Challenge

## Challenge Description

In this challenge, Your mission is to solve a series of complex cases using JavaScript functions.

Complete all tasks in `/src/main.js` and prove your prowess as a Legendary Detective!

## Requirements

1. Analyze Evidence:

   - Implement a function `analyzeEvidence` that behaves like `Array.prototype.reduce`.

> 💡 HINT: You can [read about how reduce works in the MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).

   - This function will help you analyze the pieces of evidence collected from the crime scenes.
   - Example usage:
  
     ```javascript
     const evidence = [2, 4, 6, 8];
     const totalEvidence = analyzeEvidence(evidence, (acc, val) => acc + val, 0);
     console.log(totalEvidence); // Output: 20
     ```
> 🗒️ NOTE: Please don't use `Array.prototype.reduce` function to implement the function.

2. Enhance Investigation Skills:

   - Implement a higher-order function `createSkillEnhancer` that takes a number `n` and returns a function that multiplies the detective's skill level by `n`.
   - This function will help you enhance your investigation skills.
   - Example usage:
  
     ```javascript
     const doubleSkill = createSkillEnhancer(2);
     console.log(doubleSkill(5)); // Output: 10
     ```

3. Track Suspect Movements:

   - Implement a function `trackMovements` that takes an array of locations and a callback function.
   - Simulate tracking by iterating over the locations with 200ms delay using `setTimeout` and call the callback with each location.
   - Example usage:
  
     ```javascript
     const locations = ['Park', 'Mall', 'Cafe'];
     trackMovements(locations, (location) => {
      // Output: Suspect spotted at: Park, 
      // Suspect spotted at: Mall, Suspect spotted at: Cafe 
      // at 200ms intervals
       console.log(`Suspect spotted at: ${location}`); 
     });
     ```

> 💡 HINT: You can [read up on setTimeout in the MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout).

4. Combine Investigation Techniques:

   - Implement a function `composeTechniques` that takes multiple functions as arguments and returns a new function that is the composition of those functions.
   - The functions should be applied from right to left to form a complete investigation technique.
   - Example usage:

     ```javascript
     const addForensics = x => x + ' with Forensic Analysis';
     const addInterrogation = x => x + ' with Interrogation';
     const combinedTechnique = composeTechniques(addInterrogation, addForensics);
     // Output: Investigation with Forensic Analysis with Interrogation
     console.log(combinedTechnique('Investigation')); 
     ```

5. Filter Suspect List:

   - Implement a function `filterSuspects` that takes an array of suspects and a predicate function.
   - The function should return an array of suspects that satisfy the predicate.
   - Example usage:
     ```javascript
     const suspects = [
       { name: 'Alice', age: 30, location: 'Park' },
       { name: 'Bob', age: 25, location: 'Mall' },
       { name: 'Charlie', age: 35, location: 'Cafe' }
     ];
     const isAtPark = suspect => suspect.location === 'Park';
     const suspectsAtPark = filterSuspects(suspects, isAtPark);
     // Output: [{ name: 'Alice', age: 30, location: 'Park' }]
     console.log(suspectsAtPark); 
     ```
> 🗒️ NOTE: Please don't use `Array.prototype.filter` function to implement the function.

## What to Expect

Your output should look similar to this:

1. Analyze Evidence:

```plaintext
Output: 20
```

2. Enhance Investigation Skills:

```plaintext
Output: 10
```

3. Track Suspect Movements:

(These will not all appear in order because of the delay caused by setTimeout)

```plaintext
Output: Suspect spotted at: Park
Output: Suspect spotted at: Mall
Output: Suspect spotted at: Cafe
```

1. Combine Investigation Techniques:

```plaintext
Output: Investigation with Forensic Analysis with Interrogation
```

5. Filter Suspect List:

```plaintext
Output: [{ name: 'Alice', age: 30, location: 'Park' }]
```

