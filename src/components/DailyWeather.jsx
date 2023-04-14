import { DayCard } from "../styleds/DailyWeatherST";
import { dayName, weatherState } from "../utils/weatherUtils";


export const DailyWeather = (weather, day, i) => {
  const { weathercode, temperature_2m_min, temperature_2m_max } = weather.daily;
  return (
    <DayCard key={day}>
      <header> { dayName(day) } </header>
      <img src="" alt="" />
      <p>{weatherState[weathercode[i]]}</p>
      <footer>
        <p>min:{temperature_2m_min[i]}</p>
        <p>max:{temperature_2m_max[i]}</p>
      </footer>
    </DayCard>);
}

