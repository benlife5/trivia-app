import {useState} from "react";
import {decode} from 'html-entities';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  pos: {
    marginBottom: 12,
  },
});

function Question(props) {
  const question = props.question;
  const [disabled, setDisabled] = useState(false);
  const [displayResult, setDisplayResult] = useState(<></>);
  const onAnswer = props.onAnswer;

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
        setDisplayResult(<p>Correct! The answer was {decode(question.correct_answer)}.</p>);
        onAnswer(true);
    } else {
        setDisplayResult(<p>Incorrect. The answer was {decode(question.correct_answer)}.</p>);
        onAnswer(false);
    }
  }

  return (
    <Card variant="outlined" className="question-card">
      <CardContent>
        <Typography variant="h6"> {decode(question.question)} </Typography>
      </CardContent>
      <CardActions>
        {potentialAnswers.map(answer => <Button type="submit" disabled={disabled} value={decode(answer)} size="small" key={answer} onClick={() => answerSelected(answer)}> {decode(answer)} </Button>)}
      </CardActions>
      
      <Typography variant="subtitle1"> {displayResult} </Typography>
    </Card>
  );
}

export default Question;