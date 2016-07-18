$(document).ready(function() {
/*--- GLOBAL VARIABLES ---*/
var incIndex = (function() {
	var cnt = 0;

	return function() {
		if (cnt < 5) {
			return cnt++;
		} else {
			cnt = 0;
			return cnt++;
		}
	};
}());

var quiz;
var current = incIndex();
var score = 0;

/*--- EVENT HANDLERS ---*/

// NEW-GAME SCREEN
$('.difficulty-buttons button').click(function() {
	$('.difficulty-buttons').children().removeClass('selected');
	$(this).toggleClass('selected');
	$('.start-quiz').addClass('active');
});	

$('.start-quiz').click(function() { 
	if($(this).hasClass('active')) {			
		var choice = $('.difficulty-buttons').find('.selected');
		
		if (choice.hasClass('easy')) { 
			quiz = easy; 
		} else {
			quiz = hard;
		}
		
		$('.new-game-screen').addClass('hidden');
		displayQuestion(current);
	}
});

function displayQuestion(index) {
 	
 	$('.questions-screen').removeClass('hidden');
 	$('.question-number').text('Question ' + (index + 1) + ' of ' + quiz.length);
	$('.current-question').text(quiz[index].question);
	
	for (var i = 0; i < quiz[index].choices.length; i++) {
		$('.choices').append('<li class="choice">' + quiz[index].choices[i] + '</li');
	}
}

// QUESTIONS-SCREEN
$('.choices').on('click', 'li', function() {
	$('.choices').children().removeClass('selected');
	$(this).toggleClass('selected');
	$('.submit').addClass('active');
});

$('.submit').click(function() {
	if($(this).hasClass('active')) {
		$('.submit').removeClass('active');
		$('.questions-screen').toggleClass('hidden');

		displayAnswer();
	}
});

function displayAnswer() {
	$('.answer-screen').toggleClass('hidden');
	$('.answer-screen img').attr('src', quiz[current].picture);
	$('.answer-screen p').text(quiz[current].info);	

	if ($('.choices .selected').text() === quiz[current].correct) {
  	$('.answer-screen h3').text('Correct!');
  	$('.current-score ul').append('<li class="symbol"><i class="fa fa-music color-text" aria-hidden="true"></i></li>');
  	score += 1;
	} else {	
		$('.answer-screen h3').text('Incorrect!');
	}

	if(current === 4) {
		$('.answer-screen button').text('See Your Score!');
	}
}

// ANSWERS-SCREEN
$('.next').click(function() {
		$('.answer-screen').toggleClass('hidden');
		$('.choices').empty();
		
		if (current < 4) {
			current = incIndex();
			displayQuestion(current);
		} else {
			displayEnd(score);
			defaultValues();
		}
});

function displayEnd(score) {
	$('.new-game-screen').toggleClass('hidden');
	$('.first').text('Your final score was ' + score + ' out of ' + quiz.length + '!');
	$('.second').text('Would you like to play again?').append('<br> Please select a difficulty:');
}

function defaultValues() {
	$('.selected').removeClass('selected');
	$('.start-quiz').removeClass('active');
	$('.submit').addClass('inactive');
	$('.fa.fa-music').parent().remove();

	quiz = null;
	current = incIndex();
	score = 0;
}

});

