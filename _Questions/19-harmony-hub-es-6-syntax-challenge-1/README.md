---
difficulty: 2
tags: Coding Challenge, ES6 Features
chapter: "Chapter 7: ES6+ Features"
---

# Harmony Hub:  ES6+ Syntax Challenge

## Challenge Description

Welcome to Harmony Hub, a cutting-edge digital music studio! As a newly hired JavaScript audio engineer, you need to use modern JavaScript features to create various audio processing and music production functions.

Complete all tasks in `/src/main.js` to become Harmony Hub's star audio programmer!

## Requirements

1. Track Metadata Formatter:

   - Implement the `formatTrackMetadata` function that accepts a title, artist, and a variable number of genres as parameters.
   - Return a formatted html string containing all provided information.
   - Expect: 

      ```html
            <div class="track-title">Bohemian Rhapsody</div>
            <div class="track-artist">Queen</div>
            <div class="track-genres">Rock, Progressive Rock, Opera Rock</div>
      ```

2. Playlist Creator:

   - Implement the `createPlaylist` function that accepts an existing playlist array and any number of new track IDs.
   - Return a new array containing all existing and newly added tracks.

3. Audio Effect Merger:

   - Implement the `mergeAudioEffects` function that accepts a default effects object and a custom effects object.
   - Return a new object merging properties from both input objects, prioritizing values from the custom effects.

4. Mix Assignment:

   - Implement the `assignMixParameters` function that accepts a mix parameters object containing volume, pan.
   - Return a new object with all properties from the input object and add a default 'isMuted' property set to false.

5. Instrument Tuning Check:

   - Implement the `checkInstrumentTuning` function that accepts a tuning object and an instrument name.
   - Return the tuning frequency for the specified instrument, defaulting to 440 if not present.

## Expected Output

After completing the challenge, you will see Harmony Hub's Digital Audio Workstation interface:

![Harmony Hub DAW Screenshot](https://raw.githubusercontent.com/JavaScript-Certification/images/refs/heads/main/images/training/7-1/harmony-hub.jpg)
