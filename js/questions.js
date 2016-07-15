/*--- QUIZ OBJECTS ---*/

//quiz template

var quiz = {
		question: {
			//shuffleAnswers - randomly creates an array of incorrect answers w/ the 
			//correct answer inside.
			shuffleAnswers: function() {
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
		newQuestion: function(questionNumber) {
			var propertyName = 'question' + questionNumber;
			this[propertyName] = Object.create(quiz.question);
			this[propertyName].questionNumber = questionNumber
		},
};

quiz.newQuestion(3);



//easy = new quiz
var easy = Object.create(quiz);
easy.newQuestion(1);


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
