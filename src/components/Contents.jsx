import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Bar, Line} from 'react-chartjs-2';

const StyledSection = styled.section`
	padding: 1rem;
`;

const Contents = ({match}) => {
	// set two hooks for confirmed and deaths data (Can be added more)
	const [confirmedData, setConfirmedData] = useState({});
	const [deathsData, setDeathsData] = useState({});

	useEffect(() => {
		// pick and make specific data that needs for this application
		const makeData = (items) => {
			const arr = items.reduce((acc, cur) => {
				const curDate = new Date(cur.Date);
				const year = curDate.getFullYear();
				const month = curDate.getMonth();
				const date = curDate.getDate();
				const confirmed = cur.Confirmed;
				const active = cur.Active;
				const deaths = cur.Deaths;
				const recovered = cur.Recovered;

				acc.push({year, month, date, confirmed, active, deaths, recovered});

				return acc;
			}, []);

			// calculate new confirmed cases
			for(let i = 1; i < arr.length; i++) {
				if(i === 1) arr[i - 1].dailyConfirmed = arr[i - 1].confirmed;
				arr[i].dailyConfirmed = arr[i].confirmed - arr[i-1].confirmed;
			}

			// cut data for one month
			return arr.slice(arr.length - 31, arr.length);
		}
		
		// fetch data from API
		const fetchEvents = async () => {
			const res = await axios.get('https://api.covid19api.com/total/dayone/country/' + match.params.code);

			const data = makeData(res.data);

			// make date labels from data for chart label
			const dateLabels = data.map(data => `${data.date} ${data.month + 1} ${data.year}`);

			setConfirmedData({
				labels: dateLabels,
				datasets: [
					{
						label: "New Confirmed Cases",
						backgroundColor: "salmon",
						fill: true,
						data: data.map(data => data.dailyConfirmed)
					}
				]
			});

			setDeathsData({
				labels: dateLabels,
				datasets: [
					{
						label: "Deaths",
						backgroundColor: "magenta",
						fill: false,
						data: data.map(data => data.deaths)
					}
				]
			});
		}

		fetchEvents();
		// second argument of useEffect function must be [match.params.code] to detect change
	}, [match.params.code]);

	// chart options
	const barOptions = {
		plugins: {
			title: {
				display: true,
				text: 'New confirmed cases',
				fontSize: 16
			},
			legend: {
				display: true,
				position: 'bottom'
			}
		}
	}
	const lineOptions = {
		plugins: {
			title: {
				display: true,
				text: 'Cumulative death cases',
				fontSize: 16
			},
			legend: {
				display: true,
				position: 'bottom'
			}
		}
	}

	return (
		<StyledSection>
			<h2>The current status of Covid-19 in {match.params.code}</h2>
			<div>
				<div>
					<Bar data={confirmedData} options={barOptions} />
					<br />
					<Line data={deathsData} options={lineOptions} />
					<br />
				</div>
			</div>
		</StyledSection>
	);
}

export default Contents;
