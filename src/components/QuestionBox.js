import { useState } from 'react';
import React from 'react'
import './QuestionBox.css'


export default function QuestionBox({ question, onOptionClick, questionNumber }) {

  const [highlighted, setHighlighted] = useState(false);

  const handleOptionSelect = (isCorrect) => {
    onOptionClick(isCorrect);
  };

  
  const handleHighlightClick = () => {
    setHighlighted(true);
  };

  const handleUnhighlightClick = () => {
    setHighlighted(false);
  };

  return (
    <>
    <div>
      
    </div>
    <div className='container'>
      <div className='quiz'>
        <div className='fifteen'>
        <p className='question-number'>{questionNumber} of 5</p>
        </div>
        <p className={`question ${highlighted ? 'highlighted-text' : ''}`}>{question.text}</p>
        <div className='options'>
        {question.options.map((option, index) => (
              <button
                key={index}
                className='opt'
                onClick={() => handleOptionSelect(option.isCorrect)}
              >
                {option.text}
              </button>
            ))}

        </div>
        <div className='highlight-buttons'>
          <button className='highlight' onClick={handleHighlightClick}>Highlight</button>
          <button className='unhighlight' onClick={handleUnhighlightClick} >Unhighlight</button>
        </div>

      </div>
      
    </div>
    </>
  )
}