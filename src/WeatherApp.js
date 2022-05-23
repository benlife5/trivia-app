import './App.css';
import Controls from "./Controls.js";
import Typography from '@material-ui/core/Typography';
import CurrentWeather from "./CurrentWeather.jsx";

function WeatherApp(props) {
  

  
    
  return (
    <div className="weatherPart">
          <div className="sidebar">
            <Typography variant="h2" className="title"> WEATHER </Typography>
            <Controls  data={props.latData} generateArticles={props.generateArticles} generateIcon={props.generateIcon} generateWeather={props.generateWeather} generateLatitudeAndLongitude={props.generateLatitudeAndLongitude} />
          </div>
          <div className="weatherCard">
            <CurrentWeather  articles={props.articles} icon={props.icon} data={props.weatherData} generateArticles={props.generateArticles} generateWeather={props.generateWeather}/>
          </div>
    </div>
  );
}

export default WeatherApp;
