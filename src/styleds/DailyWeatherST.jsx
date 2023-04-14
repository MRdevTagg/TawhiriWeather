import styled from "styled-components";

export const DayCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: .5rem;
  margin: .5rem;
  gap: .5rem;
@media (max-width: 400px) {
  flex-direction: column;
}  
`;

export const DayCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin-bottom: 8px;
  background-color: #ffffff2e;
  border-radius: 4px;
  backdrop-filter: blur(2px);
  box-shadow: inset 0 0 12px #fff, 0 0 12px #0000003e;
  width: 14.28571428571429%;
  aspect-ratio: 4/5;
`;