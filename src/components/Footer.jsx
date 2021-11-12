import React from 'react';
import styled from 'styled-components';

// set footer's css to be fixed at the bottom
const StyledFooter = styled.footer`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	background: #3b5998;
	color: white;
	padding: 1rem 0;
	text-align: center;
`;

const Footer = () => {
	return (
		<div>
			<StyledFooter>Copyright by Robin H.J. Kwon</StyledFooter>
		</div>
	);
}

export default Footer;
