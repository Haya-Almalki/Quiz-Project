import React ,{useEffect} from 'react';
import { useNavigate } from "react-router-dom";


const Result = ({ name, score, setScore }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/result");
    }
  }, [name, navigate]);
  const homePage = () => {

    setScore(0)
    navigate("/");

  };
  return (
    <div className="row row-cols-lg-2 row-cols-1 mt-5 text-center">
    <div className="div-form col-sm-12 my-auto p-3 mt-2 mb-5 bg-white rounded container">
      <h3 className="title">Your Score: {score}/10</h3><br></br>

      <button className="btn btn-secondary mt-1" onClick={homePage}>Home Page</button>
    </div>
    </div>
  );
};

export default Result;