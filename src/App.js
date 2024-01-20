// Importing the useState hook for state management
import React, { useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import Navbar from "./components/Navbar";


function App() {

  // State variables for managing quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const totalQuestions = questions.length;

  const [setPlayAgain] = useState(false);

  // Functon to handle the option clicked
  const handleOptionClick = (isCorrect) => {
    // If option is correct, increment correct answers by 1
    if (isCorrect) {
      setCorrectAnswers((prevCorrectnswers) => prevCorrectnswers +1)
    }
    // Moving to next question after previous question's answer is selected
    if (currentQuestionIndex + 1 < totalQuestions) {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
 else {
  // If all questions are answered, set current index = 0
  setCurrentQuestionIndex(-1); 

    }
  };

  // Function to handle play again button
  const handlePlayAgainClick = () => {
    // resetting the quiz
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setPlayAgain(false);
  };


  return (
    <div>
      <Navbar />
      
       {/* Conditional rendering based on whether there are more questions */}
      {currentQuestionIndex !== -1 ? (
        <QuestionBox
        
        // Rendering the question component
          question={questions[currentQuestionIndex]}
          onOptionClick={handleOptionClick}
          questionNumber={currentQuestionIndex + 1}
        />
      ) : (

        // Render result component when all questions are answered
        <Result
          correctAnswers={correctAnswers}
          totalQuestions={totalQuestions}
          onPlayAgainClick={handlePlayAgainClick}
        />
      )}
    </div>
  );
}

export default App;