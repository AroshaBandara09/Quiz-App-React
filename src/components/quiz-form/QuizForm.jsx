import React, { useState, useEffect } from 'react';
import styles from './QuizForm.module.css'; // Import the CSS module

const QuizForm = () => {
  const quizData = {
    name: "General Knowledge Quiz",
    questions: [
      {
        id: 1,
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"]
      },
      {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"]
      },
      {
        id: 3,
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"]
      }
    ]
  };

  const [quizName, setQuizName] = useState(quizData.name);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(300);
  const [quizStarted, setQuizStarted] = useState(true);

  const currentQuestion = quizData.questions[currentQuestionIndex];

  useEffect(() => {
    if (!quizStarted || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizStarted, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleOptionChange = (optionIndex) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionIndex
    }));
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handleSubmit = () => {
    const answeredCount = Object.keys(answers).length;
    alert(`Quiz submitted!\nAnswered: ${answeredCount}/${quizData.questions.length} questions`);
    setQuizStarted(false);
  };

  const handleExit = () => {
    if (window.confirm("Are you sure you want to exit? Your progress will be lost.")) {
      setQuizStarted(false);
      setAnswers({});
      setCurrentQuestionIndex(0);
      setTimeLeft(300);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.quizContainer}>
        <div className={styles.header}>
          <input
            type="text"
            value={quizName}
            onChange={(e) => setQuizName(e.target.value)}
            placeholder="Quiz Name"
            className={styles.quizNameInput}
          />
          <div className={styles.questionCounter}>
            Question {currentQuestionIndex + 1} of {quizData.questions.length}
          </div>
        </div>

        <div className={styles.quizBody}>
          <div className={styles.questionContainer}>
            <h3 className={styles.questionText}>{currentQuestion.question}</h3>
            <div className={styles.options}>
              {currentQuestion.options.map((option, index) => (
                <label key={index} className={styles.optionLabel}>
                  <input
                    type="radio"
                    value={index}
                    checked={answers[currentQuestion.id] === index}
                    onChange={() => handleOptionChange(index)}
                    className={styles.radioInput}
                  />
                  <span className={styles.optionText}>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill}
              style={{
                width: `${((currentQuestionIndex + 1) / quizData.questions.length) * 100}%`
              }}
            />
          </div>

          <div className={styles.footer}>
            <button 
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className={`${styles.navButton} ${styles.prevButton} ${currentQuestionIndex === 0 ? styles.disabledButton : ''}`}
            >
              ← Previous
            </button>
            
            <div className={styles.timeLeft}>
              Time Left: {formatTime(timeLeft)}
            </div>
            
            {currentQuestionIndex === quizData.questions.length - 1 ? (
              <button onClick={handleSubmit} className={styles.submitButton}>
                Submit Quiz
              </button>
            ) : (
              <button onClick={handleNext} className={styles.navButton}>
                Next →
              </button>
            )}
          </div>
        </div>
        
        <button onClick={handleExit} className={styles.exitButton}>
          Exit Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizForm;
