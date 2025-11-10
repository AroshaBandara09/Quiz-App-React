import React from 'react';
import './QuestionCard.css'; // Import the CSS file

const QuestionCard = ({ onBack, questionList = [], onQuestionUpdate, onQuestionDelete, onQuizUpdate, onQuizDelete }) => {
  return (
    <div className="question-card-container">
      <button 
        className="back-button"
        onClick={onBack}
      >
        ← Back
      </button>

      <div className="quiz-info-container">
        <div className="quiz-info-grid">
          <div>
            <p className="quiz-info-item">Total Questions</p>
            <p className="quiz-info-value">{questionList.length}</p>
          </div>
          <div>
            <p className="quiz-info-item">Duration</p>
            <p className="quiz-info-value">15 min</p>
          </div>
          <div>
            <p className="quiz-info-item">Type</p>
            <p className="quiz-info-value">Multiple Choice</p>
          </div>
          <div>
            <p className="quiz-info-item">Status</p>
            <p className="quiz-info-value text-green-600">● Active</p>
          </div>
        </div>
        <div className="quiz-description">
          <p className="quiz-description-text">General Knowledge Quiz</p>
        </div>
      </div>

      <div className="button-container">
        <button 
          className="update-quiz-button"
          onClick={onQuizUpdate}
        >
          Update Quiz
        </button>
        <button 
          className="delete-quiz-button"
          onClick={onQuizDelete}
        >
          Delete Quiz
        </button>
      </div>

      <div className="question-list">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Questions</h3>
        {questionList.length === 0 ? (
          <div className="no-questions">
            <p className="no-questions-text">No questions available</p>
          </div>
        ) : (
          questionList.map((question, index) => (
            <div key={index} className="question-card">
              <div className="question-header">
                <div>
                  <span className="question-number">Question {index + 1}</span>
                  <p className="question-text">{question.text}</p>
                </div>
                <span className="question-marks">{question.marks} pts</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                {question.options.map((option, i) => (
                  <button 
                    key={i} 
                    className="option-button"
                  >
                    <span className="font-semibold text-gray-600 mr-2">{String.fromCharCode(65 + i)}.</span>
                    {option}
                  </button>
                ))}
              </div>
              
              <div className="question-actions">
                <button 
                  className="update-question-button"
                  onClick={() => onQuestionUpdate(index)}
                >
                  Update
                </button>
                <button 
                  className="delete-question-button"
                  onClick={() => onQuestionDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
