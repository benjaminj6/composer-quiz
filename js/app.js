$(document).ready(function () {

/*--- QUIZ OBJECTS ---*/

//quiz template

var quiz = {
		//question (question1, question2, etc)
		question: {
			//question: '',
			//correctAnswer: '',
			//questionNumber: 1,
			//answerInfo: '',
			//answerPicture: '',
			//incorrectAnswers: [],
			//createQuizChoices - randomly creates an array of incorrect answers w/ the 
			//correct answer inside.
			createQuizChoices: function() {
				return 'some code here';
				//function() generates an array of random wrong choices & correct choice
					//if random choice equals the correct choice then skip and run again.
				//function() shuffles the new array of correct and wrong answers
			},
			//display question info - adds the appropriate info to the DOM 'question-screen'
			displayQuestionInfo: function(element) {
				return 'some more code';
				//question number - quiz.questionnumber
				//#correct - default 0
				//question - quiz.question
				//answers - calls the create answer choices method
			},
			//evaluate selection()
			evaluateAnswer: function() {
				//checks if user's choice was correct or incorrect.				
			},
			//adds the information to DOM 'answer-screen'
			displayAnswerInfo: function() {
				return 'answer info code';
				//the return value of evaluate
				//the appropriate picture
				//the appropriate paragraph	
			},
		},
};

//easy = new quiz
var easy = Object.create(quiz);
easy.question1 = Object.create(quiz.question);
console.log(easy.question1);
	//questions
		//question
		//correct answer
		//question number
		//answer info
		//answer picture

//hard = new quiz
	//questions
		//question
		//correct answer
		//question number
		//answer info
		//answer picture

//score
	//counter
	//function to increase the score that also adds the display

/*--- EVENT HANDLERS ---*/

//opening screen

//easy/hard button hover

	//easy/hard button select
		//adds selected class
		//loads correct game
		//activates start game button
	//start game button hover
	//start game click
		//hides opening-screen and displays question screen
		//display question info

//quiz question screen
	//user hovers over a list item
	//user selects a list item
		//class selected on chosen item
		//activates submit answer button
	//user hovers on submit answer button
	//user clicks submit answer button
		//evaluates the selection and the correct answer
			//if true then adds one to # correct
		//hides the questions screen and displays the answers 
		//populates the new screen display answer function
		//if answer is the last question in the quiz then changes button text
			//to 'See Your Score >>'
				//add 'last button' class?
			

//answer screen
	//user hovers on next question button
	//user clicks next question button
		//moves to the next question in the quiz
		//hides answer screen and display quiz screen
	//user clicks 'see your score' button
		//hides current scree and shows the new game screen
		//populates the new game screen with the appropriate information

//end game 'screen' 


/*--- GENERAL FUNCTIONS ---*/
//hover
//user selection
//button activate
//newquestion - takes the question number as a parameter

});