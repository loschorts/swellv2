import {
  RECEIVE_SPOT_FORECAST,
  RECEIVE_SPOT_WEATHER,
} from '../constants';

import merge from 'lodash/merge';

import {getBy} from '../utils/selectors';

const Spots = (state = [], action) => {

  const newState = state.slice(0);

  switch(action.type) {
  case RECEIVE_SPOT_FORECAST: 
    getBy(newState, "id", action.id).forecast = action.forecast;
    return newState;
  default: 
    return state;
  }

};

export default Spots;

