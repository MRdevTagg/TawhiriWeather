import styled from "styled-components";

export const CurrentWeather = styled.div`
	display: flex;
	flex-direction: column;
	height: fit-content;
	padding:1.5rem;

	& header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem;
		margin: 0.5rem;
		font-size: 1.5rem;

	}
	> div{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: fit-content;
		gap: 21px;
		padding: 0.5rem;
		margin: 0.5rem;
		font-size: 1.5rem;
	}

`