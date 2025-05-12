---
difficulty: 2
tags: codechallenge, training, JavaScript
chapter: "Chapter 9: Challenge Roundup"
training: true
---

# Article Comments

# Challenge Description

In this challenge, you are tasked with creating an article comments section.

The challenge will require that you work in `src/main.js`.

## Requirements

- Fetch the article comments from the `/comments` API endpoint.

- Display the list of comments as follows:

  - Create a comment item element with the following structure:
    - `div` container element to wrap all the elements.
    - `img` element with the `src` attribute set to the comment's `avatar` data to display the user's avatar. Append it to the container `div` element.
    - `div` (sub-container) element to wrap the user's name and comment content.
      - `h3` element with the comment's `name` data to display the user's name. Append it to the sub-container `div` element.
      - `p` element with the comment's `content` data to display the user's comment. Append it to the sub-container `div` element.
    - Append the sub-container `div` element to the parent container `div` element.
  - Append the comment item to the comments container element with `id="commentsContainer"`.

> 💡 HINT: The HTML structure of the comment item should look like this:
>
> ```html
> <div>
>   <img src="avatar" />
>   <div>
>     <h3>Name</h3>
>     <p>content</p>
>   </div>
> </div>
> ```

- Implement the functionality to post a new comment:
  - When the `id="submitBtn"` button is clicked, the following steps should be executed:
    - Create a new comment object with the following structure:
      - `name`: The value of the `id="name"` element.
      - `comment`: The value of the `id="comment"` element.
    - Send a fetch request to the `/comments/post` API endpoint with:
      - The request method set to `'POST'`.
      - The request headers set to `'Content-Type': 'application/json'`.
      - The request body set to the new comment data as a stringified object (e.g. `{ name, comment }`).
    - The fetch request will return the newly added comment if successful. Render the new comment in the comments container `id="commentsContainer"`.

> 💡 HINT: In real-world scenarios, it's essential to sanitize input values before storing them in the database to ensure data integrity and security.
> This is not required for this challenge, but it's a good practice to keep in mind.

![Screenshot of the solution](https://api.certificates.dev/storage/js-l2-training-9-2-demo.gif)

## Other Considerations

- The `fetchData()` and `main()` functions must remain exported as they are essential for our tests.
