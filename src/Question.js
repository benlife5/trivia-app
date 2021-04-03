import {useState} from "react";

function Question(props) {
  const question = props.question;

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
  );
}

export default Question;