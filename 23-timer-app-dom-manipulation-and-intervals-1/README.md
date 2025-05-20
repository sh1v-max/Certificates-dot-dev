---
difficulty: 2
tags: codechallenge, training, JavaScript
chapter: "Chapter 9: Challenge Roundup"
training: true
---

# Timer App: Dom Manipulation and Intervals

# Challenge Description

In this challenge, you are tasked with creating a timer application.

The challenge will require that you work in `src/main.js`.

## Requirements

- Show time:
  - The timer must display time in the `ss` format (e.g., `05` for 5 seconds and `20` for 20 seconds).
  - The timer's initial value should be `00`.
  - Display the initial value in the `id=timer` element's `textContent`.

> 💡 HINT: You can use the `padStart` function to prepend a zero to the `seconds` value if it is less than 10.
> [Read Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)

- When the start button (`id=start`) is clicked:
  - Start the timer and update the `id=timer` element's `textContent` every second.
  - Hide the start button (`id=start`).
  - Show the pause button (`id=pause`).

> 💡 HINT: You can use the `setInterval` function to update the timer every second.
> [Read Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval)

> 💡 HINT: You can add and remove the `hidden` class to toggle the display state of elements.

- When the pause button (`id=pause`) is clicked:
  - Pause the timer and stop updating the `id=timer` element's `textContent`.
  - Show the start button (`id=start`).
  - Hide the pause button (`id=pause`).

> 💡 HINT: You can use the `clearInterval` function to stop the timer.
> [Read Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearInterval)

- When the reset button (`id=reset`) is clicked:
  - reset the timer and update the `id=timer` element's `textContent`.
  - Show the start button (`id=start`).
  - Hide the pause button (`id=pause`).

![Screenshot of the solution](https://api.certificates.dev/storage/js-l2-training-9-1-demo.gif)
