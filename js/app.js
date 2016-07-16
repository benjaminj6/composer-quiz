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
//function selectQuiz(selection)
//displayQuestion(currentQuestion)
//changeScreen(current, next)

quiz = easy;
console.log(quiz);
quiz = hard;
console.log(quiz);
/*--- EVENT HANDLERS ---*/
// NEW-GAME SCREEN
	//difficulty-buttons hover toggle hover
	//difficulty-buttons click toggle selected
		//start-quiz click toggle active
	//start-quiz click 
		//find the selected quiz and sets global variable quiz equal to that.
		//displayQuestion()	

// QUESTIONS-SCREEN
	//
// ANSWERS-SCREEN
// END-GAME SCREEN





});