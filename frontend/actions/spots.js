import { 
	RECEIVE_SPOT, 
	RECEIVE_SPOTS, 
	RECEIVE_SPOT_FORECAST, 
	RECEIVE_SPOT_WEATHER,
	RECEIVE_SPOT_OVERVIEW,
	FETCH_SPOT_FORECAST,
	FETCH_SPOT_WEATHER
} from '../constants';

import * as API from '../utils/api'

export const receiveSpot = spot => ({
	type: RECEIVE_SPOT,
	spot
})

export const receiveSpots = spots => ({
	type: RECEIVE_SPOTS,
	spots
});

export const receiveSpotForecast = (id, forecast) => ({
	type: RECEIVE_SPOT_FORECAST,
	id,
	forecast
});

export const receiveSpotOverview = (id, overview) => ({
	type: RECEIVE_SPOT_OVERVIEW,
	id,
	overview
});

export const fetchSpotForecast = id => dispatch => (
  API.fetchSpotForecast(id)
    .then(forecast => dispatch(receiveSpotForecast(id, forecast)))
);

export const fetchSpotOverview = id => dispatch => (
  API.fetchSpotForecast(id)
    .then(overview => dispatch(receiveSpotOverview(id, overview)))
);