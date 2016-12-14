//Globals
//Globals
//Globals
var theDeck = createDeck();
var playersHand = []  //player1squares in tic tac toe
var dealersHand =[] //player2squares in tic tac toe
createDeck();

$(document).ready(function(){

	$('.deal-button').click(function(){
		// deal stuff goes in here
		shuffleDeck();
		playersHand.push(theDeck[0]);
		playersHand.push(theDeck[2]);

		// placeCard('player','one',playersHand[0]);
		// placeCard('player','two',playersHand[1]);

		placeCard('player','one',playersHand[0]);
    	placeCard('player','two',playersHand[1]);

    	dealersHand.push(theDeck[1]);
		dealersHand.push(theDeck[3]);

		placeCard('dealer','one',dealersHand[0]);
		placeCard('dealer','two',dealersHand[1]);

		calculateTotal(playersHand, 'player');
		calculateTotal(dealersHand, 'dealer');

	});
	$('.hit-button').click(function(){
	//Hit stuff goes in here
		// add a card to the JS and the DOM
		if(calculateTotal(playersHand,'player') < 21){
		playersHand.push(theDeck.shift());
		var lastCardIndex = playersHand.length-1;
		var slotForNewCard = playersHand.length;
		placeCard('player',slotForNewCard,playersHand[lastCardIndex]);
		calculateTotal(playersHand, 'player');

	}
		// if(playersHand.length == 2){

		// }
	});
	$('.stand-button').click(function(){
		while(dealerTotal < 17){
			
		}

	});

});
function createDeck(){
	var newDeck = [];
	var suits = ['h','s','d','c'];
	// suits/outter loops
	// need help with undestanding this
	for(let s = 0;s < suits.length; s++){
		// card value/inner loop
		for(let c = 1; c<= 13; c++){
			newDeck.push(c+suits[s]);
		}
	}
	return newDeck;
}

function shuffleDeck(){
	for(let i = 0; i < 9001; i++){
		var random1 = Math.floor(Math.random()*theDeck.length);
		var random2 = Math.floor(Math.random()*theDeck.length);
		var temp = theDeck[random1];
		theDeck[random1] = theDeck[random2];
		theDeck[random2] = temp;
	}
	console.log(theDeck);
}
  
function placeCard(who, where, whatCard){
	var classSelector = '.' + who + '-cards .card' + where;
						// '.' + 'player' + 'cards .card-' + 'one'
						// '.player-cards .card-one'
	console.log(classSelector);
	$(classSelector).html('<img src="cards/' + whatCard + '.png">');
						// $('<img src="cards/2d.png">')
}
function calculateTotal(hand, who){
	var total = 0; //init total to 0
	var cardValue = 0; //temp var for value of current card
	for(let i=0; i < hand.length; i++){
		cardValue = Number(hand[i].slice(0,-1));
		total += cardValue;
	}
	var classSelector = '.'+who+'-total-number'
	$(classSelector).text(total);

	// if(who === 'player'){
	// 	$('player-total-number').html()
	// }else{
	// 	$('dealer-total-number').html()
	// }
}













