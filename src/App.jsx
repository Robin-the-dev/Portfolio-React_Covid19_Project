import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Contents from './components/Contents';

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

const App = () => {
	return (
		<StyledDiv>
			<Header />
			<Contents />
		</StyledDiv>
	);
}

export default App;
