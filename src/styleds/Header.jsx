import styled from "styled-components";

export const Header = styled.header`

	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: .5rem;
	font-size: 1.2rem;
	font-weight: bold;
	color: #e4f9fb;
	box-shadow: inset 0 0 19px #e4f9fb5b, 0 0 19px #0000005b;
	backdrop-filter: blur(4px);
  margin: 0;
	height:80px;
	background-image: linear-gradient(to left, #c6e3ff85,#d0f1ff1a 80%);
	width: 100%;
	>.logo-container{
	display: flex;
	z-index: 99999;
	height: inherit;

	>.logo{
		padding: 0;
		height: 70px;
	}
	>img{
	
		object-fit: contain;
	}
}
	>div{
	>input{
		padding: .5rem;
		border: none;
		outline:none;
		border-radius: 15px;
		width: 100%;
		height: fit-content;
		background: #ffffffdc;

	}
	display:flex;
	gap:10px;
	>button{
		transition: transform .6s;
box-shadow: inset 0 0 10px #ffffff16;
		border-radius:100%;
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