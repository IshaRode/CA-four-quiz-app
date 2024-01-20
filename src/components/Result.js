
import React from 'react'
// Importing css for the result component
import './Result.css'

// Result component with correctAnswers and onPlayAgainClick as props
export default function Result({ correctAnswers, onPlayAgainClick }) {

  // Calculation the percenage of total score out of 5
  const winPercentage = ((correctAnswers / 5) * 100);

  // function to go on the quiz component when clicked on Play Again
  const handlePlayAgainClick = () => {
    onPlayAgainClick();
  };

  // HTML for Result component
  return (
    <div className='main'>
      
      <div className='result-box'>
        <h1>Final results 🧾</h1>

        {/* Displaying the number of correct options you selected and the percentage of accuracy */} 
        <p className='out-of'>{correctAnswers} out of 5 correct - ({winPercentage}%)</p>
        
        {/* After clicking play again button, redirects to quiz again */}
         <div><button className='play-again' onClick={handlePlayAgainClick}>Play Again</button></div>
      </div>
    </div>
  )
}
