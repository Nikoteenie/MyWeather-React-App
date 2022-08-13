import './App.css';
import Weather from "./Weather";



export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This code is 
          <a
            href="https://github.com/Nikoteenie/MyWeather-React-App.git"
            rel="noreferrer"
            target="_blank"
          > open-sourced{" "}
          </a> by <a
            href="https://nikoteenie.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            Nicole Brodkin
          </a>
        </footer>
      </div>
    </div>
  );
}


