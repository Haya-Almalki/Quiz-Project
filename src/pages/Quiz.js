import { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import Question from "../component/Question";

const Quiz = ({ name, questions, score, setScore ,setQuestions}) => {
  const [options, setOptions] = useState();
  const [currentQuestions, setCurrentQuestions] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currentQuestions]?.correct_answer,
          ...questions[currentQuestions]?.incorrect_answers,
        ])
    );
  }, [currentQuestions, questions]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="row row-cols-lg-2 row-cols-1 mt-5 text-center">
            <div className="div-form col-sm-12 my-auto p-3 mt-2 mb-5 bg-white rounded container">
    <div className="quiz">
      <span className="subtitle"> Welcome {name} </span>

      {questions ? (
        <>
          
            <p> Score : {score} </p>
          

          <Question  currentQuestions={currentQuestions}
            setCurrentQuestions={setCurrentQuestions}
            questions={questions}
            options={options}
            correct={questions[currentQuestions]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions} />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div></div></div>
  );
};

export default Quiz;