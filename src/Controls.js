import {useState, useEffect} from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="New Questions" />
        <br />
        <input type="text" placeholder="10" value={numOfQuestionsInput} maxLength="2" size="2" id="num-of-questions-box" onChange={handleNumInput}/>
        <label htmlFor="num-of-questions-box"> questions</label>
        <br /> 
        <select name="category-selection" id="category-selection" onChange={handleCategoryChange}>
          <option value={0} key={0}> All Categories </option>
          {allCategories.map((category) => <option value={category.id} key={category.id}> {category.name} </option>)}
        </select>
      </form>
    </div>
  )
}

export default Controls; 
