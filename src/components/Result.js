
import React from 'react'
import './Result.css'


export default function Result({ correctAnswers, totalQuestions,  onPlayAgainClick }) {
  const winPercentage = ((correctAnswers / totalQuestions) * 100);

  
  const handlePlayAgainClick = () => {
    onPlayAgainClick();
  };

  return (
    <div className='main'>
      
      <div className='result-box'>
        <h1>Final results 🧾</h1>
        <p className='out-of'>{correctAnswers} out of 5 correct - ({winPercentage}%)</p>
         <div><button className='play-again' onClick={handlePlayAgainClick}>Play Again</button></div>
      </div>
    </div>
  )
}
