---
difficulty: 2
tags: codechallenge, training
chapter: "Chapter 2: DOM Manipulation"
training: true
---

# Magic Academy: Targeting and Manipulating Elements Challenge

## Challenge Description

In this challenge, you'll embark on a mystical journey to master the arcane arts of DOM manipulation. Your mission is to use your JavaScript skills to prove your magical prowess.

Complete all tasks in `/src/main.js`.

## Requirements

1. Discover the Enchanted Scroll:

   - Find the element with `id="scroll"` on the page.
   - Log the result.

2. Decipher the Ancient Spell:

   - Get the text content of the element with `id="scroll"`.
   - Log the result.

3. Rewrite the Spell:

   - Change the text content of the element with `id="scroll"` to "Abracadabra!".

4. Reveal the Magic Attribute:

   - Get the `data-magic` attribute of the element with `id="scroll"`.
   - Log the result.

5. Enchant the Scroll's Appearance:

   - Change the text color of the element with `id="scroll"` to "blue"

6. Bestow a Magical Class:

   - Add a class `enchanted` to the element with `id="scroll"`

> 💡 HINT: when added correctly the cycleColor animation defined in public/style.css will be applied

7. End the Game with a Magical Finale:

   - Create a new `<p>` element and set its text content to "Congratulations! You have mastered the DOM Magic!".

   - Add an id `msg` to the element.

   - Add an attribute `data-magic` with the value "finale" to the element.

   - Add background color style to the element with the value "green".

   - Add text color style to the element with the value "white".

   - Add the newly created `<p>` element to the `<body>` of the page.

## What to Expect

1. Discover the Enchanted Scroll:

```html
<div id="scroll" data-magic="hi">Ancient Spell</div>
```

2. Decipher the Ancient Spell:

```plaintext
Output: Ancient Spell
```

3. Rewrite the Spell:

```html
<div id="scroll" data-magic="hi">Abracadabra!</div>
```

4. Reveal the Magic Attribute:

```plaintext
Output: hi
```

5. Enchant the Scroll's Appearance:

   - The scroll element's text color is now blue.

6. Bestow a Magical Class:

```html
<div id="scroll" data-magic="hi" class="enchanted">Abracadabra!</div>
```

7. End the Game with a Magical Finale:

```html
<body>
   <div id="scroll" data-magic="hi" class="enchanted">Abracadabra!</div>
   <p 
      id="msg" 
      data-magic="finale" 
      style="background-color: green; color: white;"
   >
      Congratulations! You have mastered the DOM Magic!
   </p>
</body>
```


