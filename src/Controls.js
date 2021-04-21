import {useState, useEffect} from "react";
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function Controls(props) {
  const generateQuestions = props.generateQuestions;
  const [numOfQuestionsInput, setNumOfQuestionsInput] = useState("10");
  const [allCategories, setAllCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
    .then((res) => res.json())
    .then((res) => {
      console.log("categories:", res);
      setAllCategories(res.trivia_categories);
    });
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    if (numOfQuestionsInput === "") {  // default number is 10
      generateQuestions(10, selectedCategory);
    } else {
      generateQuestions(numOfQuestionsInput, selectedCategory);
    }
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  }

  const handleNumInput = (e) => {
    const parsedInput = parseInt(e.target.value);

    // API can only handle 1-50 question requests
    if (e.target.value === "") {
      setNumOfQuestionsInput("");
    } else if (parsedInput > 50) {
      setNumOfQuestionsInput(50);
    } else if (parsedInput < 1) {
      setNumOfQuestionsInput(1);
    } else if (!isNaN(parsedInput)) {
      setNumOfQuestionsInput(parsedInput);
    }
  }

  return (
    <div className="generate-questions-form">
      <form onSubmit={handleSubmit}>
        <Button type="submit" variant="contained">New Questions</Button>
        <div className="question-input">
          <input type="text" placeholder="10" value={numOfQuestionsInput} maxLength="2" size="2" id="num-of-questions-box" onChange={handleNumInput}/>
          <label htmlFor="num-of-questions-box"> Questions</label>
        </div>
        <Select name="category-selection" id="category-selection" defaultValue={0} onChange={handleCategoryChange}>
          <MenuItem value={0} key={0}> All Categories </MenuItem>
          {allCategories.map((category) => <MenuItem value={category.id} key={category.id}> {category.name} </MenuItem>)}
        </Select>
      </form>
    </div>
  )
}

export default Controls; 
