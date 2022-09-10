import { useEffect, useState } from 'react';
import SelectHome from "../component/SelectHome";
import { useNavigate} from 'react-router-dom';

const Home = ({ name, setName, fetchQuestion }) => {
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState()
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const difficultyList = [
        {
            value: "easy",
            label: "Easy",
        },
        {
            value: "medium",
            label: "Medium",
        },
        {
            value: "hard",
            label: "Hard",
        },
    ];

    const onSelectCategory = async (option) => {
        setCategory(option.value)
    };
    const onSelectDifficulty = async (option) => {
        setDifficulty(option.value)
    };
    useEffect(() => {
        const fetchCategoryData = async () => {
            const request = await fetch('https://opentdb.com/api_category.php');
            const data = await request.json();
            setCategories(data.trivia_categories);
            const categoriesMap = data.trivia_categories.map((category) => {
                return {
                    value: category.id,
                    label: category.name,
                };
            });
            setCategories(categoriesMap);
        };
        fetchCategoryData();
    }, []);
    const StartQuiz = async (e) => {
        if (!category || !difficulty || !name) {

            setError(true);
            e.preventDefault();

            return;
        } else {
            setError(false);
            fetchQuestion(category,difficulty);
            navigate("/quiz");

        }

    };
    return (
        <div className="row row-cols-lg-2 row-cols-1 mt-5">
            <div className="div-form col-sm-12 my-auto p-3 mt-2 mb-5 bg-white rounded container">
                    <div className="text-center">
                        <img src="./img/quiz.webp" height="100%" width="100%" />
                    </div>

                    <form id="register" className="mb-3">

                        <div className="form-group">
                            {error && <p className='error mt-3'>Please fill all the feilds</p>}
                            <label>Name:</label>
                            <input type="text" onChange={(e) => setName(e.target.value)} className="form-control mb-3" id="username" placeholder="Enter your name" />

                            <label>Selcet Category:</label>
                            <SelectHome options={categories} onSelect={onSelectCategory} />

                            <label>Select difficulty:</label>
                            <SelectHome options={difficultyList} onSelect={onSelectDifficulty} />

                            <button className="btn btn-info mt-4" onClick={StartQuiz}>Start Quiz</button>
                        </div>

                    </form></div>
            </div>

    );
};

export default Home;