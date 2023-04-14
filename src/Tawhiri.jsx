import { useState } from "react";
import { useFetchData } from "./hooks";
import { DailyWeather } from "./components/DailyWeather";
import { DayCardContainer } from "./styleds/DailyWeatherST";
import { weatherState } from "./utils/weatherUtils";
import { Header } from "./styleds";

function Tawhiri() {
  const [reload, setReload] = useState(true)
  const { weather, location, error } = useFetchData(reload);
 const onReload = () =>{
  console.log(reload)
  setReload(prevState => !prevState);
 }
  return (
    <>
      {location && (
        <>
        <Header>
          <h1>Tawhiri is running...</h1>
          <button type="submit" onClick={onReload}> Refresh </button>
          <p>{`${ location.country } / ${ location.city }`}</p>
          <img style={{ filter: 'drop-shadow(0 0 12px #00000073)' }} src={location.flag} alt={location.country} />
          <p>{weather.generationtime_ms}</p>
          <input type="text" />
        </Header>  
      </>)}
      {weather && weather.current_weather && (
        <>
          <h2>Current Weather</h2>
          <p> Temperature: { weather.current_weather.temperature } &deg;C</p>
          <p> Weather state: { weatherState[weather.current_weather.weathercode] }</p>
        </>
      )}
      
        <DayCardContainer>
          {weather && weather.daily 
          && weather.daily.time.map((day, i) => DailyWeather(weather, day, i))}
        </DayCardContainer>
     
    </>
  );
}

export default Tawhiri;


