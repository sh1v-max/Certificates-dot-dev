---
difficulty: 2
tags: Coding Challenge, Modules
chapter: "Chapter 7: ES6+ Features"
---

# Module Mage: Modules Challenge

## Challenge Description

Welcome to the Module Mage Academy! As a newly enrolled magic apprentice, you need to use modern JavaScript module magic to create various magical spells and enchanted items.

Complete all tasks in `/src/spells.js` to become the brightest new star at the Module Mage Academy!

## Requirements

1. Basic Spell Exports:

   - Create and export the following basic spell functions in `src/1-spells.js`:
     - `fireball`: returns "🔥 Fireball!"
     - `frostNova`: returns "❄️ Frost Nova!"
   - Import and use these spells in `src/main.js`

2. Magic Item Aliases:

   - Export magic item objects in `src/2-items.js`
   - In `src/main.js`, import `magicWand` as `wizardStaff` using an alias

3. Default Wizard:

   - Create and default export a wizard object in `src/3-wizard.js`
   - Import this wizard in `src/main.js`

4. Dynamic Spellbook:

   - Export all objects in the `/src/4-spellbooks/` directory
   - Implement the `loadSpellBook` function that dynamically imports the corresponding module based on the spellbook name passed in
   - Spellbook modules are located in the `/src/4-spellbooks/` directory

5. Magic Aggregation:

   - Implement `src/magic.js` file that re-exports all contents from `src/1-spells.js` and `src/2-items.js`
   - Use a single import statement in `src/main.js` to get all magical content

## Expected Output

After completing the challenge, you will see the Module Mage Academy's magical page:

![Module Mage Screenshot](https://raw.githubusercontent.com/JavaScript-Certification/images/refs/heads/main/images/training/7-2/module-mage.jpg)
