---
difficulty: 2
tags: codechallenge, training
chapter: "Chapter 1: JavaScript Fundamentals"
training: true
---

# Virtual Pet Sanctuary - Objects Challenge

## Challenge Description

As the manager of a virtual pet sanctuary, you've been tasked with creating a data management system for the digital creatures in your care. You'll use JavaScript objects to represent various virtual pets and implement functions to manage and analyze their data.

Complete all tasks in `/src/main.js`.

## Requirements

1. Create Virtual Pet:
   - Create a function `createVirtualPet` that takes parameters for name, species, and mood.
   - It should return an object with these properties using property value shorthand.
   - Create pets: 
     - "Pixel" (species: dog, mood: 0.8), 
     - "Bitsy" (species: cat, mood: 0.6), 
     - and "Datastream" (species: fish, mood: 0.5).

2. Add to Sanctuary:
   - Create an empty object called `petSanctuary`.
   - Implement a function `addToSanctuary` that takes a virtual pet object and adds it to the sanctuary. The pet's name should be the key, and the pet object should be the value.
   - Add the three pets created in step 1 to the sanctuary and log the resulting object.

3. Check Sanctuary:
   - Implement a function `isPetInSanctuary` that takes a pet name and returns true if the pet is in the sanctuary, false otherwise. Use the `in` operator.
   - Test this function with "Pixel" and "Glitch", logging the results.
      ```
      --Sanctuary Check--
      Pixel is in sanctuary: [result]
      Glitch is in sanctuary: [result]
      console.log('')
      ```

4. Generate Pet Report:
   - Implement a function `generatePetReport` that uses a `for...in` loop to iterate over the sanctuary.
   - Start by logging: "--Pet Report--"
   - Then, for each pet, it should log: "Name: [name], Species: [species], Mood: [mood]"
   - Call this function to generate a report of your virtual pets.

5. Find Happy Pets:
   - Implement a function `findHappyPets` that takes a mood threshold as a parameter.
   - It should return an array of pet names that have a mood greater than or equal to the threshold.
   - Test this function with a threshold of 0.7 and log the result.
      ```
      --Happy Pets-- 
      [array of happy pets]
      ```

## What to Expect

Your output should look similar to this:

```
{
   Bitsy: {name: 'Bitsy', species: 'cat', mood: 0.6},
   Datastream: {name: 'Datastream', species: 'fish', mood: 0.5},
   Pixel: {name: 'Pixel', species: 'dog', mood: 0.8},
}

--Sanctuary Check--
Pixel is in sanctuary: true
Glitch is in sanctuary: false

--Pet Report--
Name: Pixel, Species: dog, Mood: 0.8
Name: Bitsy, Species: cat, Mood: 0.6
Name: Datastream, Species: fish, Mood: 0.5

--Happy Pets--
[{name: 'Pixel', species: 'dog', mood: 0.8}]
```

> 💡 HINT: Remember to use different ways of accessing object properties (dot notation and square brackets) where appropriate. The `in` operator is useful for checking if a property exists, while `for...in` loops are great for iterating over all properties of an object.