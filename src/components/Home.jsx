import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';

import MyCard from './MyCard';

const StyledH2 = styled.h2`
	text-align: center;
	margin-top: 3rem;
	margin-bottom: 2rem;
`;

const Home = () => {
	const [globalCase, setGlobalCase] = useState({});

	useEffect(() => {
		axios.get('https://api.covid19api.com/summary')
			.then((res) => {
				const curDate = new Date(res.data.Global.Date);

				setGlobalCase({
					currentDate: curDate.toDateString(),
					totalConfirmed: res.data.Global.TotalConfirmed,
					newConfirmed: res.data.Global.NewConfirmed,
					totalDeaths: res.data.Global.TotalDeaths,
					newDeaths: res.data.Global.NewDeaths
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<StyledH2>Global Covid-19 Status in {globalCase.currentDate}</StyledH2>
			<Row lg={4} md={2} sm={1} xs={1}>
				<Col>
					<MyCard header='Total Confirmed Cases' title={globalCase.totalConfirmed} text='It is blah' />
				</Col>
				<Col>
					<MyCard header='New Confirmed Cases' title={globalCase.newConfirmed} text='It is blah' />
				</Col>
				<Col>
					<MyCard header='Total Death Cases' title={globalCase.totalDeaths} text='It is blah' />
				</Col>
				<Col>
					<MyCard header='New Death Cases' title={globalCase.newDeaths} text='It is blah' />
				</Col>
			</Row>
		</div>
	);
}

export default Home;
