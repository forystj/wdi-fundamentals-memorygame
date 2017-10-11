var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var cardOne; 

cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardsInPlay);

var cardTwo;

cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[1]);

if (cardsInPlay.length === 2) {
if (cardsInPlay[0] === cardsInPlay[1]) {
alert("you found a match!")
}
else {
alert("Sorry, try again.")
}}