/* QUIZ OBJECTS */

// easyQuiz
const quizzes = {
  easy: [
    { // question1
      question: 'The 1984 film \'Amadeus\' was based off of the life of which famous composer?',
      correct: 'Wolfgang Amadeus Mozart',
      choices: ['John Cage', 'Karl Amadeus Hartmann', 'Igor Stravinsky', 'Wolfgang Amadeus Mozart'],
      info: `Wolfgang Amadeus Mozart (1756-1791) was a musical prodigy that had already performed 
            in front of most of Europe\'s nobiility by the time he was ten. He was able to listen 
            to a piece of music once and write the entire thing down without mistakes. Mozart 
            died of a sudden illness at the young age of 35. Some have suggested that he 
            was poisoned by a rival composer named Salieri, as shown in \'Amadeus\'.`,
      picture: 'images/mozart.jpg',
    },
    { // question2
      question: `Which composer wrote the film scores for \'Star Wars\', 
                \'Jurassic Park\', and \'Indiana Jones\'?`,
      correct: 'John Williams',
      choices: ['John Williams', 'Hans Zimmer', 'Howard Shore', 'Michael Giacchino'],
      info: `John Williams (1932 - present) is currently one of film\'s most prolific composers 
            - he has won 5 Academy Awards, 4 Golden Globe Awards, 7 British Academy Film Awards, 
            and 22 Grammy Awards (not to mention holding the record for the most award
            nominations held by a living person). Over his 60 years in the film industry 
            he has composed over 130 scores, in addition to over 40 classical compositions.`,
      picture: 'images/williams.jpg',
    },

    { // question3
      question: `Which composer is well known for his ballets, the most famous ones 
                being \'The Nutcracker\' and \'Swan Lake\'?`,
      correct: 'Pyotr Ilych Tchaikovsky',
      choices: ['Joseph Haydn', 'Edward Elgar', 'Pyotr Ilych Tchaikovsky', 'Franz Liszt'],
      info: `Pyotr Ilych Tchaikovsky (1840-1893) was one of the first Russian composers 
            to be recognized internationally. His pieces are known for creating a classical 
            sound that was also distinctly \'Russian\'. Although Tchaikovsky\'s music was 
            well recieved by the Russian public, he suffered from depression. 
            It is actually debated whether his death at age 53 was from cholera or self-inflicted.`,
      picture: 'images/tchaikovsky.jpg',
    },
    { // question4
      question: 'Which famous composer was deaf?',
      correct: 'Ludwig Van Beethoven',
      choices: [
        'Dmitri Shostakovich',
        'Ludwig Van Beethoven',
        'Johann Sebastian Bach',
        'Frederic Chopin',
      ],
      info: `Ludwig Van Beethoven (1770-1827) is considered widely as one of the most 
            influential figures in the Western Music tradition. The German composer 
            began losing his hearing around age 30, and by the age of 44 he was almost 
            completely deaf. It is even said that at the premier of his Ninth Symphony 
            in 1824 he had to be turned around to see the audience\'s applause because 
            he was unable to hear it.`,
      picture: 'images/beethoven.jpg',
    },

    { // question5
      question: `Which composer is best known for writing the \'Hallelujah Chorus\'? 
      (Hint: it\'s most often performed at Christmastime)`,
      correct: 'George Frideric Handel',
      choices: [
        'George Frideric Handel',
        'Sergei Rachmaninov',
        'Gustav Mahler',
        'Felix Mendlessohn',
      ],
      info: `The \'Hallelujah Chorus\' was written by George Frideric Handel 
            as part of an oratorio called \'The Messiah\'. An oratorio is a large 
            composition written for an orchestra, choir, and soloists. 
            Although Handel originally wrote \'The Messiah\' for a smaller orchestra 
            and choir, modern productions have been known to perform the piece with 300-piece 
            orchestras and 500-voice choirs (or larger!)`,
      picture: 'images/handel.jpg',
    },
  ],

  hard: [

    { // question1
      question: 'What was Hildegard von Bingen\'s favorite color?',
      correct: 'Green',
      choices: ['Green', 'Red', 'Yellow', 'Blue'],
      info: `Hildegard von Bingen (1098-1179) was a Benedictine nun that is one of 
            the first female composers that we have record of. She wrote a musical 
            drama called \'Ordo Virtutum\' (Order of the Virtues) which depicts a 
            battle between the Virtues and the Devil for a human soul. 
            Hildegard was known to be fond of the color green as it symoblized 
            regeneration and renewal in creation.`,
      picture: 'images/hildegard.jpg',
    },

    { // question2
      question: `Which composer was such an obsessive perfectionist that he regularly 
                synchronized all of the clocks in his apartment?`,
      correct: 'Dmitri Shostakovich',
      choices: ['Antonio Vivaldi', 'Ludwig Van Beethoven', 'Gustav Mahler', 'Dmitri Shostakovich'],
      info: `Dmitri Shostakovich (1906-1975) was a Russian composer marked by his complicated 
            relationship with the Soviet Union. In 1936 he was denounced by the USSR after 
            Joseph Stalin attended (and disliked) one of his operas. His Fifth Symphony was 
            written as an apology to Stalin. He was known to be obsessed with order: 
            in addition to synchronizing his clocks, he also regularly sent himself 
            letters to test the postal service.`,
      picture: 'images/shostakovich.jpg',
    },

    { // question3
      question: `Which composer is well known for his piece 4\'33", in which the 
                performer sits siilently for 4 minutes and 33 seconds?`,
      correct: 'John Cage',
      choices: ['Anton Webern', 'Arnold Schoenberg', 'John Cage', 'Edward Elgar'],
      info: `John Cage (1912-1992) is one of the leading figures of 20th century 
            avante-garde music. His music is marked by the concept that "all sound 
            is music" – including traffic lights, speech, and tea whistling! 4\'33" is 
            a large source of controversy, as many argue that it is not music since 
            there are no sounds played by the performer. Others argue that the sounds 
            happening within the audience are the music.`,
      picture: 'images/cage.jpg',
    },

    { // question4
      question: 'Which composer was the father of 20 children?',
      correct: 'Johann Sebastian Bach',
      choices: ['Johann Sebastian Bach', 'George Gershwin', 'Gustav Mahler', 'Johann Strauss'],
      info: `Johann Sebastian Bach (1685-1750) was a German composer that spent 
            his life writing music for both the German nobility and the Lutheran Church. 
            Bach\'s music is known for its precision and logical form. Of the 20 children 
            that Bach fathered, only 10 survived to adulthood, and 5 of his sons went on 
            into successful music careers of their own.`,
      picture: 'images/bach.jpg',
    },

    { // question5
      question: `Which composer died of a chill after coming home one night only to find 
                that his wife had locked him out?`,
      correct: 'Henry Purcell',
      choices: ['Pyotr Ilych Tchaikovsky', 'Henry Purcell', 'Frederic Chopin', 'Hector Berlioz'],
      info: `Although Henry Purcell (1659-1695) only lived for 35 years, he managed to 
            greatly influence the musical landscape of England in the 1600s. Although Purcell 
            worked as a church musician, he also composed music for operas and plays. 
            An alternate theory regarding his death is that he ate poisoned chocolate.`,
      picture: 'images/purcell.jpg',
    },
  ],
};
module.exports = quizzes;

