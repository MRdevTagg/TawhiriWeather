import { useState, useEffect } from "react";

export function useFetchData(reload,query) {
  const [weather, setWeather] = useState({});
  const [search, setSearch] = useState(query || '')
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
			  let filteredUserData = {
          lat: userData.lat || userData.latitude ,
          lon: userData.lon || userData.longitude,
          country: userData.country,
          city: userData.city || userData.name || '',
					flag : `https://flagsapi.com/${userData.countryCode || userData.country_code}/shiny/64.png` || '',
          countryCode: userData.countryCode || userData.country_code,
        };
        console.log(userData);
        const getWeather = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${filteredUserData.lat}&longitude=${filteredUserData.lon}&current_weather=true&timezone=auto&daily=temperature_2m_max&daily=temperature_2m_min&daily=weathercode`
        );
				const weather = await getWeather.json();
        console.log('fetched weather');

        setLocation(filteredUserData);
        setWeather(weather);
        console.log(userData.countryCode);
      
      } catch (err) {
        setError(err);
      }
    };
    
    fetchData();
		setSearch('')
  }, [reload,query]);

  return { weather, location, error };
};


