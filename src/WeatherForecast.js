import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  function load() {
    let apiKey = "d59f6dffd1de1c1813e816ad002514b3";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay
              data={forecast[0]}
              image={`./images/icons/${forecast[0].weather[0].icon}.gif`}
            />
          </div>
          <div className="col">
            <WeatherForecastDay
              data={forecast[1]}
              image={`./images/icons/${forecast[1].weather[0].icon}.gif`}
            />
          </div>
          <div className="col">
            <WeatherForecastDay
              data={forecast[2]}
              image={`./images/icons/${forecast[2].weather[0].icon}.gif`}
            />
          </div>
          <div className="col">
            <WeatherForecastDay
              data={forecast[3]}
              image={`./images/icons/${forecast[3].weather[0].icon}.gif`}
            />
          </div>
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}
