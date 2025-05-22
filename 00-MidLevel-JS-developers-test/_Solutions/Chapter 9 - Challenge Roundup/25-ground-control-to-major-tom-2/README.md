---
difficulty: 2
tags: codechallenge, training, JavaScript
chapter: "Chapter 9: Challenge Roundup"
training: true
---

# Ground Control to Major Tom

## Challenge Description

You’re part of the mission control team, and it’s your job to manage spacecraft systems and communicate with Major Tom during his journey. Implement the required functionality to ensure the mission is a success.

## Requirements

- Connect to Major Tom:

  - When the button with `id="connect"` is clicked:
    - Trigger a fetch request to connect to Major Tom using the API URL from the `getApiUrl()` function.
    - Use the predefined `logMessage` function and pass the string `'connectStart'`.
    - If the fetch response status is `500`, call the `logMessage` function with `'connectFail'`.
    - If the fetch response status is `200`, call the `logMessage` function with `'connectSuccess'`.

- Initiate Launch Sequence:

  - When the button with `id="launch"` is clicked:
    - If no prior successful connection established:
      - Call the `logMessage` function with `'notConnected'`.
    - If connected:
      - Call the `logMessage` function with `'launchStart'`.
      - Perform a countdown (from 3 to 1) every second:
        - Call the `logMessage` function every second during the countdown, passing `'launchCountdown'` as the first argument and the current countdown number as the second.
        - After the countdown, call the `logMessage` function with `'launchSuccess'`.

> 💡 HINT: You can use the `setInterval` function to update the timer every second.
> [Read Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval)

- Abort Mission:

  - When the button with `id="abort"` is clicked:
    - If clicked during an active launch countdown:
      - Stop the countdown.
      - Call the `logMessage` function with `'abortSuccess'`.
    - If no countdown is active, call the `logMessage` function with `'abortFail'`.

![Screenshot](https://api.certificates.dev/storage/js-l2-training-9-3.gif)
