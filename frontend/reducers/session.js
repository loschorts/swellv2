import {
  RECEIVE_AUTH_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_ERRORS
} from '../constants';

import merge from 'lodash/merge';

const Session = (state = { currentUser: null, errors: [] }, action) => {

	const nextState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_AUTH_ERRORS: 
    	nextState.errors = action.errors;
      return nextState;

    case RECEIVE_CURRENT_USER:
      nextState.errors = [];
      nextState.currentUser = action.user;
      return nextState;

    default: 
      return state;
  }

};

export default Session;