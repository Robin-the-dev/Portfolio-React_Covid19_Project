import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Bar, Line} from 'react-chartjs-2';

const StyledSection = styled.section`
	padding: 1rem;
`;

const Contents = ({match}) => {
	const [confirmedData, setConfirmedData] = useState({});
	const [quarantinedData, setQuarantinedData] = useState({});

	useEffect(() => {
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

			return arr.slice(arr.length - 31, arr.length);
		}

		const fetchEvents = async () => {
			const res = await axios.get('https://api.covid19api.com/total/dayone/country/' + match.params.code);

			const data = makeData(res.data);

			const dateLabels = data.map(data => `${data.date} ${data.month + 1} ${data.year}`);

			setConfirmedData({
				labels: dateLabels,
				datasets: [
					{
						label: "Confirmed Cases",
						backgroundColor: "salmon",
						fill: true,
						data: data.map(data => data.confirmed)
					}
				]
			});

			setQuarantinedData({
				labels: dateLabels,
				datasets: [
					{
						label: "Quarantined Cases",
						backgroundColor: "magenta",
						fill: false,
						data: data.map(data => data.active)
					}
				]
			});
		}

		fetchEvents();
	}, [match.params.code]);

	const barOptions = {
		plugins: {
			title: {
				display: true,
				text: 'Cumulative confirmed cases',
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
				text: 'Current qurantined cases',
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
					<Line data={quarantinedData} options={lineOptions} />
					<br />
				</div>
			</div>
		</StyledSection>
	);
}

export default Contents;
