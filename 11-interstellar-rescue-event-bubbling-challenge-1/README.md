---
difficulty: 2
tags: codechallenge, training
chapter: "Chapter 3: Events"
training: true
---

# Interstellar Rescue: Event Bubbling Challenge

## Challenge Description

In this challenge, you'll embark on an interstellar rescue using JavaScript events skills. Your mission is to save stranded astronauts and navigate through cosmic anomalies.

Complete all tasks in `/src/main.js` and prove your prowess as an Interstellar Rescuer!

## Requirements

1. Prevent Hyperlink to Black Hole:

- Find the anchor tag with `id="blackHoleLink"`.
- Bind a click event to the anchor tag.
- When the link is clicked, prevent the page navigation and log "Black Hole avoided!".

2. Block Unauthorized Communications:

- Find the form with `id="communicationForm"`.
- Bind a submit event to the form.
- When the form is submitted, prevent the default submission and log the message "Unauthorized communication blocked!".


3. Activate Rescue Beacon:

- Find the button with `id="rescueBeaconButton"`.
- Bind a click event to the button.
- When the button is clicked, log "Rescue beacon activated!".
- Also, bind a click event to the document that logs "Rescue beacon deactivated!".
- Ensure that clicking the button does not trigger the document's click event.

4. Retrieve Space Supplies:

- Bind click events to all child `span` elements within the `id="suppliesContainer"` using event delegation.
- When a supply item (`<span>` element) is clicked, log the text content of the clicked item.
- Ensure that clicking on the supply item does not trigger any parent element's event.
- Bind click event to the button element with `id="addSupplyButton"` and add a new supply item to the `suppliesContainer` when clicked.
  - The new supply item should be a `<span>` element with the text content "Supply {index}(Order index)".
  - The new supply item can be clicked to log its text content.
  - **Note**: Instead of binding click events for newly added Supply each time you click the `id="addSupplyButton` button, use the event delegation approach to better bind events for dynamically added elements.

## What to Expect

1. Prevent Hyperlink to Black Hole:

  Prevent page navigating

```plaintext
Output: Black Hole avoided!
```

2. Block Unauthorized Communications:

  Prevent form submission

```plaintext
Output: Unauthorized communication blocked!
```


3. Activate Rescue Beacon:

```plaintext
Output: Rescue beacon activated!
Output: Rescue beacon deactivated!  (only when clicking outside the rescue beacon button)
```

4. Retrieve Space Supplies:

  Click the `addSupplyButton` button to add a new supply item.

```plaintext
Output: the text content of the clicked space supplies
```

