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
  gap: 21px;
  padding: 0.5rem 0.8rem;
  font-size: 1rem;
	margin: 10px 0;
  background-color: #324777bb;
  border-radius: 12px;
	box-shadow:  0 0 5px #fff4, inset 0 0 10px #0001;
	color: white;
  > .flag {
    width: 40px;
  }
`;

function LocationDisplay({location}) {
	const { country, city, flag, timezone } = location;
  return (
    <CountryContainer>
      <img className="flag" src={flag} alt={country} />
      <p>{`${country} / ${city}`}</p>
      <Clock timezone={timezone} />
    </CountryContainer>
  );
}

export default LocationDisplay;