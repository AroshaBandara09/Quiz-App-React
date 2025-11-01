import React, { useState } from 'react';
import Quiz from './Quiz';
import Result from './Result';
import './Dashboard.css';

// Define the quiz structure and data
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which language is React based on?",
    options: ["Java", "Python", "JavaScript", "C#"],
    answer: "JavaScript",
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Management Links", "Highly Technical Modern Language", "Hyperlink and Text Markup"],
    answer: "Hyper Text Markup Language",
  },
];

function QuizDashboard() {
  // State to track the current question index
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // State to track the user's score
  const [score, setScore] = useState(0);
  // State to determine if the quiz is finished
  const [showResult, setShowResult] = useState(false);

  // Handler for when an option is selected
  const handleAnswerOptionClick = (selectedOption) => {
    // Check if the selected option is correct
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    // Move to the next question
    const nextQuestion = currentQuestion + 1;

    // Check if there are more questions
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // Quiz finished
      setShowResult(true);
    }
  };

  // Handler to restart the quiz
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="quiz-dashboard">
      <h1>Tech Quiz Challenge</h1>

      {showResult ? (
        // RENDER THE RESULT COMPONENT
        <Result 
          score={score} 
          totalQuestions={quizData.length} 
          onRestart={restartQuiz}
        />
      ) : (
        // RENDER THE QUIZ COMPONENT
        <Quiz 
          questionData={quizData[currentQuestion]} 
          questionNumber={currentQuestion + 1}
          totalQuestions={quizData.length}
          handleAnswerOptionClick={handleAnswerOptionClick}
        />
      )}
      
    </div>
  );
}

export default QuizDashboard;