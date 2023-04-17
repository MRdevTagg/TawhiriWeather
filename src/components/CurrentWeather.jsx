import styled from "styled-components";
import { weatherState, forecastIcons, accuIconsURL } from "../utils/weatherUtils";
export const StyledCurrentWeather = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	height: fit-content;
	padding:1.5rem;
	color: #27528D;
	& header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem;
		margin: 0.5rem;
		font-size: 1.5rem;
		height: 100%;

	}
	> div.country{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: fit-content;
		gap: 21px;
		padding: 0.5rem;
		margin: 0.5rem;
		font-size: 1.5rem;	
	}
	>img{
		width: 150px;
		padding: 40px;
	}
`;
export function CurrentWeather({ weather, location }) {
	const { weathercode, temperature } = weather.current_weather;
	const { country, city, flag } = location;
	return (
		<StyledCurrentWeather>
			<div className="country">
				<img src={ flag } alt={ country } />
				<p>{`${ country } / ${ city }`}</p>
			</div>
			<img src={ forecastIcons[weathercode] } alt="" />
			<p> Forecast: { weatherState[weathercode] }</p>
			<p> Temperature: { temperature } &deg;C</p>
			<p> Precipitation probability: {weather.daily.precipitation_probability_mean[0]}%</p>
		</StyledCurrentWeather>);

}