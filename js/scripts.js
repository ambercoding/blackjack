$(document).ready(function(){

	car the Deck = [];

$('.deal-button').click(function(){
// console.log(this);
createDeck();
});
$('.hit-button').click(function(){
console.log(this);
});
$('.stand-button').click(function(){
console.log(this);
});

});
function createDeck(){
	// Fill the deck with:
	// --52 cards
	// --4 suits (h,s,d,c)
	// --1-13 (11 = J, 12 = Q, 13 = K)
	var suits = ['h','s','d','c'];
	for(let s = 0; s < suits.length; s++){
		loop through all 13 cards for each suit
		for(let c = 1; c <= 13; c++){
			theDeck.push(c+suits[s]);
		}
	}
}
function suffleDeck(){
	var temp = theDeck[3];
	theDeck[3]= theDeck[41];
	theDeck[41] = temp;

}