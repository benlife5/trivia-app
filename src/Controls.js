import './App.css';
import {useState, useEffect} from "react";
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

function Controls(props) {
  const generateLatitudeAndLongitude = props.generateLatitudeAndLongitude;
  const generateWeather=props.generateWeather;
  const generateArticles=props.generateArticles;
  const generateIcon=props.generateIcon;
  const [zipCode, setZipCode] = useState("22124");
  const [countryCode, setCountryCode] = useState("US");

  

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(e)
    if (zipCode === "" && countryCode==="") {  // default number is 10
      generateLatitudeAndLongitude(22124, "US");
    } else if(zipCode === "" && countryCode!==""){
      generateLatitudeAndLongitude(22124, countryCode);
    }else if(zipCode === "" && countryCode!==""){
      generateLatitudeAndLongitude(zipCode, "US");
    }else{
      generateLatitudeAndLongitude(zipCode, countryCode);
    }

    generateWeather(props.data.lat, props.data.lon);
    generateArticles();
    
  }

  

  const handleZipCode = (e) => {
    setZipCode(e.target.value);
  }

  const handleCountryCode = (e) => {
    setCountryCode(e.target.value);
  }

  console.log(zipCode);
  console.log(countryCode);
  //console.log("TEST: "+props.data.zip);
  return (
    
    <div className="generate-questions-form">
      <div className="LatitudeLongtiudeData">
          <Typography variant="subtitle1">
            Latitude: {props.data.lat}
          </Typography>
          <Typography variant="subtitle1">
            Longitude: {props.data.lon}
          </Typography>
        </div>
      <form onSubmit={handleSubmit}>
        <Button type="submit" variant="contained">Submit</Button>
        <div className="TextField">
          <TextField id="filled-basic" label="Zip Code" variant="filled" onChange={handleZipCode}/>
          <br></br>
          <TextField id="filled-basic" label="Country Code (ex: US)" variant="filled" onChange={handleCountryCode}/>
        </div>
      </form>
    </div>
  )
}

export default Controls; 
