import {
  RECEIVE_SEARCH_RESULTS,
} from '../constants';

import merge from 'lodash/merge';

const Search = (state = {results: []}, action) => {

  const newState = merge({}, state);

  switch(action.type) {
  case RECEIVE_SEARCH_RESULTS: 
    newState.results = action.results;
    return newState;
  default: 
    return state;
  }

};

export default Search;
