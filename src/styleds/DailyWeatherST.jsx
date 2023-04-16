import styled from "styled-components";

export const DayCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: .5rem;
  margin: .5rem;
  gap: .5rem;
flex-wrap: wrap;
> div{
  -ms-wrap-flow: both;
}
> h2{
  padding: 0%.5rem;
}
@media (max-width: 500px) {
  flex-direction: column;
}  
`;

export const DayCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin:.5rem;
  margin-bottom: 8px;
  background-color: #ffffff37;
  border-radius: 4px;
  backdrop-filter: blur(4px);
  width: 150px;
  height:220px;
  box-shadow: inset 0 0 12px #fff, 0 0 12px #0000003e;
  aspect-ratio: 4/5;
  transition: transform .7s;
  &:hover {
    transform: scale(1.05);
    box-shadow: inset 0 0 12px #fff, 0 4px 12px #0000003e;
  }

 & header {
    font-size: 12px;
    width: 100%;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
    background-color: #0b4f83ed;
    border-radius: 5px 5px 0 0;
    padding: .2rem .5rem;
    > h2{
      color: #cedffb;
    }
  }

 & img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }

  & p {
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    margin: 2px;
    padding: 2px;
    color: #233660;
  }

  .w-state { font-size: 12px; }

  .min{ color: #d2082a }
  .max{ color: #11e42a }
  &  footer {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
    background-color: #00000071;
    border-radius: 4px;
  }
  @media (max-width: 500px) {
    width:90% ;
  }
`;