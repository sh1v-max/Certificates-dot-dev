const firstWord = document.head.lastElementChild.innerText
console.log(firstWord)

const secondWord = document.body.firstChild
console.log(secondWord)

const thirdWord = document.body.children[1].children.length
console.log(thirdWord)

const lastWord = document.body.children[1].children[1].innerText
console.log(lastWord)

const finalPieceOfTheMessage = document.querySelector('ul').nextSibling.textContent
console.log(finalPieceOfTheMessage)
