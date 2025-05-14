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

const discountPrecentage = 20

const cart = [
  { 'item': 'apple',
    'price': 1.0 },
  { 'item': 'banana',
    'price': 0.5 },
  { 'item': 'cherry',
    'price': 2.0 }
]

export function main () {
  function createDiscount (percentage) {
    return function (item) {
      return {
        ...item,
        'price': item.price * (1 - percentage / 100)
      }
    }
  }

  const discountFunction = createDiscount(discountPrecentage)

  const discountedCart = (() => applyDiscount(cart, discountFunction))()

  function displayCart (cart, callback) {
    callback(cart)
  }

  displayCart(discountedCart, (cart) => {
    const cartContainer = document.querySelector('#cart')
    updateDom(cart, cartContainer)
  })
}
