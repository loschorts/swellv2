import {
  RECEIVE_SPOT_FORECAST,
  RECEIVE_SPOT_WEATHER,
  RECEIVE_SPOT_OVERVIEW
} from '../constants';

import merge from 'lodash/merge';

import {getBy} from '../utils/selectors';

const Spots = (state = [], action) => {

  const newState = state.slice(0);

  switch(action.type) {
  case RECEIVE_SPOT_FORECAST: 
    getBy(newState, "id", action.id).forecast = action.forecast;
    getBy(newState, "id", action.id).overview = action.forecast.overview;
    return newState;
  case RECEIVE_SPOT_OVERVIEW: 
    getBy(newState, "id", action.id).overview = action.overview;
    return newState;
  default: 
    return state;
  }

};

export default Spots;

