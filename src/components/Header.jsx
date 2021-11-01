import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import SelectBox from './SelectBox';

const StyledHeader = styled.header`
	padding: 1rem 2rem;
	background: #3b5998;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledLink = styled(Link)`
	color: white;
	padding: 0 5px;
	text-decoration: none;
	&:hover {
		color: grey;
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<StyledLink className='h1' to='/'>COVID-19</StyledLink>
			<div>
				<StyledLink to="/korea">Korea</StyledLink>
				<StyledLink to="/japan">Japan</StyledLink>
				<SelectBox />
			</div>
		</StyledHeader>
	);
}

export default Header;
