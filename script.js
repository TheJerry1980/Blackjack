let firstCard= 10
let secondCard = 32
let cards = [firstCard, secondCard]
// let Jack = 10
// let Queen = 10
// let King = 10
// let Ace = 11
// let card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace]
// card [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let gameMessage = document.getElementById("message-element")
console.log(gameMessage)


let responseMessage = document.getElementById("total-element")
let jimCards = document.getElementById("cards-element")
let cardMessage = ""
let theTotal = document.getElementById("total-element")




function playGame() {
    theTotal.textContent = "Sum: " + sum
    if (sum < 21) {
       responseMessage = "Do you want another card?"
        isAlive = true
    } else if (sum === 21) {
        responseMessage = "BlackJack!"
        hasBlackJack = true
    } else if (sum > 21) {
        responseMessage = "LOSER!!!"
        isAlive = false
    }
    responseMessage.textContent = "Response: " + responseMessage
    jimCards.textContent = "Cards:" + cards[0] + ", " + cards[1]
}

playGame()

console.log(responseMessage)

function newCard() {
    cardMessage = "Drawing a new card from the deck!"
let card = 2

    sum += card
    cards.push(card)
    console.log(cards)
playGame()


}

newCard()

console.log(cardMessage)

