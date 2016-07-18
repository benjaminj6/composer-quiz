$(document).ready(function() {

/*--- CLOSURE FUNCTIONS ---*/
var incIndex = (function() {
	var cnt = 0;

	return function cycle() {
		if (cnt < 5) {
			return cnt++;
		} else {
			cnt = 0;
			return cnt++;
		}
	};
}());

/*--- GLOBAL VARIABLES ---*/
var quiz;
var current = incIndex();
var score = 0;

/*--- EVENT HANDLERS ---*/

// NEW-GAME SCREEN
$('.difficulty-buttons button').hover(function() {
	$(this).toggleClass('hover');
});

$('.difficulty-buttons button').click(function() {
	$('.difficulty-buttons').children().removeClass('selected');
	$(this).toggleClass('selected');
	$('.start-quiz').removeClass('inactive');
});	

$('.start-quiz').click(function() { 
	if($(this).hasClass('inactive') === false) {			
		var choice = $('.difficulty-buttons').find('.selected');
		
		if (choice.hasClass('easy') === true) { 
			quiz = easy; 
		} else {
			quiz = hard;
		}
		
		$('.new-game-screen').addClass('hidden');
		displayQuestion(current);
	}
});

// QUESTIONS-SCREEN
$('.choices').on('mouseenter mouseleave', 'li', function() {
	$(this).toggleClass('hover');
});

$('.choices').on('click', 'li', function() {
	$('.choices').children().removeClass('selected');
	$(this).toggleClass('selected');
	$('.submit').removeClass('inactive');
});

$('.submit').click(function() {
	if($(this).hasClass('inactive') === false) {
		$('.submit').addClass('inactive');
		$('.questions-screen').toggleClass('hidden');

		displayAnswer();

		if ($('.choices .selected').text() === quiz[current].correct) {
	  	$('.answer-screen h3').text('Correct!');
	  	$('.current-score').append('<li class="symbol"><i class="fa fa-music" aria-hidden="true"></i></li>');
		}
	}
});

// ANSWERS-SCREEN

//next question click
$('.next').click(function() {
		$('.answer-screen').toggleClass('hidden');
		$('.choices').empty();
		
		if (current < 4) {
			current = incIndex();
			displayQuestion(current);
		} else {
			var finalScore = $('.current-score li').length - 1;
			displayEnd(finalScore);
			defaultValues();
			//go to new-game screen and restore defaults
		}

});

/*--- FUNCTIONS ---*/
function displayQuestion(x) {
 	
 	$('.questions-screen').removeClass('hidden');
 	$('.question-number').text('Question ' + (x + 1) + ' of 5');
	$('.current-question').text(quiz[x].question);
	
	for (var i = 0; i < quiz[x].choices.length; i++) {
		$('.choices').append('<li>' + quiz[x].choices[i] + '</li');
	}
}

function displayAnswer() {
	$('.answer-screen').toggleClass('hidden');
	$('.answer-screen h3').text('Incorrect!');
	$('.answer-screen img').attr('src', quiz[current].picture);
	$('.answer-screen p').text(quiz[current].info);	
}

function displayEnd(score) {
	$('.new-game-screen').toggleClass('hidden');
	$('.first').text('Your final score was ' + score + ' out of 5!');
	$('.second').text('Would you like to play again?').append('<br> Please select a difficulty:');
}

function defaultValues() {
	$('.selected').removeClass('selected');
	$('.start-quiz').addClass('inactive');
	$('.submit').addClass('inactive');
	$('.fa.fa-music').parent().remove();

	quiz = null;
// TODO: find out way to bring current back to 0.
	current = incIndex();

}

});

