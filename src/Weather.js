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
      <img className="clearfix" src={img} width="400" alt="" />
      <h1 className="city">Key Largo</h1>{" "}
      <div className="temperature">
        90<span className="units">°C</span>
      </div>
      <div className="description">Partly Cloudy</div>
      <div className="humidity-wind row g-0 text-center">
        <div className="humidity col-6">Humidity: 90% </div>
        <div className="wind col-6">Wind: 5 km/h</div>{" "}
      </div>
    </div>
  );
}
