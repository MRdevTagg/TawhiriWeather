import { useRef, useState } from "react";
import { useFetchData } from "./hooks";
import { DailyWeather } from "./components/DailyWeather";
import { DayCardContainer } from "./styleds/DailyWeatherST";
import { weatherState } from "./utils/weatherUtils";
import { Header } from "./styleds";
import Clock from "./utils/clock";
import { CurrentWeather } from "./components/CurrentWeather";
import styled from "styled-components";


const StyledClock = styled.p`
	font-size: 28px ;
	text-shadow: 0 0 10px#00000056;
`

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
  return (
    <>
      {location && (
        <>
        <Header>
          <h1>Tawhiri is running...</h1>
          <button type="submit" onClick={onReload}> Refresh </button>
          <input type="text" ref={InputValue}/>
          <button type="submit"onClick={onQuery}>Search City</button>
        </Header>  
      </>)}
      {weather && weather.current_weather && (
        
        <CurrentWeather>
          <header>
            <h2>Current Weather</h2>
            <StyledClock><Clock /></StyledClock>
          </header>
          <div className="country">
            <img style={{ objectFit:'contain',filter: 'drop-shadow(0 0 8px #00000040)' }} src={location.flag} alt={location.country} />
            <p>{`${ location.country } / ${ location.city }`}</p>
          </div>
            <p> Temperature: { weather.current_weather.temperature } &deg;C</p>
            <p> Weather state: { weatherState[weather.current_weather.weathercode] }</p>
         
           </CurrentWeather>
        
      )}
      <div>
        <h1>DAYLY WEATHER</h1>
        <DayCardContainer>
          {weather && weather.daily 
          && weather.daily.time.map((day, i) => DailyWeather(weather, day, i))}
        </DayCardContainer>
     </div>
    </>
  );
}

export default Tawhiri;


