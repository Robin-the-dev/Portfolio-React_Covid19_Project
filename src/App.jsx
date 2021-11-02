import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header';
import Contents from './components/Contents';
import Home from './components/Home';

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

const App = () => {
	return (
		<Router>
			<StyledDiv>
				<Header />
				<Route exact path='/' component={Home} />
				<Route path='/country/:code' component={Contents} />
			</StyledDiv>
		</Router>
	);
}

export default App;
