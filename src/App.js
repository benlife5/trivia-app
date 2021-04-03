import './App.css';
import {useState, useEffect} from "react";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
    .then(res => res.json())
    .then(res => {console.log(res.results); setQuestions(res.results)});
  }, [])


  const displayQuestion = (question) => {
    let randomLocation;
    if (question.type === "multiple") {
      randomLocation = Math.floor(Math.random() * 3)
    } else {
      randomLocation = Math.floor(Math.random() * 2)
    }
    
    let potentialAnswers = [...question.incorrect_answers];
    potentialAnswers.splice(randomLocation, 0, question.correct_answer);

    return (
      <>
        <h4>{question.question}</h4>
        {
          potentialAnswers.map(answer => <input type="submit" value={answer} />)
        }
      </>
    )
  }

  return (
    <div className="App">
      <h1> Trivia! </h1>
      {
        questions.map(displayQuestion)
      }
    </div>
  );
}

export default App;
