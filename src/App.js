import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { useState } from "react";
import Quiz from './pages/Quiz';
import Result from './pages/Result';
function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);


  const fetchQuestion = async (category,difficulty) => {
      
      const request = await fetch(
        'https://opentdb.com/api.php?amount=10&category='+category+'&difficulty='+difficulty+'&type=multiple'
      );
      const data = await request.json();
      setQuestions(data.results)
    };


return (
  <BrowserRouter>

    <Routes>
      <Route exact path="/" element=
        {<Home name={name} setName={setName} fetchQuestion={fetchQuestion} />}
      />
      <Route exact path="/quiz" element={<Quiz name={name} questions={questions} score={score}
      setScore={setScore} setQuestions={setQuestions} />} />
      <Route exact path="/result" element={<Result name={name} score={score} setScore={setScore}/>} />
    </Routes>


  </BrowserRouter>

);
}

export default App;
