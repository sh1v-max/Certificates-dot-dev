---
difficulty: 2
tags: codechallenge, training
chapter: "Chapter 2: DOM Manipulation"
training: true
---

# Hidden Messages - Walking DOM Challenge

## Challenge Description

In this challenge, you've been tasked with finding a hidden message on the webpage using your JavaScript DOM walking skills.

Complete all tasks in `/src/main.js`.

## Requirements

1. The `<head>` section contains important metadata and resources. Find the text node of it's last child to uncover the first word.

   - Get the last child of the `<head>` DOM node.
   - Log it's text node to the console.

2.  The `<body>` section holds the content of the page. Find its first child (not necessarily an element) to reveal the second word.

   - Get the first child of the `<body>` DOM node.
   - Log it's text node to the console.

3. The unordered list (`<ul>`) contains several items. Count the number of children it has to get the 3rd word.

   - Get the number of children of the `<ul>` DOM node.
   - Log the number to the console.

> 💡 HINT: you can find the ul based on it's position within the body or you can target it directly using `document.querySelector("ul")`. We'll learn more about this in the next lesson.

4. Get the second item within the unordered list to find the last word. 
   - Log it's inner text to the console.

5. Siblings in the DOM are nodes that share the same parent. Find the next sibling of the `<ul>` to uncover the final piece of the message:

   - Get the next sibling of the `<ul>` element.
   - Log it's text to the console.

> 💡 HINT: The next sibling is NOT an element (it's a comment)

## What to Expect

You should have a secret message logged to the console when reading all the logs together. Checkout CHECKLIST.md to see the final message.
