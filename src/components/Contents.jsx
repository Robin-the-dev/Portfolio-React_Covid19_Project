import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Bar, Doughnut, Line} from 'react-chartjs-2';

const StyledSection = styled.section`
	padding: 1rem;
`;

const Contents = () => {
	const [confirmedData, setConfirmedData] = useState({
		labels: ["January", "Feburary", "March"],
		datasets: [
			{
				label: "Confirmed cases",
				backgroundColor: "salmon",
				fill: true,
				data: [10, 5, 3]
			},
		]
	});

	useEffect(() => {
		const makeData = (items) => {
			items.forEach(item => console.log(item));
		}

		const fetchEvents = async () => {
			const res = await axios.get('https://api.covid19api.com/total/dayone/country/kr');
			makeData(res.data);
		}
		fetchEvents();
	});

	const options = {
		plugins: {
			title: {
				display: true,
				text: '누적 확진자 통계',
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
			<h2>국내 코로나 현황</h2>
			<div>
				<div>
					<Bar data={confirmedData} options={options} />
				</div>
			</div>
		</StyledSection>
	);
}

export default Contents;
