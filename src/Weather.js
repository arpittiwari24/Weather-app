import { useState } from 'react';
import './App.css';
import App from './App';
import MyButton from './MyButton';

const api = {
    key: "7d78d97e2ef44855b22b026d72f535da",
    base: "https://api.openweathermap.org/data/2.5/",
  }

const Weather = () => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(Success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  function Success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    // Make API call to OpenWeatherMap
    fetch(`${api.base}weather?lat=${latitude}&lon=${longitude}&appid=${api.key}&units=metric`)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
      })
      .catch(error => console.log(error));
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  return (
    <div>
     {!location ? <button onClick={handleLocationClick}>Get Location</button> : null}
      {location && !weather ? <p>Loading weather data...</p> : null}
      {weather ? (
        <div>
            <div className='App'>
         
          <h2 className='text-warning'>Location: {weather.name}</h2>
          <h3 className='text-warning'>Temperature: {weather.main.temp} °C</h3>
          <h3 className='text-warning'>Weather: {weather.weather[0].description}</h3>
        </div>
        </div>
      ) : null}
        
     </div>
   
  );
}


export default Weather ;