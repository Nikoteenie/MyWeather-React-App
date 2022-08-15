import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  let [icon, setIcon] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast (response.data.daily);
    setIcon ({
      icon: `./images/icons/${response.data.daily.weather[0].icon}.gif`,
     });
    setLoaded(true);
  }

 

  function load() {
    let apiKey = "d59f6dffd1de1c1813e816ad002514b3";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded){ 
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} icon={icon[0]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[1]} icon={icon[1]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[2]} icon={icon[2]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[3]} icon={icon[3]} />
          </div>
        </div>
      </div>
    );
  } else {
    load();

return null;
  }

}