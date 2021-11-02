import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Card} from 'react-bootstrap';
import styled from 'styled-components';

const StyledDiv = styled.div`
	padding: 3rem 5rem;
	display: flex;
	justify-content: space-between;
`;

const StyledH2 = styled.h2`
	text-align: center;
	margin-top: 3rem;
`;

const StyledCard = styled(Card)`
	width: 15rem;
	text-align: center;
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
			<StyledDiv>
				<StyledCard bg='light'>
					<Card.Header>Total Confirmed Cases</Card.Header>
					<Card.Body>
						<Card.Title>{globalCase.totalConfirmed}</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
						</Card.Text>
					</Card.Body>
				</StyledCard>	
				<StyledCard bg='light'>
					<Card.Header>New Confirmed Cases</Card.Header>
					<Card.Body>
						<Card.Title>{globalCase.newConfirmed}</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
						</Card.Text>
					</Card.Body>
				</StyledCard>		
				<StyledCard bg='light'>
					<Card.Header>Total Death Cases</Card.Header>
					<Card.Body>
						<Card.Title>{globalCase.totalDeaths}</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
						</Card.Text>
					</Card.Body>
				</StyledCard>
				<StyledCard bg='light'>
					<Card.Header>New Death Cases</Card.Header>
					<Card.Body>
						<Card.Title>{globalCase.newDeaths}</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
						</Card.Text>
					</Card.Body>
				</StyledCard>
			</StyledDiv>
		</div>
	);
}

export default Home;
