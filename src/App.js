import './App.css';
import {useState, useEffect} from "react";
import Question from "./Question.js";
import Controls from "./Controls.js";
import AccuracyInfo from "./AccuracyInfo.js";
import Typography from '@material-ui/core/Typography';


function App() {
  const [questions, setQuestions] = useState([]);
  const [numOfUnansweredQuestions, setNumOfUnansweredQuestions] = useState(0);
  const [numOfCorrectAnswers, setNumOfCorrectAnswers] = useState(0);
  const [numOfIncorrectAnswers, setNumOfIncorrectAnswers] = useState(0);

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
    setNumOfUnansweredQuestions(numOfQuestions);
  }

  const onAnswer = (correct) => {
    setNumOfUnansweredQuestions((previous) => previous - 1);
    if (correct) {
      setNumOfCorrectAnswers((previous) => previous + 1);
    } else {
      setNumOfIncorrectAnswers((previous) => previous + 1);
    }
  }

  return (
    <div className="App">
      <div className="sidebar">
        <Typography variant="h2" className="title"> TRIVIA </Typography>
        <AccuracyInfo unanswered={numOfUnansweredQuestions} correct={numOfCorrectAnswers} incorrect={numOfIncorrectAnswers}/>
        <Controls generateQuestions={generateQuestions} />
      </div>
      <div className="questions-container">
        {questions.map((question) => <Question question={question} onAnswer={onAnswer} key={question.question} />)}
      </div>
    </div>
  );
}

export default App;
