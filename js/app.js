$(document).ready(function() {

/*--- PURE FUNCTIONS ---*/

//crawls through index of chosen array - when done returns to 0
var index = (function() {
	var cnt = 0;

	return function() {
		if (cnt < 4) {
			return cnt++;
		} else {
			return cnt = 0;	//sets the limit at 0 before counter resets.
		};
	}
}());

//increases and stores the current score value
var index = (function() {
	var score = 0;

	return function() {
		if(score < 5) {
			return ++score;
		} else {
			return score = 0;
		}
	}
}());

/*--- GLOBAL VARIABLES ---*/
//var quiz = selectQuiz() return value;

var quiz;
/*--- FUNCTIONS ---*/
//displayQuestion(currentQuestion)
//changeScreen(current, next)

/*--- EVENT HANDLERS ---*/
// NEW-GAME SCREEN
	//difficulty-buttons hover toggle hover
	//difficulty-buttons click toggle selected
		//start-quiz click toggle inactive
	$('.start-quiz').click(function() { 
		//validate that button is active
		if($(this).hasClass('inactive') === true) {
			//find the selected quiz and sets global variable quiz equal to that.
			var choice = $('.difficulty-buttons').find('.selected');
			if (choice.hasClass('easy') === true) { 
				return quiz = easy; 
			} else {
				return quiz = hard;
			}
			// if(/*choice.hasClass(easy)*/) { 
			// 	return quiz = easy 
			// } else {
			// 	return quiz = hard;
			// }
			//displayQuestion()				
		}

	});

// QUESTIONS-SCREEN
	//
// ANSWERS-SCREEN
// END-GAME SCREEN





});