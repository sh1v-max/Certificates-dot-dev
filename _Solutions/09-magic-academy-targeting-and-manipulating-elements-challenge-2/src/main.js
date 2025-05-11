

const scrollElement = document.querySelector('#scroll')

// 1. Discover the Enchanted Scroll

console.log(scrollElement)


// 2. Decipher the Ancient Spell

console.log(scrollElement.textContent)


// 3. Rewrite the Spell

scrollElement.textContent = 'Abracadabra!'

// 4. Reveal the Magic Attribute

console.log(scrollElement.getAttribute('data-magic'))

// 5. Enchant the Scroll's Appearance

scrollElement.style.color = 'blue'

// 6. Bestow a Magical Class

scrollElement.classList.add('enchanted')

// 7. End the Game with a Magical Finale

const msg = document.createElement('p')
msg.id = 'msg'
msg.textContent = 'Congratulations! You have mastered the DOM Magic!'
msg.setAttribute('data-magic', 'finale')
msg.style.backgroundColor = 'green'
msg.style.color = 'white'
document.body.appendChild(msg)
