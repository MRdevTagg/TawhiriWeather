import { useRef, useState } from "react";
import { useFetchData } from "./hooks";
import { DailyWeather } from "./components/DailyWeather";
import { DayCardContainer } from "./styleds/DailyWeatherST";
import { weatherState, weatherStateImages } from "./utils/weatherUtils";
import { Header } from "./styleds";

import { CurrentWeather } from "./components/CurrentWeather";





function Tawhiri() {
  const [reload, setReload] = useState(true);
  const [query, setQuery] = useState('');
  const InputValue = useRef()
  const { weather, location, error } = useFetchData(reload,query);
 const onReload = () =>{
  setReload(prevState => !prevState);
 }
 const onQuery = () =>{
  setQuery(InputValue.current.value);
 }
 const onQueryLoacation = ()=>{
  InputValue.current.value = null
  onQuery()
 }
  return (
    <>
      {location && (
        <>
        <Header>
            <div className="logo-container">
            <img className="logo" src="src/assets/tawhiri-logoisohor.svg" alt="TAWHIRI WEATHER"/>
            </div>
            <div>
            <input type="text" ref={InputValue} placeholder="Search by City"/> 
            <button type="submit" onClick={onReload}><img src='src/assets/refresh.svg' alt="Refresh"/></button>
            <button type="submit"onClick={onQuery}><img src='src/assets/search-city.svg' alt="Search by city"/></button>
            <button type="submit" onClick={onQueryLoacation}><img src='src/assets/search-location.svg' alt="Search by Location"/></button>
          </div>
        </Header>  
      </>)}
      {weather && weather.current_weather && (
        
        <CurrentWeather>

          <div className="country">
            <img style={{ objectFit:'contain',filter: 'drop-shadow(0 0 8px #00000040)' }} src={location.flag} alt={location.country} />
            <p>{`${ location.country } / ${ location.city }`}</p>
          </div>
            <p> Temperature: { weather.current_weather.temperature } &deg;C</p>
            <img style={{width:'80px'}} src={weatherStateImages[weather.current_weather.weathercode]} alt="" srcset="" />
            <p> Weather state: { weatherState[weather.current_weather.weathercode] }</p>

           </CurrentWeather>
        
      )}
      <div>
 
        <h1 style={{padding:'1rem',color: '#27528D'}}>DAYLY WEATHER</h1>
        <DayCardContainer>
          {weather && weather.daily 
          && weather.daily.time.map((day, i) => DailyWeather(weather, day, i))}
        </DayCardContainer>
     </div>
    </>
  );
}

export default Tawhiri;


