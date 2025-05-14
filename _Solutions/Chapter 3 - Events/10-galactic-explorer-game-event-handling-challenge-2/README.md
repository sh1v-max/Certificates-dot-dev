---
difficulty: 2
tags: codechallenge, training
chapter: "Chapter 3: Events"
training: true
---

# Galactic Explorer Game: Event Handling Challenge

## Challenge Description

In this challenge, your mission is to create a simple galactic exploration game using the basics of JavaScript event handling.

Complete all tasks in `/src/main.js` and prove your prowess as a Galactic Explorer!

## Requirements

1. Initiate the Launch Sequence:

   - Bind a click event to the button with `id="launchButton"`.
   - When the button is clicked, add the class `launch` to an element with the class `rocket`
   - When the class is added you should see a rocket svg animate from top to bottom of the right hand side of the page.

![screenshot of solution](https://github.com/JavaScript-Certification/images/blob/main/images/training/3-1/initiate-the-launch-sequence.gif?raw=true)

2. Monitor the Control Input:

   - Find the input field with `id="controlInput"`.
   - Bind a keydown event to the input field.
   - When a key is pressed, log the key that was pressed.
   - 
![screenshot of solution](https://github.com/JavaScript-Certification/images/blob/main/images/training/3-1/monitor-the-control-input.gif?raw=true)

3. Track the Mouse Coordinates:

   - Bind a mousemove event to the document.
   - When the mouse is moved, set the top and left position of the element with the class `star` to the event `clientX` and `clientY` properties so that the star svg image follows the mouse around.

> 💡 HINT: The `clientX` and `clientY` props are provided as numbers while the style `top` and `left` expect a value that includes the unit `px`

![screenshot of solution](https://github.com/JavaScript-Certification/images/blob/main/images/training/3-1/track-the-mouse-coordinates.gif?raw=true)

4. Activate the Hyperdrive:

   - Find the button with `id="hyperdriveButton"`.
   - Bind a double-click event to the button.
   - When the button is double-clicked, add the `hyperdrive` class to the document body
   - This will apply a background image to the body

![screenshot of solution](https://github.com/JavaScript-Certification/images/blob/main/images/training/3-1/activate-the-hyperdrive.gif?raw=true)

> 💡 FYI: the animations for this challenge use CSS animations under the hood. You can see them in `public/style.css` It's not necessary to understand how those work for the exam but it's been included to give you a good idea of some practical reason why you would listen for events in JavaScript and then add classes based off of those events.