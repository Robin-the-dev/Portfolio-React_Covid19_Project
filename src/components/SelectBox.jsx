import React, {useEffect} from 'react';
import axios from 'axios';

const SelectBox = () => {
	let countries;

	useEffect(() => {
		const fetchCountries = async () => {
			countries = await axios.get('https://api.covid19api.com/countries');
			console.log(countries.data);
		}

		fetchCountries();
	}, []);

	return (
		<select>
			<option value=""></option>
		</select>
	);
}

export default SelectBox;
