import { 
	FETCH_COUNTY_FORECAST, 
	RECEIVE_COUNTY_FORECAST 
} from '../constants';

import API from '../util/api';

export const receiveCountyForecast = forecast => ({
	type: RECEIVE_COUNTY_FORECAST,
	forecast: forecast
});

export const fetchCountyForecast = county => dispatch => ({
	API.fetchCountyForecast(county)
		.then( forecast => dispatch(receiveCountyForecast(forecast)));
})