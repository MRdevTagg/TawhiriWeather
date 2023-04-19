/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import styled from 'styled-components';
import { weatherState, forecastIcons } from '../utils/weatherUtils';
import MinMax from './MinMax';
import { LocationDisplay } from './LocationDisplay';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	height: 100%;
	padding: 0 12px 12px;
	>*{ overflow:hidden; }
`;
export const StyledCurrentWeather = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	height: fit-content;
	width: 100%;
	padding: 10px 10px ;
	color: #ffffff;
	gap: .5rem;
	border-radius: 12px;
	box-shadow: 0 5px 12px #0000003b, inset 0 0 20px #fff7;
	background-color: #27528d25;
	> .title{
 
 width: 100%;
 align-self: flex-start;
 min-height: 3rem;
 background-color: #27528dac;
 border-radius: 12px 12px 0 0; 
 >h1{
	 font-size: 1.5rem;
	 color: #daeeff;
	 padding: .5rem 1rem;
 }

}
> .forecast{
	display: flex;
	gap: 12px;
	font-size: 1rem;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	height: 100%;
	color: #27528d;
	padding: .5rem;
	border-radius: 0 0 12px 15px;
	text-align: left;
	background-color: #ffffff92;
		>.forecast-left{
		display: flex;
		background-color: #03488514;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding:.5rem;
		width: 200px;
		border-radius: 5px;
		@media (max-width: 900px) {
				 width: fit-content;
		}
		> .forecast-icon{
			width: 100%;
			aspect-ratio: 1 / 1;
			object-fit: contain;
			border-radius: 10px;
		
		}
	}
	>.forecast-right{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: space-between;
		width: 100%;
		height: 100%;
		font-weight: 600;
		
		>p{
			font-size: 1rem;
			border: 1px solid #27528d79;
			padding: .4rem;
			border-radius: .5rem;
			margin-bottom: .5rem;
			@media (max-width: 360px) {
			font-size: .8rem;
			}
		}
	}
}
`;
/* eslint-disable react/jsx-one-expression-per-line */
export function CurrentWeather({ weather, location }) {
	const { weathercode, temperature, winddirection } = weather.current_weather;
	const { precipitation_probability_mean, temperature_2m_min, temperature_2m_max } = weather.daily;
	return (
  <StyledContainer>
    <LocationDisplay location={location} />
    <StyledCurrentWeather>
      <div className="title">
        <h1> CURRENT WEATHER</h1>
      </div>
      <div className="forecast">
        <div className="forecast-left">
          <img className="forecast-icon" src={forecastIcons[weathercode]} alt="weatherIcon" />
          <MinMax minTemp={temperature_2m_min[0]} maxTemp={temperature_2m_max[0]} />
        </div>
        <div className="forecast-right">
          <p> Forecast: { weatherState[weathercode] }</p>
          <p> Wind speed: {winddirection}kmh</p>
          <p> Temperature: { temperature } &deg;C</p>
          <p> Precipitation: { precipitation_probability_mean[0] }%</p>
        </div>
      </div>
    </StyledCurrentWeather>
  </StyledContainer>
);
}
