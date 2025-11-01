// Result.jsx

import React from 'react';

function Result({ score, totalQuestions, onRestart }) {
  return (
    <div className="result-section">
      <h2>Quiz Finished!</h2>
      <div className="score-text">
        You scored **{score}** out of {totalQuestions}.
      </div>
      <button 
        onClick={onRestart}
        className="restart-button"
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default Result;