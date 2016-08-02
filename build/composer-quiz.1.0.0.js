/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

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
	
	/*------------------------------------------------------------------------------------------------*/
	$(document).ready(function() {
	/*--- GLOBAL VARIABLES ---*/
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
				quiz = quizzes.easy; 
			} else {
				quiz = quizzes.hard;
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
			$('.choices').append('<li class="choice"><button>' + quiz[index].choices[i] + '</button></li');
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
		$('.next').text('Next Question');
		$('.fa.fa-music').parent().remove();
	
		quiz = null;
		current = incIndex();
		score = 0;
	}
	
	});
	


/***/ }
/******/ ]);
//# sourceMappingURL=composer-quiz.1.0.0.js.map