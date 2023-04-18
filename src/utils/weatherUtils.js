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
  0: accuIconsURL('01'),
  1: accuIconsURL('02'),
  2: accuIconsURL('08'),
  3: accuIconsURL('11'),
  45: accuIconsURL('11'),
  48: accuIconsURL('12'),
  51: accuIconsURL('12'),
  53: accuIconsURL('12'),
  55: accuIconsURL('12'),
  56: accuIconsURL('12'),
  57: accuIconsURL('12'),
  61: accuIconsURL('18'),
  63: accuIconsURL('18'),
  65: accuIconsURL('18'),
  66: accuIconsURL('26'),
  67: accuIconsURL('26'),
  71: accuIconsURL('22'),
  73: accuIconsURL('22'),
  75: accuIconsURL('22'),
  77: accuIconsURL('22'),
  80: accuIconsURL('12'),
  81: accuIconsURL('12'),
  82: accuIconsURL('12'),
  85: accuIconsURL('22'),
  86: accuIconsURL('22'),
  95: accuIconsURL('15'),
  96: accuIconsURL('15'),
  99: accuIconsURL('15'),
};
