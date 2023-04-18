import styled from "styled-components";
import { weatherState, forecastIcons } from "../utils/weatherUtils";
import MinMax from "../utils/MinMax";
import LocationDisplay from "../utils/LocationDisplay";

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	height: 100%;
	padding: 0 12px 12px;
	@media (min-width: 800) {
	 margin-bottom: 5px;
	}
`
export const StyledCurrentWeather = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	height: fit-content;
	width: 100%;
	padding: 0 10px 10px ;
	color: #ffffff;
	
	border-radius: 12px;
	box-shadow: 0 5px 12px #0000003b, inset 0 0 20px #fff7;
	background-color: #27528d1c;
	>.header{
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	background-color: #ffffffce;
	padding: 5px;
	
	margin-bottom: 10px;
	>h1{
		font-size: 1.5rem;
		padding: 0 10px;
		color:#27528d;
	}
	> .country{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		justify-self: flex-start;
		width: fit-content;
		gap: 21px;
		padding: 0.5rem .8rem;
		
		font-size: 1.2rem;
		background-color: #324777bb;	
		border-radius: 12px;
		>.flag{
			width: 40px;
		}
	}

}
> .forecast{
	display: flex;
	gap: 12px;
	font-size: 1rem;
	font-weight: lighter;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	height: 100%;
	color: #27528d;
	padding: .5rem;
	border-radius: 12px;
	text-align: left;
	background-color: #ffffff92;
		>.forecast-left{
		display: flex;
		background-color: #ffffff53;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding:.5rem;
		width: 200px;
		border-radius: 5px;
		> .forecast-icon{
			width: 100px;
			aspect-ratio: 1 / 1;
			object-fit: contain;
			border-radius: 10px;
			padding: .8rem;
		}
	}
	>.forecast-right{
		display: flex;
		flex-direction: column;
		padding:.5rem;
	}
}
`;
export function CurrentWeather({ weather, location }) {
	const { weathercode, temperature, winddirection } = weather.current_weather;
	const { precipitation_probability_mean, temperature_2m_min, temperature_2m_max }= weather.daily;	
	return (
	<StyledContainer>

		<StyledCurrentWeather>
				<LocationDisplay location={location}/>
			<div className="header">
				<h1> CURRENT WEATHER</h1>
			</div>	
			<div className="forecast">
				<div className="forecast-left">
				<img className="forecast-icon" src={ forecastIcons[weathercode] } alt="" />
				<MinMax minTemp={temperature_2m_min[0]} maxTemp={temperature_2m_max[0]} />

				</div>
				<div className="forecast-right">
					<p> <b>Forecast:</b> { weatherState[weathercode] }</p>
					<p> <b>Wind direction:</b> {winddirection}kmh</p>
					<p> <b>Temperature:</b> { temperature } &deg;C</p>
					<p> <b>Precipitation probability:</b> { precipitation_probability_mean[0] }%</p>
				</div>
			</div>
		</StyledCurrentWeather>
	</StyledContainer>	
);
}