import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

// A larger question set including general knowledge and coding questions
const allQuestions = [
  // Coding Questions
  {
    questionText: 'Who developed the Python programming language?',
    answerOptions: [
      { answerText: 'Guido van Rossum', isCorrect: true },
      { answerText: 'James Gosling', isCorrect: false },
      { answerText: 'Dennis Ritchie', isCorrect: false },
      { answerText: 'Bjarne Stroustrup', isCorrect: false },
    ],
  },
  {
    questionText: 'What does CSS stand for?',
    answerOptions: [
      { answerText: 'Cascading Style Sheets', isCorrect: true },
      { answerText: 'Computer Style Sheets', isCorrect: false },
      { answerText: 'Creative Style System', isCorrect: false },
      { answerText: 'Colorful Style Sheets', isCorrect: false },
    ],
  },
  {
    questionText: 'Which HTML tag is used to define an internal style sheet?',
    answerOptions: [
      { answerText: '<style>', isCorrect: true },
      { answerText: '<css>', isCorrect: false },
      { answerText: '<script>', isCorrect: false },
      { answerText: '<link>', isCorrect: false },
    ],
  },
  {
    questionText: 'Which company developed JavaScript?',
    answerOptions: [
      { answerText: 'Netscape', isCorrect: true },
      { answerText: 'Microsoft', isCorrect: false },
      { answerText: 'Oracle', isCorrect: false },
      { answerText: 'IBM', isCorrect: false },
    ],
  },
  {
    questionText: 'What does SQL stand for?',
    answerOptions: [
      { answerText: 'Structured Query Language', isCorrect: true },
      { answerText: 'Strong Query Language', isCorrect: false },
      { answerText: 'Simple Query Language', isCorrect: false },
      { answerText: 'Standard Query Language', isCorrect: false },
    ],
  },
  {
    questionText: 'In CSS, which property is used to change the text color?',
    answerOptions: [
      { answerText: 'color', isCorrect: true },
      { answerText: 'font-color', isCorrect: false },
      { answerText: 'text-color', isCorrect: false },
      { answerText: 'background-color', isCorrect: false },
    ],
  },
  {
    questionText: 'Which of the following is a backend programming language?',
    answerOptions: [
      { answerText: 'Node.js', isCorrect: true },
      { answerText: 'HTML', isCorrect: false },
      { answerText: 'CSS', isCorrect: false },
      { answerText: 'JavaScript', isCorrect: false },
    ],
  },
  {
    questionText: 'Which data structure uses LIFO (Last In First Out)?',
    answerOptions: [
      { answerText: 'Stack', isCorrect: true },
      { answerText: 'Queue', isCorrect: false },
      { answerText: 'Tree', isCorrect: false },
      { answerText: 'Graph', isCorrect: false },
    ],
  },
  {
    questionText: 'Which language is primarily used for iOS app development?',
    answerOptions: [
      { answerText: 'Swift', isCorrect: true },
      { answerText: 'Java', isCorrect: false },
      { answerText: 'Python', isCorrect: false },
      { answerText: 'Ruby', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the output of 2 + 2 in JavaScript?',
    answerOptions: [
      { answerText: '4', isCorrect: true },
      { answerText: '22', isCorrect: false },
      { answerText: 'undefined', isCorrect: false },
      { answerText: 'NaN', isCorrect: false },
    ],
  },
  {
    questionText: 'In Python, what does the len() function do?',
    answerOptions: [
      { answerText: 'Returns the length of an object', isCorrect: true },
      { answerText: 'Returns the size of the memory', isCorrect: false },
      { answerText: 'Returns the number of variables', isCorrect: false },
      { answerText: 'Returns the data type', isCorrect: false },
    ],
  },
  {
    questionText: 'Which company owns the TypeScript language?',
    answerOptions: [
      { answerText: 'Microsoft', isCorrect: true },
      { answerText: 'Google', isCorrect: false },
      { answerText: 'Facebook', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
    ],
  },
  {
    questionText: 'Which of the following is a JavaScript framework?',
    answerOptions: [
      { answerText: 'React', isCorrect: true },
      { answerText: 'Django', isCorrect: false },
      { answerText: 'Laravel', isCorrect: false },
      { answerText: 'Flask', isCorrect: false },
    ],
  },
  {
    questionText: 'Which programming language is most commonly used in data science?',
    answerOptions: [
      { answerText: 'Python', isCorrect: true },
      { answerText: 'C++', isCorrect: false },
      { answerText: 'Ruby', isCorrect: false },
      { answerText: 'PHP', isCorrect: false },
    ],
  },
  {
    questionText: 'Which keyword is used to define a constant in JavaScript?',
    answerOptions: [
      { answerText: 'const', isCorrect: true },
      { answerText: 'var', isCorrect: false },
      { answerText: 'let', isCorrect: false },
      { answerText: 'def', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the extension for JavaScript files?',
    answerOptions: [
      { answerText: '.js', isCorrect: true },
      { answerText: '.java', isCorrect: false },
      { answerText: '.jsx', isCorrect: false },
      { answerText: '.jsp', isCorrect: false },
    ],
  },
  {
    questionText: 'Which version of HTML introduced semantic elements?',
    answerOptions: [
      { answerText: 'HTML5', isCorrect: true },
      { answerText: 'HTML4', isCorrect: false },
      { answerText: 'XHTML', isCorrect: false },
      { answerText: 'HTML3', isCorrect: false },
    ],
  },
  {
    questionText: 'In Python, which keyword is used to create a function?',
    answerOptions: [
      { answerText: 'def', isCorrect: true },
      { answerText: 'func', isCorrect: false },
      { answerText: 'define', isCorrect: false },
      { answerText: 'lambda', isCorrect: false },
    ],
  },
  {
    questionText: 'Which method is used to add elements to an array in JavaScript?',
    answerOptions: [
      { answerText: 'push()', isCorrect: true },
      { answerText: 'append()', isCorrect: false },
      { answerText: 'insert()', isCorrect: false },
      { answerText: 'add()', isCorrect: false },
    ],
  },
  {
    questionText: 'Which of the following is a NoSQL database?',
    answerOptions: [
      { answerText: 'MongoDB', isCorrect: true },
      { answerText: 'MySQL', isCorrect: false },
      { answerText: 'PostgreSQL', isCorrect: false },
      { answerText: 'SQL Server', isCorrect: false },
    ],
  },

  // General Knowledge Questions
  {
    questionText: 'What is the capital of Japan?',
    answerOptions: [
      { answerText: 'Tokyo', isCorrect: true },
      { answerText: 'Seoul', isCorrect: false },
      { answerText: 'Beijing', isCorrect: false },
      { answerText: 'Bangkok', isCorrect: false },
    ],
  },
  {
    questionText: 'Which country hosted the 2016 Summer Olympics?',
    answerOptions: [
      { answerText: 'Brazil', isCorrect: true },
      { answerText: 'China', isCorrect: false },
      { answerText: 'United Kingdom', isCorrect: false },
      { answerText: 'Russia', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the tallest mountain in the world?',
    answerOptions: [
      { answerText: 'Mount Everest', isCorrect: true },
      { answerText: 'K2', isCorrect: false },
      { answerText: 'Kangchenjunga', isCorrect: false },
      { answerText: 'Lhotse', isCorrect: false },
    ],
  },
  {
    questionText: 'Which planet is known as the Red Planet?',
    answerOptions: [
      { answerText: 'Mars', isCorrect: true },
      { answerText: 'Jupiter', isCorrect: false },
      { answerText: 'Venus', isCorrect: false },
      { answerText: 'Saturn', isCorrect: false },
    ],
  },
  {
    questionText: 'Who was the first man to walk on the moon?',
    answerOptions: [
      { answerText: 'Neil Armstrong', isCorrect: true },
      { answerText: 'Buzz Aldrin', isCorrect: false },
      { answerText: 'Yuri Gagarin', isCorrect: false },
      { answerText: 'Michael Collins', isCorrect: false },
    ],
  },
  {
    questionText: 'Which ocean is the largest?',
    answerOptions: [
      { answerText: 'Pacific Ocean', isCorrect: true },
      { answerText: 'Atlantic Ocean', isCorrect: false },
      { answerText: 'Indian Ocean', isCorrect: false },
      { answerText: 'Arctic Ocean', isCorrect: false },
    ],
  },
  {
    questionText: 'Who wrote the play "Romeo and Juliet"?',
    answerOptions: [
      { answerText: 'William Shakespeare', isCorrect: true },
      { answerText: 'Charles Dickens', isCorrect: false },
      { answerText: 'Mark Twain', isCorrect: false },
      { answerText: 'Homer', isCorrect: false },
    ],
  },
  {
    questionText: 'Which element is represented by the symbol O in the periodic table?',
    answerOptions: [
      { answerText: 'Oxygen', isCorrect: true },
      { answerText: 'Osmium', isCorrect: false },
      { answerText: 'Gold', isCorrect: false },
      { answerText: 'Oganesson', isCorrect: false },
    ],
  },
  {
    questionText: 'Which country is the largest by area?',
    answerOptions: [
      { answerText: 'Russia', isCorrect: true },
      { answerText: 'Canada', isCorrect: false },
      { answerText: 'United States', isCorrect: false },
      { answerText: 'China', isCorrect: false },
    ],
  },
  {
    questionText: 'Who painted the Mona Lisa?',
    answerOptions: [
      { answerText: 'Leonardo da Vinci', isCorrect: true },
      { answerText: 'Vincent van Gogh', isCorrect: false },
      { answerText: 'Pablo Picasso', isCorrect: false },
      { answerText: 'Claude Monet', isCorrect: false },
    ],
  },
  
  // Cricket Questions
  {
    questionText: 'Which country won the 2019 ICC Cricket World Cup?',
    answerOptions: [
      { answerText: 'England', isCorrect: true },
      { answerText: 'India', isCorrect: false },
      { answerText: 'Australia', isCorrect: false },
      { answerText: 'New Zealand', isCorrect: false },
    ],
  },
  {
    questionText: 'Who holds the record for the most centuries in international cricket?',
    answerOptions: [
      { answerText: 'Sachin Tendulkar', isCorrect: true },
      { answerText: 'Virat Kohli', isCorrect: false },
      { answerText: 'Ricky Ponting', isCorrect: false },
      { answerText: 'Jacques Kallis', isCorrect: false },
    ],
  },
  {
    questionText: 'Which player scored the first-ever double century in ODI cricket?',
    answerOptions: [
      { answerText: 'Sachin Tendulkar', isCorrect: true },
      { answerText: 'Virender Sehwag', isCorrect: false },
      { answerText: 'Chris Gayle', isCorrect: false },
      { answerText: 'Rohit Sharma', isCorrect: false },
    ],
  },
  {
    questionText: 'Which country has won the most ICC Cricket World Cups?',
    answerOptions: [
      { answerText: 'Australia', isCorrect: true },
      { answerText: 'India', isCorrect: false },
      { answerText: 'West Indies', isCorrect: false },
      { answerText: 'Pakistan', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is known as the "Sultan of Swing" in cricket?',
    answerOptions: [
      { answerText: 'Wasim Akram', isCorrect: true },
      { answerText: 'Shane Warne', isCorrect: false },
      { answerText: 'Glenn McGrath', isCorrect: false },
      { answerText: 'James Anderson', isCorrect: false },
    ],
  },
  {
    questionText: 'Which Indian cricketer is known as the "Wall"?',
    answerOptions: [
      { answerText: 'Rahul Dravid', isCorrect: true },
      { answerText: 'Sachin Tendulkar', isCorrect: false },
      { answerText: 'Sourav Ganguly', isCorrect: false },
      { answerText: 'Anil Kumble', isCorrect: false },
    ],
  },
  {
    questionText: 'Who was the captain of the Indian cricket team during the 1983 World Cup win?',
    answerOptions: [
      { answerText: 'Kapil Dev', isCorrect: true },
      { answerText: 'Sunil Gavaskar', isCorrect: false },
      { answerText: 'Mohinder Amarnath', isCorrect: false },
      { answerText: 'Sourav Ganguly', isCorrect: false },
    ],
  },
  {
    questionText: 'Which cricketer holds the record for the fastest century in ODI cricket?',
    answerOptions: [
      { answerText: 'AB de Villiers', isCorrect: true },
      { answerText: 'Corey Anderson', isCorrect: false },
      { answerText: 'Virat Kohli', isCorrect: false },
      { answerText: 'Shahid Afridi', isCorrect: false },
    ],
  },
  {
    questionText: 'Which cricketer has taken the most wickets in Test cricket?',
    answerOptions: [
      { answerText: 'Muttiah Muralitharan', isCorrect: true },
      { answerText: 'Shane Warne', isCorrect: false },
      { answerText: 'Anil Kumble', isCorrect: false },
      { answerText: 'James Anderson', isCorrect: false },
    ],
  },
  {
    questionText: 'Which Indian bowler took a hat-trick in the 2019 ICC World Cup?',
    answerOptions: [
      { answerText: 'Mohammed Shami', isCorrect: true },
      { answerText: 'Jasprit Bumrah', isCorrect: false },
      { answerText: 'Yuzvendra Chahal', isCorrect: false },
      { answerText: 'Kuldeep Yadav', isCorrect: false },
    ],
  }
];


const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [questions, setQuestions] = useState([]); // State to store selected 7 random questions

  useEffect(() => {
    // Select 7 random questions
    const randomQuestions = allQuestions
      .sort(() => 0.5 - Math.random()) // Shuffle questions
      .slice(0, 7); // Pick first 7 shuffled questions

    setQuestions(randomQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setShowConfetti(false);
  }, []); // Empty array means it runs only once when the component mounts

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      setShowConfetti(true); // Show confetti when quiz is completed
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
        {showScore ? (
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-green-600 mb-4">
              Quiz Completed
            </h1>
            <p className="text-lg text-gray-700">
              Your Score: {score} / {questions.length}
            </p>
            <button
              onClick={() => {
                // Restart quiz: Reshuffle and pick new random questions
                const randomQuestions = allQuestions
                  .sort(() => 0.5 - Math.random())
                  .slice(0, 7);
                setQuestions(randomQuestions);
                setCurrentQuestion(0);
                setScore(0);
                setShowScore(false);
                setShowConfetti(false); // Hide confetti when restarting quiz
              }}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              Restart Quiz
            </button>
            {showConfetti && (
              <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                recycle={false}
              />
            )}
          </div>
        ) : (
          <div>
            {questions.length > 0 && ( // Ensure questions are loaded before rendering
              <>
                <h1 className="text-3xl font-semibold text-gray-800 mb-4 text-center hover:text-gray-500 hover:border-r-8">
                  Quiz App
                </h1>
                <div className="mb-4">
                  <h2 className="my-4 text-lg font-medium text-gray-700 text-center">
                    Question {currentQuestion + 1}
                  </h2>
                  <p className="text-xl text-gray-800">
                    {questions[currentQuestion].questionText}
                  </p>
                </div>
                <div className="space-y-4">
                  {questions[currentQuestion].answerOptions.map(
                    (option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerClick(option.isCorrect)}
                        className="bg-blue-500 block hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
                      >
                        {option.answerText}
                      </button>
                    )
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
