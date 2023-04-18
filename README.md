# Tawhiri Weather 
*A weather app built with React-Vite and styled-components. It allows users to get weather information for their current location or any location they search for.*

### Installation
To Run the App, follow these steps:
1. Clone the repository
2. Navigate to the project directory
3. Install dependencies: npm install
4. Start the app: npm run dev

### Features
- Fetches weather data from the OpenMeteo API.
- Detects the user's location by IP address or allows the user to search for a location by name.
- Displays the current temperature, weather conditions, and a weather icon for the selected location.
- hows the daily weather forecast for the next 15 days, including the minimum and maximum temperature, and weather conditions.
- Allows the user to:
					- refresh the weather data 
					- search for a new location
					- go back to currrent location
- Updates the data at intervals of ten minutes
- Responsive design optimized for desktop and mobile devices


### APIs

**OpenMeteo** - provides weather forecast data
**Geocoding API** - provides location data by name
**IP-API** - provides location data by IP address

### Technologies
- ReactJS, 
- styled-components, 
- postman (to visualize the data), 
- eslint (to keep code clean)
- Responsively (to test the app in diferent devices)
- Adobe Illustrator ( to build the logo and icons )

## COMPONENTS
### Tawhiri Component
This is the main component of the Tawhiri weather app. It fetches weather and location data using the useFetchData hook and then renders the Header, CurrentWeather, and DailyWeather components. The component also sets up an interval to reload the weather data every 5 minutes.

#### Props
None.

#### State
- **reload (Boolean):** Indicates whether the weather data needs to be reloaded or not.
- **query (String):** Specifies the location for which the weather data needs to be fetched.
- **inputValue (String):** Stores the value entered in the search bar.
#### Methods
- **onReload():** Toggles the reload state variable to reload the weather data.
- **onQuery():** Sets the query state variable to fetch the weather data for a new location.
- **onQueryLocation():** Sets the query state variable to null to fetch the weather data for the user's current location.
#### Hooks
- **useFetchData(reload, query):** Fetches the weather and location data from the server based on the reload and query state variables.
#### Dependencies
- **Header: Renders** the search bar and location information.
- **CurrentWeather:** Displays the current weather information.
- **DailyWeather:** Displays the daily weather forecast.
- **ErrorWindow:** Renders an error message in case of an error.
- **MainSection:** Renders a styled main section for the app.


### Header Component
The Header component displays the application header, which contains the 
TAWHIRI WEATHER logo and various buttons for searching and refreshing the weather data.
#### Props
- **onReload:** A function that is called when the "Refresh" button is clicked.
- **onQuery:** A function that is called when the "Search by City" button is clicked.
- **onQueryLoacation:** A function that is called when the "Search by Location" button is clicked.
- **setInputValue:** A function that is used to set the input value when the user types in the search box.
- **inputValue:** The current value of the search box input.

### CurrentWeather Component
The CurrentWeather component displays the current weather information for a given location. It takes two props: weather and location.

#### Props
- **weather:** An object that contains the current weather information for a location. It has the following 
- **location:** A string that represents the name of the location.

#### Implementation Details:
The CurrentWeather component makes use of the following functions from utils.js (see below):

- **dayGet(string):** A function that takes a string in the format "YYYY-MM-DD" and returns an object with the following properties:
- **forecastIcons:** An object that maps weather codes to their respective icon URLs.  

**The CurrentWeather component renders the following information:**

- Location name using the LocationDisplay component
- Current weather title "CURR**ENT WEATHER"
- Forecast icon and Min/Max temperature for the day using the MinMax component
- Forecast details:
- Weather forecast description from weatherState object
- Wind direction and speed
- Current temperature in Celsius
- Precipitation probability from the weather prop

### DailyWeather component:
The DailyWeather component displays daily weather information based on the weather prop it receives. It is composed of multiple instances of the DayCard component, each displaying weather information for a single day.

#### Props
- weather: is an object containing daily weather information. 

#### Dependencies
- MinMax: A component that displays the minimum and maximum temperatures for a given day.
- dayGet: A utility function that returns an object containing the name and number of a given day of the week.
- weatherState: An object that maps weather codes to human-readable weather states.
- forecastIcons: An object that maps weather codes to corresponding weather icons.

### useFetchData
This is a custom hook that fetches weather and location data based on a user's location either by IP address or a query string. The hook uses React's useState and useEffect hooks to manage state and side effects respectively.

The useFetchData hook accepts two parameters: reload and query. reload is a boolean that, when changes, triggers a refetch of the data. query is a string that contains a location query to search for a specific location.

When useFetchData is called, it initializes three pieces of state: weather, location, and error. weather and location are objects that contain the weather and location data respectively, while error is a string that contains any error messages.

The hook then defines an async function named fetchData, which is responsible for fetching the data from various APIs. The function first checks if a query string is provided, and if it is, it fetches location data based on the query using locationByNameAPI. If no query string is provided, it fetches location data based on the user's IP address using locationByIpAPI.

Once the location data is fetched, the hook filters the data and sets it to the location state using setLocation. The filtered data includes the location's timezone, latitude, longitude, country, city, flag, and countryCode.

The hook then proceeds to fetch weather data based on the latitude and longitude of the location data using buildURL, weatherAPI, and weatherParams. Once the weather data is fetched, it sets the weather state to the fetched data using setWeather.

If any errors occur during the data fetching process, they are caught and set to the error state using setError.
Finally, the useEffect hook is used to trigger the fetchData function when reload or query changes.


### API.js
- **weatherAPI**: A constant that holds the URL for the OpenMeteo weather API.

- **locationByNameAPI(query)**: A function that takes a query string as an argum- ent and returns a URL for the OpenMeteo geocoding API that searches for a location by name. The URL includes the query string and some additional parameters to limit the search results to one and to format the response as JSON.

- **locationByIpAPI**: A constant that holds the URL for the ip-api.com API that retrieves location data based on the client's IP address.

- **weatherParams**: A constant object that holds various parameters to be used in the OpenMeteo weather API request. It includes current weather data, daily and hourly forecasts, and some weather-related data points.

- **locationByNameParams**: A constant object that holds parameters to be used in the OpenMeteo geocoding API request. It includes the count of search results to be returned, language and format of the response.

- **buildURL(baseUrl, params, extraParams = null)**: A utility function that takes a base URL and a set of parameters as arguments and returns a complete URL with the parameters included as query string parameters. The function also accepts an optional third argument extraParams to add any additional parameters to the URL. The function uses the URLSearchParams API to create the query string parameters.


### utils.js
The utils.js file contains helper functions and objects for working with weather data. Here is a brief summary of each function:

- **dayGet**: This function takes a date string in the format YYYY-MM-DD and returns an object with the name of the day of the week and the day of the month as properties.
- **accuIconsURL**: This function takes an optional icon code as a string and returns the URL for the corresponding AccuWeather icon.
- **weatherState**: This object maps weather codes to descriptive strings for use in the UI.
- **forecastIcons**: This object maps weather codes to URLs for the corresponding AccuWeather icons for use in the UI.




**PENDINGS:**
- display also hourly forecasts 
- svg graphic curve
- put more details in the forecasts
- write the automated tests