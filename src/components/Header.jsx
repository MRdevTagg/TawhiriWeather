import { useRef, useState } from 'react';
import styled from 'styled-components';
/* eslint-disable no-confusing-arrow */
/* eslint-disable react/prop-types */
export const StyledHeader = styled.header`
  overflow: hidden;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: .5rem;
	gap: 10px;
	font-size: 1.2rem;
	font-weight: bold;
	color: #e4f9fb;
	box-shadow: inset 0 0 19px #e4f9fb5b, 0 0 19px #0000002c;
	backdrop-filter: blur(15px);
  margin: 0;
	height:70px;
	background-image: linear-gradient(to left, #c6e3ff85,#d0f1ff1a 80%);
	width: 100%;
	z-index: 9999;
	>*{
		overflow: hidden;
	}

	.logo{
		padding: 0;
		max-height: 60px;
		max-width: 200px;
		width: fit-content;
		object-fit:contain;	
	@media (max-width: 800px) {
			 height: 50px;
			 max-width: 150px;
	}
}
	> .buttons{
		display:flex;
		align-items: center;
		justify-content: space-between;
		gap:10px;
		}
@media ( max-width: 800px ) {
			 position: fixed;
			 height: 60px;
			 gap:5px;
	}
`;
 const Button = styled.button`
			height: 70px;
			width: 70px;
			transition: transform .3s;
			box-shadow: inset 0 0 10px #ffffff16;
			border-radius:100%;
			aspect-ratio: 1 / 1;
			margin: 0;
				&:hover{
				transform: scale(1.1);
			}
			>img{
				width: 40px;
				object-fit: contain;
				aspect-ratio: 1 / 1;
				@media (max-width: 800px) {
			 width: 20px;
			 height: 20px;
	}
			}
			@media (max-width: 800px) {
			 height: 40px;
			 width: 40px;
	}
		
 `;
const InputSearch = styled.form`
	display: flex;
	overflow:hidden;
	align-items: center;
	height: 70px;
	width: ${(props) => props.hidden ? '70px' : '330px'};
	transition: width .5s;
	> input{
			transition: width .5s, opacity .7s, padding 1s, margin .4s;
			padding:${(props) => props.hidden ? '0' : '.5rem'};
			opacity: ${(props) => props.hidden ? '0' : '1'};
			border: none;
			outline:none;
			border-radius: 15px;
			width: ${(props) => props.hidden ? '0' : '250px'};
			height: fit-content;
			background: #ffffff8f;
	}
	@media (max-width: 800px) {
			 height: 50px;
			 width: ${(props) => props.hidden ? '50px' : '200px'};
			 gap: 5px;
	};
`;

export function Header({
	onReload, onQuery, onQueryLoacation, setInputValue, inputValue,
}) {
	const InputValue = useRef();
	const [inputHidden, setinputHidden] = useState(true);
	const [searchbtnClickCount, setSearchbtnClickCount] = useState(1);
	const handleInputChange = () => {
		setInputValue(InputValue.current.value);
	};
	const handleSearchClick = (e) => {
		e.preventDefault();
		if (searchbtnClickCount === 1) {
			setSearchbtnClickCount(2);
			setinputHidden(false);
			InputValue.current.focus();
		} else if (searchbtnClickCount === 2) {
			setSearchbtnClickCount(1);
			setinputHidden(true);
			if (InputValue.current.value.length > 1) onQuery();
			setInputValue('');
		}
	};

	return (
  <StyledHeader>
    <div className="logo-container">
      <img className="logo" src="/assets/tawhiri-logoisohor.svg" alt="TAWHIRI WEATHER" />
    </div>
    <div className="buttons">
      <InputSearch hidden={inputHidden}>
        <Button type="submit" onClick={handleSearchClick}><img src="/assets/search.svg" alt="Search by city" /></Button>
        <input type="text" ref={InputValue} placeholder="Search by City" value={inputValue} onChange={handleInputChange} />
      </InputSearch>
      <Button type="submit" onClick={onQueryLoacation}><img src="/assets/search-location.svg" alt="Search by Location" /></Button>
      <Button type="submit" onClick={onReload}><img src="/assets/refresh.svg" alt="Refresh" /></Button>
    </div>
  </StyledHeader>
	);
}
