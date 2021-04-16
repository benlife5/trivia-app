function AccuracyInfo (props) {
    const correct = props.correct;
    const incorrect = props.incorrect;
  
    const percentageCorrect = correct / (correct + incorrect);
    // const percentageIncorrect = 1 - percentageCorrect;
  
    const formattingOptions = {
      style: "percent",
      maximumFractionDigits: 2
    }
  
    const formatter = new Intl.NumberFormat(undefined, formattingOptions);
    
    if (correct + incorrect !== 0) {
      return (
        <div className="accuracy-info">
          <p>
            Correct: {formatter.format(percentageCorrect)} ({correct}/{correct + incorrect}) 
          </p>
        </div>
      );
    }
    return null;
  }
  
  export default AccuracyInfo;