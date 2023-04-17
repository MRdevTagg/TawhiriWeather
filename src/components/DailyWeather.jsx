import { accuIconsURL, dayName, weatherState, forecastIcons } from "../utils/weatherUtils";
import styled from "styled-components";

export const DayCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: .5rem;
  margin: .5rem;
  width: 450px;
  gap: .5rem;
  border-radius: 12px;
  box-shadow:inset 0 0 6px #ffffffc0, 0 0 12px #00000033;
  background-color: #ffffff63;
  backdrop-filter: blur(2px);
::-webkit-scrollbar{
  width: 0
}

> .title{
  width: 100%;
  padding: .5rem 1rem;
  align-self: flex-start;
  
  font-size: 1.5rem;
  background-color: #27528dc7;
  border-radius: 12px 12px 0 0; 
  color: #daeeff;
}@media (max-width: 500px) {
     width: 95%;
} 
`;

export const DayCard = styled.div`
overflow-y: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin:.5rem;
  margin-bottom: 8px;
  background-color: #ffffff4d;
  border-radius: 4px;
  backdrop-filter: blur(4px);
  max-width: 100%;
 width: 400px;
  height:120px;
  box-shadow: inset 0 0 6px #ffffffc0, 0 0 12px #0000003e;
  aspect-ratio: 4/5;
  transition: box-shadow 7s, transform .7s;
  &:hover {
    transform: scale(1.05);
    box-shadow: inset 0 0 12px #fff, 0 4px 12px #0000003e;
  }

  & header {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    font-weight: bold;
    height: 100%;
    width: 130px;
    text-align: center;
    border-radius: 5px 5px 0 0;
    padding: 0;
    > h2{
      color: #cedffb;
      padding: .2rem .4rem;
      border-radius: 5px;  
      background-color: #0b4f83b3;
    } 
    > .w-state { 
      text-align: left;
    font-size: 15px; 
    
  }
  }

  & img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
    object-fit: contain;
  }

  & p {
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    margin: 2px;
    padding: 2px;
    color: #003771;
  }
.weather-state{
  display: flex;
  place-content: center;
}
  .min,.max{
     display:flex; 
     padding: 0;
     >img{
      width: 40px;
      height: 40px;
      object-fit: contain;
      margin: 0;
      padding: 0;
    }
    }
  >.minmax{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 >div{
  display:flex;
  justify-content: center;
  align-items: center;
 
    > p{
    font-size: 20px;
    padding: 0;
    margin: 0;
   }}
  }

`;

export const DailyWeather = ({weather}) => {
  const { weathercode, temperature_2m_min, temperature_2m_max, time } = weather.daily;
  return (     

  <DayCardContainer>
    <h2 className="title">DAILY WEATHER</h2>
    {time.map((day, i) => 
  
    <DayCard key={day}>
      <header> 
        <h2>{ dayName(day).toUpperCase() }</h2> 
        <p className="w-state">{weatherState[weathercode[i]].split(':')[0]}:<br/>{weatherState[weathercode[i]].split(':')[1]}</p>
      </header>
      <div className="weather-state">
        <img className="weatherIcon" src={forecastIcons[weathercode[i]]}alt="" />
      </div>
      <div className='minmax'>
        <div className="min"> <img src={accuIconsURL('31')} alt="min" /> <p> &deg;{temperature_2m_min[i]} </p></div>
        <div className="max"> <img src={accuIconsURL('30')} alt="max" /> <p> &deg;{temperature_2m_max[i]} </p></div>
      </div>
    </DayCard>)}
  </DayCardContainer>
);

}

