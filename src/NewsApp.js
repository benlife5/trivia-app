import './App.css';
import ArticlesCard from './ArticlesCard';
function NewsApp(props) {
  
    return (
      <div>
        <ArticlesCard articles={props.articles} />
      </div>
    );
  }
  
  export default NewsApp;
  