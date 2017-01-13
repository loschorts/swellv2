import { 
	RECEIVE_SPOT, 
	RECEIVE_SPOTS, 
	RECEIVE_SPOT_FORECAST, 
	RECEIVE_SPOT_WEATHER,
	FETCH_SPOT_FORECAST,
	FETCH_SPOT_WEATHER
} from '../constants';

import API from '../util/api'

export const receiveSpot = spot => ({
	type: RECEIVE_SPOT,
	spot
})

export const receiveSpots = spots => ({
	type: RECEIVE_SPOTS,
	spots
});

export const receiveSpotForecast = forecast => ({
	type: RECEIVE_SPOT_FORECAST,
	forecast
});

export const receiveSpotWeather = weather => ({
	type: RECEIVE_SPOT_WEATHER,
	forecast
});

export const fetchSpotForecast = spot => dispatch => (
  API.fetchSpotForecast({lng: spot.lng, lat: spot.lat})
    .then(forecast => dispatch(receiveSpotForecast(forecast));
);

export const fetchSpotWeather = spot => dispatch => (
  API.fetchSpotWeather(spot.spitcast_id)
    .then(weather => dispatch(receiveSpotWeather(weather));
);
