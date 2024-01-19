import React, { useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import Navbar from "./components/Navbar";


function App() {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const totalQuestions = questions.length;

  const [setPlayAgain] = useState(false);


  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers((prevCorrectnswers) => prevCorrectnswers +1)
    }
    if (currentQuestionIndex + 1 < totalQuestions) {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
 else {
  setCurrentQuestionIndex(-1); 

    }
  };

  const handlePlayAgainClick = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setPlayAgain(false);
  };


  return (
    <div>
      <Navbar />


      {currentQuestionIndex !== -1 ? (
        <QuestionBox
          question={questions[currentQuestionIndex]}
          onOptionClick={handleOptionClick}
          questionNumber={currentQuestionIndex + 1}
        />
      ) : (
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