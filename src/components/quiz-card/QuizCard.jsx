import React from 'react';
import './QuizCard.css'; // Ensure you have a corresponding CSS file for styles

const QuizCard = ({ quizName, questions, topic, time, type, numberOfQuestions, onUpdate, onDelete, onComplete }) => {
  return (
    <div className="quiz-card">
      <h2 className="quiz-name">{quizName}</h2>
      <div className="quiz-details">
        <p><strong>Question List:</strong> {questions}</p>
        <p><strong>Topic:</strong> {topic}</p>
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Type:</strong> {type}</p>
        <p><strong>Number of Questions:</strong> {numberOfQuestions}</p>
      </div>
      <div className="button-container">
        <button className="update-btn" onClick={onUpdate}>Update</button>
        <button className="delete-btn" onClick={onDelete}>Delete</button>
        <button className="compete-btn" onClick={onComplete}>Compete</button>
      </div>
    </div>
  );
};

export default QuizCard;
