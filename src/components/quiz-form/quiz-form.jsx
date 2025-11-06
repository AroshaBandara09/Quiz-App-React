import React, { useState } from "react";
import "./QuizForm.css"; // For custom styling

const QuizForm = () => {
  const [quizName, setQuizName] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [timeLeft, setTimeLeft] = useState(5); // Example time left

  // Handle option selection
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Countdown Timer (this is just an example, you can improve the logic)
  React.useEffect(() => {
    const timer =
      timeLeft > 0 && setInterval(() => setTimeLeft((prev) => prev - 1), 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="quiz-container">
      <div className="header">
        <input
          type="text"
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
          placeholder="Quiz Name :"
          className="quiz-name-input"
        />
      </div>
      <div className="quiz-body">
        <div className="question-container">
          <p>Question</p>
          <div className="options">
            <label>
              <input
                type="radio"
                value="Option 1"
                checked={selectedOption === "Option 1"}
                onChange={handleOptionChange}
              />
              Option 01
            </label>
            <label>
              <input
                type="radio"
                value="Option 2"
                checked={selectedOption === "Option 2"}
                onChange={handleOptionChange}
              />
              Option 02
            </label>
            <label>
              <input
                type="radio"
                value="Option 3"
                checked={selectedOption === "Option 3"}
                onChange={handleOptionChange}
              />
              Option 03
            </label>
            <label>
              <input
                type="radio"
                value="Option 4"
                checked={selectedOption === "Option 4"}
                onChange={handleOptionChange}
              />
              Option 04
            </label>
          </div>
        </div>
        <div className="footer">
          <button className="nav-button">←</button>
          <p className="time-left">Time Left - 00:{timeLeft}</p>
          <button className="submit-button">Submit</button>
        </div>
      </div>
      <button className="exit-button">Exit</button>
    </div>
  );
};

export default QuizForm;
