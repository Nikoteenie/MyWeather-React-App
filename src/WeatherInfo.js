import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
     <img className="image" alt="" src={props.data.mainIcon} width="350"/>
      <h1 className="city">{props.data.city}</h1>{" "}
      <div className="temperature">
        <WeatherTemperature celsius={props.data.temperature} />
      </div>
      <div className="row align-items-center">
        <div className="col-6">
          <div className="description text-capitalize">
            {props.data.description}
          </div>
          <div className="date">
            <FormattedDate date={props.data.date} />
          </div>
        </div>
        <div className="col-6">
          <div className="humidity">Humidity: {props.data.humidity}% </div>
          <div className="wind">Wind: {props.data.wind} km/h</div>{" "}
        </div>
      </div>
    </div>
  );
}
