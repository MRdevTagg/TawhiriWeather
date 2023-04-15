import styled from "styled-components";

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: .5rem;
	font-size: 1.2rem;
	font-weight: bold;
	color: #e4f9fb;
	background-image:linear-gradient(to right, #0b4f83a2 50%, #072f4eeb );
	box-shadow: inset 0 0 19px #e4f9fb5b, 0 0 19px #0000005b;
	backdrop-filter: blur(4px);
  margin: 0;
	height:80px;

	
	>div{
	>input{
		padding: .5rem;
		border: none;
		outline:none;
		border-radius: 15px;
		height: fit-content;
		background: #e4f9fb82;

	}
	display:flex;
	gap:10px;
	>button{
		transition: transform .6s;

		border-radius:100%;
		border: 1px solid #458cb8;
		aspect-ratio: 1 / 1;
		&:hover{
			transform: scale(1.05);
		}
	>img{
			width: 30px;
			aspect-ratio: 1 / 1;
	}
	}
}
`