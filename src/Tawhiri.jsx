import { useState } from "react";
import {useFetchData} from "./hooks";
import { DailyWeather } from "./components/DailyWeather";
import { DayCardContainer } from "./styleds/DailyWeatherST";
import { weatherState } from "./utils/weatherUtils";

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
          <h1>Tawhiri is running...</h1>
          <button type="submit" onClick={onReload}> Refresh </button>
          <p>{`${ location.country } / ${ location.city }`}</p>
          <img style={{ filter: 'drop-shadow(0 0 12px #00000073)' }} src={location.flag} alt={location.country} />
        <h2>Current Weather</h2>
      </>)}
      {weather && weather.current_weather && (
        <>
          <p> Temperature: { weather.current_weather.temperature } &deg;C</p>
          <p> Weather state: { weatherState[weather.current_weather.weathercode] }</p>
        </>
      )}
      <section>
        <DayCardContainer>
          {weather && weather.daily 
          && weather.daily.time.map((day, i) => DailyWeather(weather, day, i))}
        </DayCardContainer>
      </section> 
    </>
  );
}

export default Tawhiri;


