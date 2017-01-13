import {
  RECEIVE_SPOT_FORECAST,
  RECEIVE_SPOT_WEATHER,
} from '../constants';

import merge from 'lodash/merge';

const Spots = (state = {}, action) => {

  const newState = merge({}, state);

  switch(action.type) {
  case: RECEIVE_SPOT_FORECAST: 
    newState[action.spotId].forecast = action.forecast;
    return newState;
  case: RECEIVE_SPOT_WEATHER: 
    newState[action.spotId].weather = action.weather;
    return newState;
  default: 
    return state;
  }

};

export default Spots;

