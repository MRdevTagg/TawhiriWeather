import styled from 'styled-components';
import { accuIconsURL } from '../utils/weatherUtils';
/* eslint-disable react/prop-types */
const MinMaxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
	.min,.max{
     display:flex; 
     align-items: center;
     justify-content: center;
     gap: .2rem;
     padding: 0;
     >img{
      width: 40px;
      height: 40px;
      object-fit: contain;
    }
    > p{
    font-size: 20px;
    }
  }
`;

function MinMax({ minTemp, maxTemp }) {
return (
  <MinMaxContainer>
    <div className="min">
      <p>&deg;{minTemp}</p>
      <img src={accuIconsURL('31')} alt="min" /> 
    </div>
    <div className="max">
      <p>&deg;{maxTemp}</p>
      <img src={accuIconsURL('30')} alt="max" />
    </div>
  </MinMaxContainer>
);
}

export default MinMax;
