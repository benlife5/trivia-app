import {useState} from "react";
import {decode} from 'html-entities';

function Question(props) {
  const question = props.question;
  const [disabled, setDisabled] = useState(false);
  const [displayResult, setDisplayResult] = useState(<></>);

  let randomLocation;
  if (question.type === "multiple") {
    randomLocation = Math.floor(Math.random() * 3)
  } else {
    randomLocation = Math.floor(Math.random() * 2)
  }
  
  let potentialAnswers = [...question.incorrect_answers];
  potentialAnswers.splice(randomLocation, 0, question.correct_answer);


  const answerSelected = (answer) => {
    setDisabled(true);
    if (answer === question.correct_answer) {
        setDisplayResult(<p>Correct! The answer was {question.correct_answer}.</p>);
    } else {
        setDisplayResult(<p>Incorrect. The answer was {question.correct_answer}.</p>);
    }
  }



  return (
    <>
      <h4>{decode(question.question)}</h4>
      {potentialAnswers.map(answer => <input type="submit" disabled={disabled} value={decode(answer)} key={answer} onClick={() => answerSelected(answer)}/>)}
      {displayResult}
    </>
  );
}

export default Question;