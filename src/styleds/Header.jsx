import styled from "styled-components";

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: .5rem;
	font-size: 1.2rem;
	font-weight: bold;
	color: #e4f9fb;
	background-color: #0b4f83a2;
	box-shadow: inset 0 0 19px #e4f9fb5b, 0 0 19px #0000005b;
	backdrop-filter: blur(4px);
  margin: 0;
	height:80px;

	&input{
		border: none;
		outline:none;
		border-radius: 15px;
		background: #e4f9fb82;
	}
`