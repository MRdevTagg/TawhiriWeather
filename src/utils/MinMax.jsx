import styled from 'styled-components';
import { accuIconsURL } from './weatherUtils';


const MinMaxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
	.min,.max{
     display:flex; 
     padding: 0;
     >img{
      width: 40px;
      height: 40px;
      object-fit: contain;
      margin: 0;
      padding: 0;
    }
    }
 >div{
  	display:flex;
  	justify-content: center;
  	align-items: center;
    > p{
    font-size: 20px;
    padding: 0;
    margin: 0;
   }}
`;

function MinMax({ minTemp, maxTemp }) {

  return (
    <MinMaxContainer>
			<div className="min"> <img src={accuIconsURL('31')} alt="min" /> <p> &deg;{minTemp} </p></div>
      <div className="max"> <img src={accuIconsURL('30')} alt="max" /> <p> &deg;{maxTemp} </p></div>
    </MinMaxContainer>
  );
}

export default MinMax;
