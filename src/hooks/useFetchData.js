import { useState, useEffect } from 'react';
import {
  buildURL, locationByIpAPI, locationByNameAPI, weatherAPI, weatherParams,
} from '../utils/API';

export default function useFetchData(reload, query) {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({});
  const [error, setError] = useState('');
  const fetchData = async () => {
      try {
        let userData;
        if (query) {
          const getUserData = await fetch(locationByNameAPI(query));
          const data = await getUserData.json();
          [userData] = data.results;
        } else {
          const getUserData = await fetch(locationByIpAPI);
          userData = await getUserData.json();
        }
			  const filteredUserData = {
          timezone: userData.timezone,
          latitude: userData.lat || userData.latitude,
          longitude: userData.lon || userData.longitude,
          country: userData.country || userData.country_name,
          city: userData.city || userData.name,
					flag: `https://www.countryflagicons.com/SHINY/64/${userData.country_code2 || userData.country_code}.png` || '',
          countryCode: userData.country_code || userData.countryCode,
        };
        /* elslint-disable max-len */
        const { latitude, longitude } = filteredUserData;
        const getWeath = await fetch(buildURL(weatherAPI, weatherParams, { latitude, longitude }));
				const weatr = await getWeath.json();

        setLocation(filteredUserData);
        setWeather(weatr);
      } catch (err) {
        setError(err);
      }
  };
  useEffect(() => {
    fetchData();
  }, [reload, query]);

  return { weather, location, error };
}
