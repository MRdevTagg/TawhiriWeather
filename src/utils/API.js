/// URLS

export const weatherAPI = 'https://api.open-meteo.com/v1/forecast';
export const locationByNameAPI = (query) => `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=1&language=en&format=json`
export const locationByIpAPI = `http://ip-api.com/json/`

/// PARAMS
export const weatherParams = {
  current_weather: true,
  timezone: "auto",
  daily: ["temperature_2m_max", "temperature_2m_min", "weathercode",'precipitation_probability_mean','apparent_temperature_max'],
  forecast_days: "15",
  hourly:['temperature_2m','precipitation_probability','apparent_temperature'],
}
export const locationByNameParams = {
	count: '1',
	language: "en",
	format: "json",
}


// Utility Function to build a url with params
export function buildURL( baseUrl, params, extraParams = null) {
  const updatedParams = {
    ...extraParams,
    ...params,
  };
  const url = `${baseUrl}?${new URLSearchParams(updatedParams).toString()}`;
  return url;
}