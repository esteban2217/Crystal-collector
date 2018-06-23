var randomResult;
var wins = 0;
var losses = 0;
var previousNum = 0;
var score = 0;
$('#losses').html(losses);
$('#wins').html(wins);
$("#score").html(previousNum);


var startGame = function () {
	
	$('.crystals').empty();

	var images = [
			'https://media.pocketgamer.biz/2017/6/77604/clash-royale-emoji-r225x.jpg',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO0uc2ZcWM5_mWHz2ms0fcoJxJWKWTMct8MVeaYCpxjW14M917',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVosmlgcdtQiuizaa1ptHdIq0RzlAz-dbm1KGesg0qDQPm1U4',
			'https://i.pinimg.com/originals/88/c4/49/88c44947cbd917674ef117512dc89218.jpg'];

	randomResult = Math.floor(Math.random()*101)+19;
	// console.log(randomResult);
	$('#result').html('Number to be guess: ' + randomResult);

	for (var i = 0; i<4; i++){
		
		var randomNum = Math.floor(Math.random()*12)+1;
		// console.log(randomNum);
		

		var crystal = $("<div>");
			crystal.attr({
				"class": "crystal",
				"data-randomn":randomNum,
			});
			crystal.css({
				"background-image":"url('" + images[i] + "')",
				"bacground-size":"cover"
			})
		$(".crystals").append(crystal);
	
	}
}

startGame();


$(document).on('click', '.crystal', function () {
	
	var num = parseInt($(this).attr('data-randomn'));
	previousNum += num;
	$("#score").html(previousNum);
	console.log(previousNum);

	

	if(previousNum > randomResult){
		alert('Loser!!!')
		losses++;
		$('#losses').html(losses);
		previousNum = 0;
		$("#score").html(previousNum);
		startGame();
	} 
	if (previousNum === randomResult){
		alert('Winner!!')
		wins++;
		$('#wins').html(wins);
		previousNum = 0;
		$("#score").html(previousNum);
		startGame();
	}





});

//speudo code:

//game with 4 crystals and random result
//every crystal need to have a random number between 1 - 12
//when clicking any crystal,it should be adding with the previous number 
//until it equal the total score
//if it is greater than the random result, we increment lost counter and  then we star over
//if it is equal, we increment win counter and then we star over
//a new random number should be generate every single time we win or lose for the crystal

// randomResult=Math.floor(Math.random()*)
