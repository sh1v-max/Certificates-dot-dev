function applyDiscount (cart, discountFunction) {
  return cart.map(discountFunction)
}

function updateDom (cart, cartContainer) {
  cartContainer.innerHTML = ''
  const fragment = new DocumentFragment()
  cart.forEach((item) => {
    const itemElement = document.createElement('div')
    itemElement.className = 'cart-item'
    itemElement.innerHTML = `<span>${item.item}</span><span>$${item.price.toFixed(2)}</span>`
    fragment.appendChild(itemElement)
  })
  cartContainer.appendChild(fragment)
}

const discountPercentage = 20

const cart = [
  { 'item': 'apple',
    'price': 1.0 },
  { 'item': 'banana',
    'price': 0.5 },
  { 'item': 'cherry',
    'price': 2.0 }
]

export function main () {
  // Return a function that takes an item and returns a new item with a discounted price
  function createDiscount (percentage) {
    return function (item) {
      return {
        ...item,
        'price': item.price * (1 - percentage / 100)
      }
    }
  }

  // Set the value of discountFunction to the result of calling createDiscount with discountPrecentage
  const discountFunction = createDiscount(discountPercentage)

  // Set the value of discountedCart to the result of calling applyDiscount with cart and discountFunction
  const discountedCart = (() => applyDiscount(cart, discountFunction))()

  // Trigger the callback and pass in the cart
  function displayCart (cart, callback) {
    callback(cart)
  }

  // Call displayCart with discountedCart and a callback that updates the DOM
  displayCart(discountedCart, (cart) => {
    const cartContainer = document.querySelector('#cart')
    updateDom(cart, cartContainer)
  })
}
