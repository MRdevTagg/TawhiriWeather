/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const ErrorWindowContainer = styled.div`
	position: absolute;
	width:100vw;
	height:100vh;
	display:flex;
	padding: 3rem;
	flex-direction: column;
	justify-content:center;
	align-items:center;
	color: #27528dbe;
	background-color: #ffffff3e;
	backdrop-filter: blur(8px);
	z-index: 999;
	>img{
		width: 30%;
		object-fit: contain;
	}
>h1{
	text-align: center;
	height: fit-content;
	overflow: hidden;
}
>h3{
	font-weight: 600;
}
`;

export function ErrorWindow() {
	return (
  <ErrorWindowContainer>
    <img src="/assets/tawhiri-logo.svg" alt="Tawhiri" />
    <img src="/assets/tawhiri-iso.svg" alt="Tawhiri" />
    <h1> We have and issue fetching the data </h1>
    <hr />
    <h3> - Check if you granted permission to access your location</h3>
    <hr />
    <h3> - If you don&#39;t want to grant the permission search by your city name</h3>
    <hr />
    <h3> - Otherwise check your internet connection and reload the page</h3>
  </ErrorWindowContainer>
	);
}
