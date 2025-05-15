// complete the challenge here 👇


// 1. Discover the Enchanted Scroll
const scrollEle = document.querySelector('#scroll')
console.log(scrollEle)

// 2. Decipher the Ancient Spell
const text = scrollEle.textContent
console.log(text)

// 3. Rewrite the Spell
scrollEle.textContent = 'Abracadabra!'
console.log(scrollEle)

// 4. Reveal the Magic Attribute
const attribute = scrollEle.getAttribute('data-magic')
console.log(attribute)

// 5. Enchant the Scroll's Appearance
scrollEle.style.color = 'blue'

// 6. Bestow a Magical Class
scrollEle.classList.add('enchanted')

// 7. End the Game with a Magical Finale
const textMsg = document.createElement('p')
textMsg.id = 'msg'
textMsg.setAttribute('data-magic', 'finale')
textMsg.textContent = 'congratulations, you have mastered the dom magic'
textMsg.style.backgroundColor = 'green'
textMsg.style.color = 'white'
document.body.appendChild(textMsg)
