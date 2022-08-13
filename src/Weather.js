import React from "react";
import img from "./images/teeniez/01d.gif";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search a city... "
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <img className="img-fluid" src={img} width="350" alt="" />
      <h1 className="city">Los Angeles</h1>{" "}
      <div className="temperature">
        90<span className="units">°C</span>
      </div>
      <div className="row align-items-center">
        <div className="col-6">
          <div className="description">Partly Cloudy</div>
          <div className="date">Saturday, 11:30</div>
        </div>
        <div className="col-6">
            <div className="humidity">Humidity: 90% </div>
        <div className="wind">Wind: 5 km/h</div>{" "}
        </div>
      </div>
     
      
      </div>
  );
}
