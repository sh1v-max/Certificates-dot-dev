---
difficulty: 2
tags: JavaScript, Error Handling
chapter: "Chapter 8: Error Handling"
training: true
---

# Kitchen Safety Guardian: Custom Errors Challenge

## Challenge Description

Welcome to "Precision Kitchen"! As a perfectionist chef, your task is to ensure that every critical aspect of the kitchen operates flawlessly. You need to identify different types of potential issues in key functions and actively throw appropriate types of errors. Demonstrate your programming skills and professional expertise through meticulous error handling!

Complete all tasks in `/src/main.js` to become the most competent kitchen safety guardian!

## Requirements

1. Temperature Controller:

   - Refine the `setOvenTemperature` function.
   - This function accepts a temperature parameter (in Celsius).
   - If the temperature is not a number type, throw a TypeError with the message "Temperature must be a number".
   - If the temperature is below 0 degrees or above 280 degrees, throw a RangeError with the message "Temperature out of valid range".
   - In normal cases, return the message "Temperature set successfully".
   - The `setOvenTemperature` function should work as expected with the following:

   ![screenshot of requirement 1 solution](https://s3.amazonaws.com/images.certificates.dev/1-temperature-controller.png)


2. Ingredient Inspector:

   - Refine the `checkIngredientFreshness` function.
   - This function accepts two parameters: ingredient name and shelf life (in days).
   - If the ingredient name is not a string, throw a TypeError with the message "Ingredient name must be a string".
   - If the shelf life is not an integer, throw a TypeError with the message "Shelf life must be an integer".
   - If the ingredient name is an empty string, return a custom `EmptyIngredientError` with the name "EmptyIngredientError" and message "Ingredient name cannot be empty".

      - 💡: You can create a custom error by extending `Error`
      - 💡: Export `EmptyIngredientError` so that we can test it

   - In normal cases, return the message "[Ingredient name] is fresh and usable".
   - The `checkIngredientFreshness` function should work as expected with the following:

   ![screenshot of requirement 2 solution](https://s3.amazonaws.com/images.certificates.dev/2-ingredient-inspector.png)

3. Menu Planner:

   - Refine the `addDishToMenu` function.
   - This function accepts two parameters: dish name and price.
   - If the dish name is not a string or is an empty string, throw a TypeError with the message "Invalid dish name".
   - If the price is not a number or is negative, throw a TypeError with the message "Invalid price".
   - If the dish name already exists in the menu, throw an Error with the message "Dish already exists in the menu".
   - In normal cases, return the message "[Dish name] has been added to the menu".
   - The `addDishToMenu` function should work as expected with the following:

   ![screenshot of requirement 3 solution](https://s3.amazonaws.com/images.certificates.dev/3-menu-planner.png)

