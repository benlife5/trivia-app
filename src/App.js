import './App.css';
import {useState, useEffect} from "react";
import Question from "./Question.js";

function App() {
  const [questions, setQuestions] = useState([]);
  const [newQuestions, setNewQuestions] = useState([false]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setQuestions(res.results);
        setNewQuestions(false);
      });
  }, [newQuestions]);

  return (
    <div className="App">
      <h1> Trivia! </h1>
      <input type="submit" value="New Questions" onClick={() => setNewQuestions(true) } />
      {
        questions.map((question) => <Question question={question} key={question.question} />)
      }
    </div>
  );
}

export default App;
