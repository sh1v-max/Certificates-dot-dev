---
difficulty: 2
tags: codechallenge, training
chapter: "Chapter 3: Events"
training: true
---

# Enchanted Forest Game: Common UI Events

## Challenge Description

In this challenge, you are a brave adventurer navigating through an enchanted forest filled with magical creatures and ancient artifacts. Use your JavaScript event handling skills to complete various tasks!

Complete all tasks in `/src/main.js` and demonstrate your proficiency in handling various JavaScript events.

## Requirements

1. Avoid the Enchanted Spider:

- Find a `div` with `id="spiderWeb"` on the page.
- When the mouse hovers over this `div`, add the class `spider-web` to the element.
- When the mouse leaves this `div`, remove the class `spider-web` to the element.
- When the class is added you should see a spider web spider-web on the page.

![screenshot of solution](https://github.com/JavaScript-Certification/images/blob/main/images/training/3-3/spider.gif?raw=true)

2. Activate Magic Portal:

- Find a form with `id="magicPortalForm"` on the page.
- When the Enter key is pressed, log "Magic Portal activated!" and prevent the form's default submission behavior.

3. Track Fairy Movements:

- When the pointer is moved while holding down the `Ctrl` key, set the top and left position of the element with the class `fairy` to the event `clientX` and `clientY` properties so that the fairy svg image follows the mouse around.

> 💡 HINT: The `clientX` and `clientY` props are provided as numbers while the style `top` and `left` expect a value that includes the unit `px`

![screenshot of solution](https://github.com/JavaScript-Certification/images/blob/main/images/training/3-3/fairy.gif?raw=true)

4. Summon Fireflies:

- Find a button with `id="fireflyButton"` on the page.
- When the button is pressed, add the class `firefly` to the button.
- When the button is released, remove the class `firefly` to the button.

![screenshot of solution](https://github.com/JavaScript-Certification/images/blob/main/images/training/3-3/firefly.gif?raw=true)

5. Scroll through Ancient Scrolls:

- Find a container with `id="scrollContainer"` on the page.
- When the container is scrolled, update the `top` property of the element with the class="tiger" to the container's `scrollTop` value.

![screenshot of solution](https://github.com/JavaScript-Certification/images/blob/main/images/training/3-3/tiger.gif?raw=true)

6. Navigate through the Maze:

- When the arrow keys are pressed, move the explorer's position by 10px in the corresponding direction using the `top` and `left` properties of the element with the `class="explorer"`.

  - `ArrowUp`: Add 10px to the `top` property.
  - `ArrowDown`: Subtract 10px from the `top` property.
  - `ArrowLeft`: Subtract 10px from the `left` property.
  - `ArrowRight`: Add 10px to the `left` property.

![screenshot of solution](https://github.com/JavaScript-Certification/images/blob/main/images/training/3-3/explorer.gif?raw=true)

7. Detect Magical Creatures:

- Find an area with `id="creatureDetector"` on the page.
- When the pointer enters this area, log "Magical creature detected!".
- When the pointer leaves this area, log "Magical creature left!".
- Ensure that entering or leaving any child elements within this area also triggers the log messages.
