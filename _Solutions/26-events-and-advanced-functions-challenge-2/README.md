---
difficulty: 2
tags: codechallenge, training, JavaScript
chapter: "Chapter 9: Challenge Roundup"
training: true
---

# Events and Advanced Functions Challenge

## Challenge Description

You are tasked with implementing two requirements that involve event handling, DOM manipulation, and advanced functions.

## Requirements

- Requirement 1: Event Handling and Dom Manipulation

  - When the mouse is over the element with the id `button`, add the class `.hovered` to the element.
  - When the mouse is out of the element with the id `button`, remove the class `.hovered` from the element.
  - When the user types in the input with the id `nameInput`, update the text of the element with the id `nameDisplay` to the value of the input in realtime.
  - When the user clicks the button with the id `button`, use `alert` to show the message `Hello, <name>!` where `<name>` is the value of the input with the id `nameInput`.

Once you have completed "Requirement 1", you should be able to see the following behavior:

![Requirement 1 Demo](https://api.certificates.dev/storage/js-l2-training-9-4-0.gif)

- Requirement 2: Advanced Functions
  - Complete the `createDiscount(precentage)` function:
    - This is a higher-order function that takes a discount percentage and returns a function.
    - The returned function takes a single cart item as a parameter and returns a new cart item with the `price` property updated to reflect the discounted price.
    > 💡 HINT: Apply the discount using the formula: `price * (1 - percentage / 100)`

  - Complete the `discountFunction` function:
    - Set the `discountFunction` value to the `createDiscount` function you created to generate a closure function that applies the discount percentage defined by `discountPercentage` variable.
  - Complete the `discountedCart` constant:
    - Use the `discountedCart` constant and set its value to Immediately Invoked Function Expression (IIFE).
    - In the IIFE, call the pre-defined `applyDiscount` function, passing the cart array and the `discountFunction`.
  - Complete the `displayCart(cart, callback)` function:
    - It takes the a cart array as the first parameter and a callback function as the second parameter.
    - It calls the callback function with the cart array.
  - Finally, trigger the `displayCart` function with the following arguments:
    - For the first argument, pass the `discountedCart` array.
    - For the second argument, pass a callback that:
      - Store the the DOM element with the `id=cart` in a variable.
      - Invokes `updateDom`, passing the cart and the variable with the DOM element.

Once you have completed "Requirement 2", you should be able to see the following behavior:

![Requirement 2 Demo](https://api.certificates.dev/storage/js-l2-training-9-4-1.png)

## Other Considerations

- Don't remove the `export` keyword from functions. It is required for the automated tests to run.
