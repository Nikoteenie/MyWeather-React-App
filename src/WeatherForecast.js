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
    setLoaded(true);
    setForecast(response.data.daily);
    setIcon({
      icon: `./images/icons/${response.data.daily[0].weather[0].icon}.gif`,
    });
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
            <WeatherForecastDay data={forecast[0]} image={icon[0]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[1]} image={icon[1]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[2]} image={icon[2]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[3]} image={icon[3]} />
          </div>
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}
