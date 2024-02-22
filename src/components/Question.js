import React, { useEffect , useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [count, setCount] = useState(0)
  // add useEffect code


  useEffect(() => {
    if (timeRemaining === 0) {
      {return onAnswered(false)}
    }
      const intervalId = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000)
  return function() {
    clearTimeout(intervalId)
  }
}, [timeRemaining])
  
  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
