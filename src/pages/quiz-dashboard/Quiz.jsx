// Quiz.jsx

import React from 'react';

function Quiz({ questionData, questionNumber, totalQuestions, handleAnswerOptionClick }) {
  return (
    <div className="quiz-box">
      <div className="question-section">
        <div className="question-count">
          <span>Question {questionNumber}</span>/{totalQuestions}
        </div>
        <div className="question-text">{questionData.question}</div>
      </div>
      <div className="answer-section">
        {questionData.options.map((option, index) => (
          <button 
            key={index}
            className="answer-button"
            onClick={() => handleAnswerOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;