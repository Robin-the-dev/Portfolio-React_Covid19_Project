import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

const SelectBox = ({history, location}) => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		// order countryies alphabetically
		const orderCountries = (countries) => {
			return countries.sort((a, b) => a.Country.localeCompare(b.Country));
		}
		
		// fetch countries from API
		const fetchCountries = async () => {
			const res = await axios.get('https://api.covid19api.com/countries');
			const orderedCountries = orderCountries(res.data);
			setCountries(orderedCountries);
		}
		
		fetchCountries();
	}, []);
	
	// get country code from select box and pass to URL
	const changeCode = (e) => {
		// if select is selected, do nothing
		if(e.target.value === 'select') {
			return
		} else {
			history.push(`/country/${e.target.value}`);
		}
	}

	return (
		<select style={{width: '10rem'}} className='form-select' defaultValue='select' onChange={changeCode}>
			<option key='select' value='select'>Select</option>
			{countries.map((country) => {
				return <option key={country.ISO2} value={country.ISO2}>{country.Country}</option>
			})}
		</select>
	);
}

// need to be exported with withRouter to use history object in react-router-dom
export default withRouter(SelectBox);
