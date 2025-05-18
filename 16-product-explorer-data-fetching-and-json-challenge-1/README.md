---
difficulty: 2
tags: Coding Challenge, training
chapter: "Chapter 5: Asynchronous JavaScript and API's"
training: true
---

# Product Explorer: Data Fetching and JSON Challenge

## Challenge Description

In this challenge, you will use JavaScript's `fetch` API and JSON data to complete a product exploration task.

Complete all tasks in `/src/main.js`.

## Requirements

1. Fetch All Products:

   - Implement a `fetchAllProducts` function that uses the `fetch` API to retrieve product data from the `https://dummyjson.com/products` endpoint.
   - The function should return a JSON object containing product information.
   - The returned JSON object should include `products` (list of products), `total`, `skip`, and `limit` properties.
   - Loop over each of the products and call the provided `renderProduct` function for each of them
  
![screenshot of solution](https://raw.githubusercontent.com/JavaScript-Certification/images/refs/heads/main/images/training/5-2/1-fetch-all-products.gif)

2. Fetch Single Product Details:

   - Implement a `fetchProductDetails` function that uses the `fetch` API to retrieve details of a single product from the `https://dummyjson.com/products/:id` endpoint.
   - The function should accept an `id` parameter and return a JSON object containing the product's detailed information.
   - The returned JSON object should include all properties of the product, such as `id`, `title`, `description`, `price`, etc.
   - Render this product to the page with the provided `renderProduct` function

> 💡 HINT: the `renderProduct` function appends items to the page so this one will be added to the current list of products

![screenshot of solution](https://raw.githubusercontent.com/JavaScript-Certification/images/refs/heads/main/images/training/5-2/2-single-product.jpg)

3. Error Handling:

   - Implement basic error handling in the `fetchProductDetails` function.
   - If there's an error with the response (like a 404), return an object from the function that looks like this:
   
   ```javascript
   { error: { message: res.statusText, status: res.status } }
   ```

   > 💡 HINT: The `res.ok` property will be false if the request returns a status code not in the 200 range

   - Test it out by calling a `fetchProductDetails` on an id that doesn't exist (you can use `9999`)
   - Render the result with the `renderProduct` function

![screenshot of solution](https://raw.githubusercontent.com/JavaScript-Certification/images/refs/heads/main/images/training/5-2/3-error.jpg)