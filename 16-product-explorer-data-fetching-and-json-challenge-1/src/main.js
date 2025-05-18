// complete the challenge here 👇

// 1. Fetch All Products

// define the function so that it fetches the data
export async function fetchAllProducts () {

}

// call the function

// then render the results to the screen


// 2. Fetch Single Product Details

// define the function so that it fetches the data
export async function fetchProductDetails (id) {

}

// fetch the product with the id of 2

//  then render it to the screen


// 3. Error Handling

// update the fetchProductDetails to handle a not found response

// test it by a produce with id 9999

// render the error messaage


// There is no need to change the code here
function renderProduct (product) {
  console.log(product)
  const container = document.getElementById('productContainer')
  const newElement = document.createElement('div')
  if (product.error) {
    newElement.innerHTML = `
      <div class="error-message">
        <h2>Error</h2>
        <p><strong>${product.error.status}</strong> ${product.error.message}</p>
      </div>
    `
  } else {
    newElement.innerHTML = `
      <div class="product-card">
        <img src="${product.thumbnail}" alt="${product.title}" class="product-image">
        <h2 class="product-title">${product.title}</h2>
        <p class="product-description">${product.description}</p>
        <div class="flex justify-between items-center">
          <span class="product-price">$${product.price}</span>
          <span class="product-category">${product.category}</span>
        </div>
        <div class="product-rating">
          <span class="text-yellow-500">★</span>
          <span class="text-gray-600">${product.rating} (${product.stock} in stock)</span>
        </div>
      </div>
    `
  }
  container.appendChild(newElement)
}

