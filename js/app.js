$(document).ready(function() {

/*--- PURE FUNCTIONS ---*/

//crawls through index of chosen array - when done returns to 0
var incIndex = (function() {
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
var incScore = (function() {
	var cnt = 0;

	return function() {
		if(cnt <= 5) {
			return ++cnt;
		} else {
			cnt = 0;
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

//.submit button pressed
$('.submit').click(function() {
	$('.questions-screen').toggleClass('hidden');

	displayAnswer();

	if($('.choices .selected').text() === quiz[current].correct) {
		$('.answer-screen h3').text('Correct!');
		$('.current-score').append('<li><i class="fa fa-music" aria-hidden="true"></i></li>');
		var a = incScore();
		console.log(a);
	}
});
	//display answer stuff
	//if evaluate(selected, quiz[i].correctAnswer) === true
		//change header text
		//add to score

/*-----------------------------------------------------------------------*/
// ANSWERS-SCREEN
// END-GAME SCREEN

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

});

