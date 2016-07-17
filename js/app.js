$(document).ready(function() {

/*--- PURE FUNCTIONS ---*/

//crawls through index of chosen array - when done returns to 0
var index = (function() {
	var cnt = 0;

	return function cycle() {
		if (cnt < 5) {
			return cnt++;
		} else {
			cnt = 0;
		}
	};
}());

//increases and stores the current score value
var score = (function() {
	var cnt = 0;

	return function() {
		if(cnt < 5) {
			return ++cnt;
		} else {
			cnt = 0;
		}
	};
}());

/*--- GLOBAL VARIABLES ---*/
var quiz;

/*--- FUNCTIONS ---*/
function displayQuestion(x) {
 	var currentQuestion = quiz[x];
 	
 	$('.questions-screen').removeClass('hidden');
 	$('.question-number').text('Question ' + (x + 1) + ' of 5');
	$('.current-question').text(currentQuestion.question);
	
	for (var i = 0; i < currentQuestion.choices.length; i++) {
		$('.choices').append('<li>' + currentQuestion.choices[i] + '</li');
	}
}

//changeScreen(current, next)

/*--- EVENT HANDLERS ---*/
// NEW-GAME SCREEN
$('.difficulty-buttons button').hover(function() {
	$(this).toggleClass('hover');
})
//difficulty-buttons click toggle selected
	//start-quiz click toggle inactive
$('.start-quiz').click(function() { 
	//validate that button is active
	if($(this).hasClass('inactive') === false) {			
		var choice = $('.difficulty-buttons').find('.selected');
		
		if (choice.hasClass('easy') === true) { 
			quiz = easy; 
		} else {
			quiz = hard;
		}
		
		$('.new-game-screen').addClass('hidden');
		displayQuestion(index());			
	}

});

// QUESTIONS-SCREEN
	//
// ANSWERS-SCREEN
// END-GAME SCREEN





});