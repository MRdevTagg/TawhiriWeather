import styled from "styled-components"

const ErrorWindowContainer = styled.div`
position: absolute;
	width:100vw;
	height:100vh;
	display:flex;
	flex-direction: column;
	justify-content:center;
	align-items:center;
	color: #27528dbe;
	background-color: #ffffff3e;
	backdrop-filter: blur(8px);
	z-index: 99999;
	>img{
		width: 25%;
		object-fit: contain;
	}
>h1{
	text-align: center;
	height: fit-content;
	overflow: hidden;
}
`;

export const ErrorWindow = () => {
	return (
		<ErrorWindowContainer>
			<img src="../src/assets/tawhiri-logo.svg" alt="Tawhiri"/>
			<img src="../src/assets/tawhiri-iso.svg" alt="Tawhiri"/>
			<h1> We have and issue fetching the data <br /> Check your internet connection and reload the page...  </h1>
		</ErrorWindowContainer>
	)
}
