import { useEffect, useState } from 'react';
import useFetchData from './hooks/useFetchData';
import {
 Header, DailyWeather, CurrentWeather, ErrorWindow, MainSection,
} from './components';

function Tawhiri() {
  const [reload, setReload] = useState(true);
  const [query, setQuery] = useState('');
  const { weather, location, error } = useFetchData(reload, query);
  const [inputValue, setInputValue] = useState('');

  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    setIntervalId(
      setInterval(() => {
        setReload((prevReload) => !prevReload);
      }, 300000),
    );
  }, [query]);

 const onReload = () => {
  setReload((prevState) => !prevState);
 };
 const onQuery = () => {
   setQuery(inputValue);
 };
 const onQueryLoacation = () => {
    setQuery(null);
 };

  return (
    <>
      { location && (
      <Header
        weather={weather}
        style={{ overflow: 'hidden', top: '0' }}
        onQuery={onQuery}
        onReload={onReload}
        onQueryLoacation={onQueryLoacation}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
)}
      {error && !query && <ErrorWindow />}
      <MainSection>
        { weather && weather.current_weather
        && <CurrentWeather weather={weather} location={location} /> }
        { weather && weather.daily && <DailyWeather weather={weather} /> }
      </MainSection>
    </>
  );
}

export default Tawhiri;
