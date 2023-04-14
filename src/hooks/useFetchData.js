import { useState, useEffect } from "react";

export function useFetchData(reload) {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getUserData = await fetch(
          `http://ip-api.com/json/`
        );
        const userData = await getUserData.json();
			  const filteredUserData = {
          lat: userData.latitude,
          lon: userData.longitude,
          country: userData.country,
          city: userData.city,
					flag : `https://flagsapi.com/${userData.countryCode}/shiny/32.png`,
          countryCode: userData.countryCode,
        };
        console.log('fetched userdata');
        const getWeather = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${userData.lat}&longitude=${userData.lon}&current_weather=true&timezone=auto&daily=temperature_2m_max&daily=temperature_2m_min&daily=weathercode`
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
		
  }, [reload]);

  return { weather, location, error };
};


