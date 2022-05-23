import {useState, useEffect} from "react";
import './App.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';

function CurrentWeather(props) {
    const generateWeather=props.generateWeather;
    const [latitude, setLatitude]=useState(38.8852);//HUGE learning opp: learned that when creating api calls dependent on eachother, we must use state variables and error catching
    const [longitude, setLongitude]=useState(-77.3233);

/**
 * "current": {
    
    "temp": 284.07,
    "feels_like": 282.84,
   
    "humidity": 62,
   
    "wind_speed": 6,
    "wind_deg": 300,
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }
    ],
    "rain": {
      "1h": 0.21
    }
  },
 * 1.8*(K-273) + 32
 */
/*
<Typography variant="subtitle1">
                Temperature: {Math.trunc(1.8*(props.data.current.temp-273)+32)+"°F"}
            </Typography>
            <Typography variant="subtitle1">
                Feels Like: {Math.trunc(1.8*(props.data.current.feels_like-273)+32)+"°F"}
            </Typography>
            <Typography variant="subtitle1">
                Humidity: {props.data.current.humidity}%
            </Typography>
            <Typography variant="subtitle1">
                Weather: {props.data.current.weather[0].main}
            </Typography>
*/
//console.log(props.data);

  console.log(props.data);
  return (
    <Card variant="outlined" className="question-card">
          <CardContent>
            <DialogTitle>Current Weather</DialogTitle>
            {props.data!==undefined &&
                <><Typography variant="subtitle1">
                      Temperature: {Math.trunc(1.8 * (props.data.current.temp - 273) + 32) + "°F"}
                  </Typography><Typography variant="subtitle1">
                          Feels Like: {Math.trunc(1.8 * (props.data.current.feels_like - 273) + 32) + "°F"}
                      </Typography><Typography variant="subtitle1">
                          Humidity: {props.data.current.humidity}%
                      </Typography>
                  A    <Typography variant="subtitle1">
                          Weather: {props.data.current.weather[0].main}
                      </Typography>
                      {props.icon}
                      </>
                      
            }
          </CardContent>
    </Card>
  );
}

export default CurrentWeather;