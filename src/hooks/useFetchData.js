import { useState, useEffect } from "react";
const weatherParams = {
  current_weather: true,
  timezone: "auto",
  daily: ["temperature_2m_max", "temperature_2m_min", "weathercode",'precipitation_probability_mean','apparent_temperature_max'],
  forecast_days: "15",
  hourly:['temperature_2m','precipitation_probability','apparent_temperature'],
}
const weatherAPI = 'https://api.open-meteo.com/v1/forecast';

function buildURL( baseUrl, params, location ) {
  const updatedParams = {
    ...location,
    ...params,
  };
  const url = `${baseUrl}?${new URLSearchParams(updatedParams).toString()}`;
  return url;
}


export function useFetchData( reload, query) {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({});
  const [error, setError] = useState("");
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        let userData;
        if (query) {
          const getUserData = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=1&language=en&format=json`
          );
          let data = await getUserData.json();
          userData = data.results[0]
        } else {
          const getUserData = await fetch(`http://ip-api.com/json/`);
          userData = await getUserData.json();
        }
			  const filteredUserData = {
          latitude: userData.lat || userData.latitude ,
          longitude: userData.lon || userData.longitude,
          country: userData.country || userData.country_name,
          city: userData.city || userData.name,
					flag : `https://flagsapi.com/${userData.countryCode || userData.country_code}/shiny/64.png` || '',
          countryCode: userData.country_code || userData.countryCode,
        }
        const { latitude, longitude } = filteredUserData
        const getWeather = await fetch( buildURL( weatherAPI, weatherParams, {latitude, longitude} ) );
				const weather = await getWeather.json();
        
        setLocation(filteredUserData);
        setWeather(weather);
      
      } 
      catch (err) {
        setError(err);
      }
    };    
    fetchData();

  }, [reload,query]);

  return { weather, location, error };
};


