import './App.css';
import {useState, useEffect} from "react";
import Question from "./Question.js";
import Controls from "./Controls.js";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    generateQuestions();
  }, []);

  const generateQuestions = (numOfQuestions=10, categoryID=0) => {
    fetch("https://opentdb.com/api.php?amount=" + numOfQuestions + "&category=" + categoryID)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      setQuestions(res.results);
    });
  }

  return (
    <div className="App">
      <h1> Trivia! </h1>
      <Controls generateQuestions={generateQuestions} />
      {
        questions.map((question) => <Question question={question} key={question.question} />)
      }
    </div>
  );
}

export default App;
