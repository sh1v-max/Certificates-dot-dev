// complete the challenge here 👇

// 1. Fetch All Products
export async function fetchAllProducts () {
  const res = await fetch('https://dummyjson.com/products')
  return await res.json()
}

const data = await fetchAllProducts()
data.products.forEach((product) => {
  renderProduct(product)
})


// 2. Fetch Single Product Details
export async function fetchProductDetails (id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  if (!res.ok) {
    return {
      'error': {
        'message': res.statusText,
        'status': res.status
      }

    }
  }
  return await res.json()
}

const product = await fetchProductDetails(2)
renderProduct(product)


// 3. Fetch a single product with a non-existent id (9999)
const noExistProduct = await fetchProductDetails(9999)
renderProduct(noExistProduct)


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

