import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Bar, Doughnut, Line} from 'react-chartjs-2';

const StyledSection = styled.section`
	padding: 1rem;
`;

const Contents = () => {
	const [confirmedData, setConfirmedData] = useState({});

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

			return arr.slice(arr.length - 31, arr.length - 1);
		}

		const fetchEvents = async () => {
			const res = await axios.get('https://api.covid19api.com/total/dayone/country/kr');
			const data = makeData(res.data);

			setConfirmedData({
				labels: data.map(data => `${data.date} ${data.month + 1} ${data.year}`),
				datasets: [
					{
						label: "Confirmed Cases",
						backgroundColor: "salmon",
						fill: true,
						data: data.map(data => data.confirmed)
					}
				]
			})
		}

		fetchEvents();
	}, []);

	const options = {
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

	return (
		<StyledSection>
			<h2>The current status of Covid-19 in Korea</h2>
			<div>
				<div>
					<Bar data={confirmedData} options={options} />
				</div>
			</div>
		</StyledSection>
	);
}

export default Contents;
