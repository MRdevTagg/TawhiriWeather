/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Clock from './Clock';

const CountryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-self: flex-start;
  min-width: 100%;
  width: fit-content;
  height: fit-content;
  gap: 21px;
  padding: 0.5rem 0.8rem;
  font-size: 1rem;
  margin: 10px 0;
  background-color: #324777bb;
  border-radius: 12px;
  box-shadow:  0 0 5px #00000044, inset 0 0 10px #fff4;
  color: white;
  > .flag {
    width: 40px;
  }
`;

export function LocationDisplay({ location }) {
  const {
    country, city, flag, timezone,
  } = location;
  return (
    <CountryContainer>
      <img className="flag" src={flag} alt={country} />
      <p>{`${country} / ${city}`}</p>
      <Clock timezone={timezone} />
    </CountryContainer>
  );
}

export default LocationDisplay;
