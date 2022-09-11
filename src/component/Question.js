import { useState } from "react";

import './Question.css';
import { useNavigate } from "react-router-dom";

const Question = ({currentQuestion, setCurrentQuestion, questions,setQuestions, options, correct, setScore, score
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const handleExit = () => {
    setCurrentQuestion(0);
    setScore(0)
    setQuestions();
    navigate("/");
  };
  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = (e) => {
    if (currentQuestion > 8) {
      navigate("/result");
    } else if (selected) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected();
    } else {setError("Select the answer");
    e.preventDefault();

  }

  };

 
  return (
    <div className="question">
      <p className="h5">Question {currentQuestion + 1} : </p>

      <div className="singleQuestion">
        <p>{questions[currentQuestion].question}</p>

        <div className="options">
          {error && <p  className='error mt-3'> {error}</p>}

          {/* handleCheck to check if correct or not */}
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <button className="btn btn-info mt-4" onClick={handleNext}> {currentQuestion > 20 ? "Submit" : "Next Question"}</button>

          <button className="btn btn-secondary mt-1" onClick={handleExit}>Exit</button>
          
                </div>
    </div>
  );
};

export default Question;