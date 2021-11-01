import React, {useEffect, useState} from 'react';
import axios from 'axios';

const SelectBox = () => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const orderCountries = (countries) => {
			return countries.sort((a, b) => a.Country.localeCompare(b.Country));
		}

		const fetchCountries = async () => {
			const res = await axios.get('https://api.covid19api.com/countries');
			const orderedCountries = orderCountries(res.data);
			setCountries(orderedCountries);
		}
		
		fetchCountries();
	}, []);
	
	return (
		<select className="form-select">
			<option key="select" value="select">Select</option>
			{countries.map((country) => {
				return <option key={country.ISO2} value={country.ISO2}>{country.Country}</option>
			})}
		</select>
	);
}

export default SelectBox;
