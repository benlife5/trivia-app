function Score (props) {
  const unanswered = props.unanswered;
  const correct = props.correct;
  const incorrect = props.incorrect;

  return (
    <div>
      <p>Unanswered: {unanswered}</p>
      <p>Correct: {correct / (correct + incorrect) * 100}% ({correct})</p>
      <p>Incorrect: {incorrect / (correct + incorrect) * 100}% ({incorrect})</p>
    </div>
  );
}

export default Score;