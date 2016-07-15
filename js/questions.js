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
			this[propertyName].questionNumber = questionNumber;
		},
};

console.log(quiz.newQuestion(3));

//easy = new quiz
var easy = Object.create(quiz);
easy.newQuestion(1);
//question1 properties
easy.question1.question = 'The 1984 film \'Amadeus\' was based off of the ' +
	'life of this famous composer.';
easy.question1.correctAnswer = 'Wolfgang Amadeus Mozart';
easy.question1.incorrectAnswers = ['John Cage', 'Karl Amadeus Hartmann', 'Igor Stravinsky'];
easy.question1.answerInfo = '';
easy.question1.answerPicture = '';
//question2 properties
easy.newQuestion(2);
easy.question2.question = 'Which composer wrote the film scores for \'Star Wars\', ' + 
	' \'Jurassic Park\', and \'Indiana Jones\'?';
easy.question2.correctAnswer = 'John Williams';
easy.question2.incorrectAnswers = ['Hans Zimmer', 'Howard Shore', 'Michael Giacchino'];
easy.question2.answerInfo = '';
easy.question2.answerPicture = '';
//question3 properties
easy.newQuestion(3);
easy.question3.question = 'Which famous composer was deaf?';
easy.question3.correctAnswer = 'Ludwig Von Beethoven';
easy.question3.incorrectAnswers = ['Wolfgang Amadeus Mozart', 'Johann Sebastian Bach', 'Frederic Chopin'];
easy.question3.answerInfo = '';
easy.question3.answerPicture = '';
//question4 properties
easy.newQuestion(4);
easy.question4.question = 'Which composer is best known for his ballets, the most famous ' + 
	' ones being \'The Nutcracker\' and \'Swan Lake\'?';
easy.question4.correctAnswer = 'Pyotr Ilych Tchaikovsky';
easy.question4.incorrectAnswers = ['Joseph Haydn', 'Edward Elgar', 'Franz Liszt'];
easy.question4.answerInfo = '';
easy.question4.answerPicture = '';
//question5 properties
easy.newQuestion(5);
easy.question5.question = 'Which composer is well known for his \'Hallelujah Chorus\'? (Hint: it\'s ' +
	'performed a lot at Christmastime)';
easy.question5.correctAnswer = 'George Frideric Handel';
easy.question5.incorrectAnswers = ['Sergei Rachmaninov', 'Gustav Mahler', 'Felix Mendelssohn'];
easy.question5.answerInfo = '';
easy.question5.answerPicture = '';



console.log(easy);



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
