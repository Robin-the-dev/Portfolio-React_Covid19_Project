import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

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

const StyledLink = styled(Link)`
	color: white;
	padding: 0 5px;
`;

const Header = () => {
	return (
		<StyledHeader>
			<StyledH1>COVID-19</StyledH1>
			<div>
				<StyledLink to="/korea">Korea</StyledLink>
				<StyledLink to="/japan">Japan</StyledLink>
			</div>
		</StyledHeader>
	);
}

export default Header;
