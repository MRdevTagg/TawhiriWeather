import styled from 'styled-components';
import MinMax from './MinMax';
import { dayGet, weatherState, forecastIcons } from '../utils/weatherUtils';

export const DayCardContainer = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: .5rem .5rem 0 .5rem;
  margin: 0 .5rem;
  width: 450px;
  min-width: 400px;
  gap: .1rem;
  border-radius: 12px;
  box-shadow:inset 0 0 6px #ffffffc0, 0 0 12px #00000033;
  background-color: #254fc428;

  height: calc(100vh - 150px);
  >.days{

    overflow: scroll;
    scrollbar-width: none; 
    -ms-overflow-style: none; 
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
> .title{
  position: sticky;
  overflow: hidden;
  top: 0;
  width: 100%;
  z-index: 30;
  align-self: flex-start;
  min-height: 3rem;
  background-color: #27528dac;
  border-radius: 12px 12px 0 0; 
  >h2{
    font-size: 1.5rem;
    color: #daeeff;
    padding: .5rem 1rem;
  }
}
@media (max-width: 500px) {
     min-width: 95%;
     width: 95%;
     height:100%;
} 
`;

export const DayCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:space-between;
  padding: 8px;
  margin-bottom: 8px;
  background-color: #ffffff58;
  border-radius: 4px;
  max-width: 100%;
  
  min-height:130px;
  transform: scale(.95);
  transition: transform .7s;
  &:hover {
    transform: scale(1);
  }
>*{ overflow:hidden; }
  >pre {
    min-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: fit-content;
    margin: 0 0 .2rem;
    padding: .2rem;
    > h2,h3{padding: .2rem .4rem;}
    > h2{
      font-size: 1.2rem;
      font-weight: bold;
      text-align: center;
      color: #cedffb;
      border-radius: 4px;  
      background-color: #0b4f83b3;
    }
    >h3{
      color:#0b4f83b3;
      font-size: 1.2rem;
      font-weight: bold;
      text-align: center;
      border: 1px solid #003771;
      border-radius: 1rem;
    }
  }

.weather-state{
  height:fit-content;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  > img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }
  > p {
    font-size: 15px;
    font-weight: bold;
    text-align: left;
    margin: 2px;
    padding: 2px;
    color: #003771;
    width: 33.3%;
  }
}
`;
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
export function DailyWeather({ weather }) {
  const {
    weathercode, temperature_2m_min, temperature_2m_max, time,
  } = weather.daily;
  return (

    <DayCardContainer>
      <div className="title">
        <h2>DAILY WEATHER</h2>
      </div>
      <div className="days">
        {time.map((day, i) => i > 0
        && (
        <DayCard key={day}>
          <pre>
            <h2>{ dayGet(day).name.toUpperCase() }</h2>
            <h3>{ dayGet(day).number }</h3>
          </pre>
          <div className="weather-state">
            <p className="w-state">
              {weatherState[weathercode[i]]}
            </p>
            <img className="weatherIcon" src={forecastIcons[weathercode[i]]} alt="" />
            <MinMax minTemp={temperature_2m_min[i]} maxTemp={temperature_2m_max[i]} />
          </div>
        </DayCard>
      ))}
      </div>
    </DayCardContainer>
  );
}
