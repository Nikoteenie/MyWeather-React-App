# Teenie Weather App

### Deployed @ 
https://teenie-weather-react-app.netlify.app/

### Highlighted Code: 
```javascript

export default function WeatherForecast(props) {

//useState hook to create a state variable "loaded" and initialize it as "false"
  let [loaded, setLoaded] = useState(false);
  
//useState hook to create a state variable "forecast" and initialize it as "null"
  let [forecast, setForecast] = useState(null);

// useEffect hook to update state when the coordinates change
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);


// updates the component's state with the response data
  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

//function that featches the data of a weather forecast using the OpenWeatherMap API
  function load() {
    let apiKey = "d59f6dffd1de1c1813e816ad002514b3";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;


//Sends a GET request using Axios and then updates the components state with response data
    axios.get(apiUrl).then(handleResponse);
  }

// Rendering the weather forecast data if the "loaded" state is true, or else it calls load function and returns null
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
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
