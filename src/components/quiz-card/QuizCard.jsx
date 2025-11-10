import React from 'react';
import './QuizCard.css'; // Import the CSS file for styles

const QuizCard = ({ quizName, questions, topic, time, type, numberOfQuestions, onUpdate, onDelete, onComplete }) => {
  return (
    <div className="quiz-card">
      {/* Header */}
      <div className="quiz-card__header">
        <h2 className="quiz-card__quiz-name">{quizName}</h2>
        <p className="quiz-card__topic">{topic}</p>
      </div>

      {/* Details Section */}
      <div className="quiz-card__details">
        <div className="quiz-card__details-item">
          <div className="quiz-card__label">Questions</div>
          <p className="quiz-card__text">{questions}</p>
        </div>
        <div className="quiz-card__details-item">
          <div className="quiz-card__label">Duration</div>
          <p className="quiz-card__text">{time}</p>
        </div>
        <div className="quiz-card__details-item">
          <div className="quiz-card__label">Type</div>
          <p className="quiz-card__text">{type}</p>
        </div>
        <div className="quiz-card__total">
          <div className="quiz-card__label">Total Questions</div>
          <p className="quiz-card__total-count">{numberOfQuestions}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="quiz-card__actions">
        <button onClick={onUpdate} className="quiz-card__button quiz-card__button--update">
          Update
        </button>
        <button onClick={onDelete} className="quiz-card__button quiz-card__button--delete">
          Delete
        </button>
      </div>

      {/* Start Quiz Button */}
      <button onClick={onComplete} className="quiz-card__button quiz-card__button--start">
        Start Quiz
      </button>
    </div>
  );
};

export default QuizCard;
