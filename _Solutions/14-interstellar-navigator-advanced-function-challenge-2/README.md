---
difficulty: 2
tags: Code Challenge, training
chapter: "Chapter 4: Advanced Functions"
training: true
---

# Interstellar Navigator: Advanced Function Challenge

## Challenge Description

In this challenge, Your mission is to become an Interstellar Navigator by using JavaScript functions.

Complete all tasks in `/src/main.js`.

## Requirements

1. Star Counter:

  - As you navigate through the stars, you need a reliable way to count them.
  - Implement a function `createStarCounter` that returns an object. This object should have a private `value` variable initialized with the provided `initialValue` and three methods: `increment`, `decrement`, and `getValue`.
  - The `increment` method should increase the `value` by 1.
  - The `decrement` method should decrease the `value` by 1.
  - The `getValue` method should return the current `value`.

![screenshot of solution](https://raw.githubusercontent.com/JavaScript-Certification/images/refs/heads/main/images/training/4-2/star-counter.png)

2. Cosmic Signal Broadcaster:

  - As an Interstellar Navigator, you have a function `broadcastSignals` that is supposed to broadcast a series of cosmic signals. Each signal should be sent after a specific time interval and must add a corresponding class to a container in the DOM.
  - The current implementation of `broadcastSignals` has a bug. Instead of adding the correct class for each signal, it adds the same class for each signal. This is causing confusion in the signal broadcast system.
  - Identify and fix the bug in the `broadcastSignals` function. Ensure that each signal is sent after 100 milliseconds and adds the correct class (`signal-1`, `signal-2`, etc.) to the container with id `signalBroadcaster`. The previous signal class should be removed when the next signal is added.

![screenshot of solution](https://raw.githubusercontent.com/JavaScript-Certification/images/refs/heads/main/images/training/4-2/signal-broadcaster.gif)

3. Function Chain: Cosmic Adjuster:

   - To maintain the balance of the cosmos, you need to adjust the number of rockets, planets, and airships.
   - Implement a function `createCosmicAdjuster` that returns an object with chainable methods `addRockets`, `addPlanets`, and `addAirships`. Each method should add the specified number of elements to the respective container in the DOM.
   - The `addRockets` method should add `span` elements to the container with id `rockets`.
   - The `addPlanets` method should add `span` elements to the container with id `planets`.
   - The `addAirships` method should add `span` elements to the container with id `airships`.

![screenshot of solution](https://raw.githubusercontent.com/JavaScript-Certification/images/refs/heads/main/images/training/4-2/cosmic-adjuster.png)
