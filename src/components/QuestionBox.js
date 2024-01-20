// Importing useState hook for state management
import { useState } from "react";
import React from "react";

// Importing the styles for QuestionBox component
import "./QuestionBox.css";

// QuestionBox which has question, onOptionClick and questionNumber as props
export default function QuestionBox({
  question,
  onOptionClick,
  questionNumber,
})

// To highlight / unhighlight question when button is clicked
{
  const [highlighted, setHighlighted] = useState(false);

  const handleOptionSelect = (isCorrect) => {
    onOptionClick(isCorrect);
  };

  // To highlight
  const handleHighlightClick = () => {
    setHighlighted(true);
  };

  // To unhighlight
  const handleUnhighlightClick = () => {
    setHighlighted(false);
  };

  // HTML for questionBox Component
  return (
    <>
      <div></div>
      <div className="container">
        <div className="quiz">
          <div className="fifteen">

            {/* To display question number incrementation */}
            <p className="question-number">{questionNumber} of 5</p>
          </div>

          {/* Highlight and Unhighlight question */}
          <p className={`question ${highlighted ? "highlighted-text" : ""}`}>
            {question.text}
          </p>

          {/* Selection of options */}
          <div className="options">
            {question.options.map((option, index) => (
              <button
                key={index}
                className="opt"
                onClick={() => handleOptionSelect(option.isCorrect)}
              >
                {option.text}
              </button>
            ))}
          </div>
          
          {/* Highlight and Unhighlight buttons */}
          <div className="highlight-buttons">
            <button className="highlight" onClick={handleHighlightClick}>
              Highlight
            </button>
            <button className="unhighlight" onClick={handleUnhighlightClick}>
              Unhighlight
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
