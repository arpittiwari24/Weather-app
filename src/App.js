import {  useState } from 'react';
import './App.css';

const api = {
  key: "7d78d97e2ef44855b22b026d72f535da",
  base: "https://api.openweathermap.org/data/2.5/",
}

const App = () => {
  const [search,setSearch] = useState()
  const [weather,setWeather] = useState({})

  const pressed = () => {
    fetch(`${api.base}weather?q=${search}&unit=metric&appid=${api.key}`).then(
      (res) => res.json()
    ).then(
      (result) => setWeather(result)
    )
  }

  return (
    <div>
    <div className="App">
    <h1 className='text-warning'>WEATHER APP</h1>

    {/* search city */}

    <div className='search'>
      <input className='form-control-lg' type='text' placeholder='Search your city' onChange={(e)=> setSearch(e.target.value)}/>
      <button className='btn btn-info btn-lg' onClick={pressed}>Search</button>
    </div>

    { typeof weather.main !== "undefined" ? (
    <div>
         {/* Display city name */}

    <h2 className='text-warning'><u>CITY:  </u>{weather.name}</h2>

    {/* Display temperature and condition */}
    <h3 className='text-warning'><u>TEMP:  </u>  {weather.main.temp}ºF</h3>
    <h3 className='text-warning'><u>CONDITION:  </u> {weather.weather[0].main}</h3>
    </div>
    ) : (
      <p></p>
    )

    }
    </div>
    </div>
    
  );
}


export default App;
