import {useState} from "react";

function Controls(props) {
  const generateQuestions = props.generateQuestions;
  const [inputValue, setInputValue] = useState("10");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") {  // default number is 10
      generateQuestions(10);
    } else {
      generateQuestions(inputValue);
    }
  }

  const handleChange = (e) => {
    const input = parseInt(e.target.value);

    // API can only handle 1-50 question requests
    if (e.target.value === "") {
      setInputValue("");
    } else if (input > 50) {
      setInputValue(50);
    } else if (input < 1) {
      setInputValue(1);
    } else if (!isNaN(input)) {
      setInputValue(input);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="New Questions" />
        <br />
        <input type="text" placeholder="10" value={inputValue} maxLength="2" size="2" id="num-of-questions-box" onChange={handleChange}/>
        <label htmlFor="num-of-questions-box"> questions</label> 
      </form>
    </div>
  )
}

export default Controls;