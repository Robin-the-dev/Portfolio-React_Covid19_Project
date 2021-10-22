import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
	padding: 1rem 2rem;
	background: #3b5998;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledH1 = styled.h1`
	color: white;
`;

const StyledSelect = styled.select`
	height: 30px;
	width: 140px;
	border-radius: 5px;
	border: none;
`;

const Header = () => {
	return (
		<StyledHeader>
			<StyledH1>COVID-19</StyledH1>
			<StyledSelect>
				<option>국내</option>
				<option>세계</option>
			</StyledSelect>
		</StyledHeader>
	);
}

export default Header;
