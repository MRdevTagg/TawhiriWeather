// util function to get formated day name or date number
export const dayGet = (string) => {
  const date = new Date(string);
  const options = { weekday: 'long', timeZone: 'UTC' };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  const dayOfWeek = formatter.format(date);
  const dayNumber = string.split('-');
  return {
    name: dayOfWeek,
    number: `${dayNumber[1]}/${dayNumber[2]}`,
  };
};

// shorcut to get icons from accuWeather
export const accuIconsURL = (icon = '01') => `https://developer.accuweather.com/sites/default/files/${icon}-s.png`;

// objects to handle weathercode cases
export const weatherState = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog and depositing rime fog',
  48: 'Fog and depositing rime fog',
  51: 'Drizzle: Light intensity',
  53: 'Drizzle: Moderate intensity',
  55: 'Drizzle: Dense intensity',
  56: 'Freezing Drizzle: Light intensity',
  57: 'Freezing Drizzle: Dense intensity',
  61: 'Rain: Slight intensity',
  63: 'Rain: Moderate intensity',
  65: 'Rain: Heavy intensity',
  66: 'Freezing Rain: Light intensity',
  67: 'Freezing Rain: Heavy intensity',
  71: 'Snow fall: Slight intensity',
  73: 'Snow fall: Moderate intensity',
  75: 'Snow fall: Heavy intensity',
  77: 'Snow grains',
  80: 'Rain showers: Slight intensity',
  81: 'Rain showers: Moderate intensity',
  82: 'Rain showers: Violent intensity',
  85: 'Snow showers: Slight intensity',
  86: 'Snow showers: Heavy intensity',
  95: 'Thunderstorm: Slight or moderate',
  96: 'Thunderstorm with slight hail',
  99: 'Thunderstorm with heavy hail',
};
export const forecastIcons = {
  0: '/assets/clear-day.svg',
  1: '/assets/overcast-day.svg',
  2: '/assets/partly-cloudy-day.svg',
  3: '/assets/overcast.svg',
  45: '/assets/partly-cloudy-day-fog.svg',
  48: '/assets/partly-cloudy-day-fog.svg',
  51: '/assets/partly-cloudy-day-drizzle.svg',
  53: '/assets/partly-cloudy-day-drizzle.svg',
  55: '/assets/drizzle.svg',
  56: '/assets/drizzle.svg',
  57: '/assets/drizzle.svg',
  61: '/assets/partly-cloudy-day-rain.svg',
  63: '/assets/rain.svg',
  65: '/assets/rain.svg',
  66: '/assets/partly-cloudy-day-sleet.svg',
  67: '/assets/sleet.svg',
  71: '/assets/partly-cloudy-day-snow.svg',
  73: '/assets/snow.svg',
  75: '/assets/snow.svg',
  77: '/assets/hail.svg',
  80: '/assets/rain.svg',
  81: '/assets/rain.svg',
  82: '/assets/rain.svg',
  85: '/assets/rain.svg',
  86: '/assets/rain.svg',
  95: '/assets/thunderstorms.svg',
  96: '/assets/thunderstorms.svg',
  99: '/assets/thunderstorms.svg',
};
