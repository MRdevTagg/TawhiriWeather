import { useState } from "react";
import { useFetchData } from "./hooks";
import { Header, DailyWeather, CurrentWeather } from "./components";
import styled from "styled-components";
import { ErrorWindow } from "./utils/ErrorWindow";



const MainSection = styled.section`
display: flex;
justify-content: space-between;
margin-top: 20px;
height: 100%;
overflow: hidden;
gap: 1rem;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        margin-top: 80px;
    }
`;


function Tawhiri() {
  const [ reload, setReload ] = useState(true);
  const [ query, setQuery ] = useState('');
  const { weather, location, error } = useFetchData(reload,query);
  const [ inputValue, setInputValue ] = useState('');
 const onReload = () =>{
  setReload(prevState => !prevState);
 }
 const onQuery = () =>{
   setQuery(inputValue);
 }
 const onQueryLoacation = ()=>{
    setQuery(null)
 }
  return (
    <>
    {error && <ErrorWindow/>}
      { location && <Header 
            weather={weather}
            style={{overflow:'hidden',top:'0'}} 
            onQuery={onQuery}  
            onReload={onReload}  
            onQueryLoacation={onQueryLoacation}
            inputValue={inputValue}
            setInputValue={setInputValue}/> 
      }

      <MainSection>
      { weather && weather.current_weather && <CurrentWeather weather={weather} location={location}/> }          
      { weather && weather.daily && <DailyWeather weather={weather} /> }
      </MainSection>
    </>
  );
}

export default Tawhiri;


