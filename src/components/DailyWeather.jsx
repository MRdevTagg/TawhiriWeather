import { DayCard } from "../styleds/DailyWeatherST";
import { dayName, weatherState } from "../utils/weatherUtils";


export const DailyWeather = (weather, day, i) => {
  const { weathercode, temperature_2m_min, temperature_2m_max } = weather.daily;
  return (
    <DayCard key={day}>
      <header> <h2>{ dayName(day).toUpperCase }</h2> </header>
      <img src="" alt="" />
      <p className="w-state">{weatherState[weathercode[i]]}</p>
      <footer>
        <p className="min">&deg;{temperature_2m_min[i]}</p>
        <p className="max">&deg;{temperature_2m_max[i]}</p>
      </footer>
    </DayCard>);

}

