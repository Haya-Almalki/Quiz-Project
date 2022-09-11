import { useEffect, useState } from "react";
import Question from "../component/Question";

const Quiz = ({ name, questions, score, setScore ,setQuestions}) => {
  const [options, setOptions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
      shuffleOption([
          questions[currentQuestion]?.correct_answer,
          ...questions[currentQuestion]?.incorrect_answers,
        ])
    );
  }, [currentQuestion, questions]);

  const shuffleOption = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="row row-cols-lg-2 row-cols-1 mt-5 text-center">
            <div className="div-form col-sm-12 my-auto p-3 mt-2 mb-5 bg-white rounded container">
    <div className="quiz">
      <span className="subtitle"> Welcome {name} </span>

      {questions ? (
        <>
          
            <p> Score: {score} </p>
          

          <Question  currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            questions={questions}
            setQuestions={setQuestions}
            options={options}
            correct={questions[currentQuestion]?.correct_answer}
            score={score}
            setScore={setScore}
             />
        </>
      ) : (
        <div>
         <h3>Error</h3>
        </div>
      )}
    </div></div></div>
  );
};

export default Quiz;