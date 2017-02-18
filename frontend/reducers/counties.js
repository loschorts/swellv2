import {
  RECEIVE_COUNTY_FORECAST,
} from '../constants';

import merge from 'lodash/merge';

const Counties = (state = [], action) => {

  const newState = state.slice(0);

  switch(action.type) {
  case RECEIVE_COUNTY_FORECAST: 
    newState[action.county].forecast = action.forecast;
    return newState;
  default: 
    return state;
  }

};

export default Counties;