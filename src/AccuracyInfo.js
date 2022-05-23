import Typography from '@material-ui/core/Typography';

function AccuracyInfo (props) {
    const correct = props.correct;
    const incorrect = props.incorrect;
  
    const percentageCorrect = correct / (correct + incorrect);
  
    const formattingOptions = {
      style: "percent",
      maximumFractionDigits: 2
    }
  
    const formatter = new Intl.NumberFormat(undefined, formattingOptions);
    /**
     * <Typography variant="subtitle1">
            Correct: {formatter.format(percentageCorrect)} ({correct}/{correct + incorrect}) 
          </Typography>
     */
    if (correct + incorrect !== 0) {
      return (
        <div className="accuracy-info">
          <Typography variant="subtitle1">
            Latitude:
          </Typography>
          <Typography variant="subtitle1">
            Longitude:
          </Typography>
        </div>
      );
    }
    return null;
  }
  
  export default AccuracyInfo;