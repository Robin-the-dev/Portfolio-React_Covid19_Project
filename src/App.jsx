import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header';
import Contents from './components/Contents';
import Home from './components/Home';
import Footer from './components/Footer';

const StyledDiv = styled.div`
	min-height: 100vh;
	padding-bottom: 4rem;
	position: relative;
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
				<Footer />
			</StyledDiv>
		</Router>
	);
}

export default App;
