import './App.css';
import {useState, useEffect} from "react";
import Question from "./Question.js";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setQuestions(res.results);
      });
  }, []);

  return (
    <div className="App">
      <h1> Trivia! </h1>
      {
        questions.map((question) => <Question question={question} key={question.question} />)
      }
    </div>
  );
}

export default App;
